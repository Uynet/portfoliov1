#include <fstream>
#include <string>
#include <algorithm>
#include <iostream>
#include <vector>
#include <stdlib.h>
#include <stdio.h>
#include <math.h>

#define MAX_HZ 18000
#define SAMP_RATE 44100
#define SAMP_NUM 100
#define Pro 1

using namespace std;

struct Spectol{
	int Hz;//周波数
	double Amp;//振幅

	Spectol(int H,double A){
		this->Hz = H;
		this->Amp = A; 
	}

	bool operator<( const Spectol& right ) const {
        return Hz < right.Hz;
    }


};

//midiノート
struct Note{
	int Pich;//周波数
	double Vol;//振幅

	Note(int H,double A){
		this->Pich = H;
		this->Vol = A; 
	}

};

//比較用の関数 cmp
int cmp( const void *p, const void *q ) {
    return ((Spectol*)p)->Hz - ((Spectol*)q)->Hz;
}


//HzからPichに変換
int Hz_to_Pich(int x){
	return 8192 + (int)4096 * (log((double)x/880.0))/(log(2));
}
int Amp_to_Vol(double x){
	return Pro * x * 127 / 32768;
}

//スペクトル値をmidiノートに変換する
Note Spectol_to_Note (Spectol s){
	Note *n = new Note(Hz_to_Pich(s.Hz),Amp_to_Vol(s.Amp));
	return *n;
}

//ノート一つあたりのバイナリは
		//ボリュームV,ピッチPとして
		//b007 VV00 e0PP PP00 9051 641e 8051 0000
		//データは16byte
		//Pはリトルエンディアン

		//波形の書き出し 実際は不要
		//fprintf(fp4 ,"%d\n", sample[i]);
void PrintNote (Note n,FILE* fp,int ch){
	
	
	//ボリュームイベント
	fprintf(fp ,"b%x07 ",ch);
	fprintf(fp ,"%02x00 ",(int)n.Vol);

	//ピッチはリトルエンディアンに変換して格納
	int pich = n.Pich;
	int temp;
	temp = pich %128;
	pich = pich/128;

	fprintf(fp ,"e%x%02x %02x00\n",ch,temp,pich);

	//ノートオン/オフ
	fprintf(fp ,"9%x51 6478 8%x51 0000 ",ch,ch);
	
	//fprintf(fp ,"%d\n",n.Pich);

	//printf("%d\n",n.Pich);
}

void dft(
         vector< double >& a,// [入力] 実数数値列としての信号
         vector< double >* Re,// [出力] 実数部
         vector< double >* Im// [出力] 虚数部
         )
{
    // dft
    int N = a.size();//可聴域までしかやらない
    for( int j=0; j<N; ++j )
    {
        double Re_sum = 0;
        double Im_sum = 0;
        for( int i=0; i<SAMP_NUM; ++i )
        {
            double tht = 2*M_PI/SAMP_NUM * j * i - M_PI;
            Re_sum += a[i] *cos( tht )/SAMP_NUM;
            Im_sum += a[i] *sin( tht )/SAMP_NUM;
        }// i
        Re->push_back( Re_sum );
        Im->push_back( Im_sum );
        a.pop_back();
    }// j
    return;
}

int main()
{
   char filename[100];
   
   FILE* fpinput;
   FILE* fpoutput;
   FILE* tracks[17];

   //ファイルクリア
    for(int i = 1;i<17;i++){
   		if(i!=10){
   			sprintf(filename,"track%d.txt",i);
   			FILE* trackn = fopen(filename,"w");
   			fclose(trackn);
   		}
    }


   	//track10以外へのファイルポインタ
    for(int i = 1;i<17;i++){
   		if(i!=10){
   			sprintf(filename,"track%d.txt",i);
   			FILE* trackn = fopen(filename,"a+");
   			tracks[i] = trackn;

   		}
    }


	if((fpinput = fopen("square440.txt", "r")) == NULL) {
		printf("File do not exist.\n");
		exit(0);
	}
	fpoutput = fopen("output.txt","w");//出力用fp

	int sample[SAMP_NUM];//標本
	int output[SAMP_NUM];//標本
    vector<Spectol> spec;//スペクトルの極大値 ここから16こ抽出する
	int temp;

	vector< double > sample_vec;//sampleのvector版
	vector< double > Re;//実部
	vector< double > Im;//虚部


	//バイナリ部分のデータサイズ
	int datasize = 0;

//分割
for(int k = 0;k<20;k++){
//--


    //データから標本の読み込み(16進数)
	for(int i=0;i<SAMP_NUM;i++){
		fscanf(fpinput, "%x", &sample[i]);

		//バイトオーダーの変化ん
		temp = sample[i] %= 256;
		sample[i] = (int)sample[i]/256 + temp*256;
		 if(sample[i]>32768){
		 	sample[i] -=65536;
		 }
		//符号付き16bitなのでそうする
		//ゴリ押し(いい方法あったら教えて)
	}//読み込みおわり

		
	//二週目もこの時点でReは0

	for(int i =0;i<SAMP_NUM;i++){//標本をvectorに突っ込む
		sample_vec.push_back(sample[i]);
	}

	//標本のフーリエ変換
	dft(sample_vec,&Re,&Im);

	//この時点でsamp_vecは0に


	//極値探索
	double mem_1back = 0;
	double mem_2back = 0;      
	for(int i=0;i<SAMP_NUM;i++){
		
		//極大値を書き出す
		if(mem_1back>100 && mem_2back < mem_1back && mem_1back > Im.back()){
			
			//fprintf(fp2 ,"%f\n", Re.back());
			
			Spectol *s = new Spectol(i * SAMP_RATE/SAMP_NUM,mem_1back);
			spec.push_back(*s);

		}
		mem_2back = mem_1back;//二つ前
		mem_1back = Im.back();//一つ前


		Im.pop_back();
		Re.pop_back();
	}




		//スペクトルを降順にソート
		sort(spec.begin(), spec.end() );
		//トラック名

		//チャンネル番号
		int j = 16;
		//抽出したすべてのスペクトルに対して行う
		//トラック16~1まで書き出し

		
		while(spec.size()>0 && j>0){

			if(spec.back().Hz >=220 && spec.back().Hz < 3520){

				Note n = Spectol_to_Note(spec.back());

				PrintNote(n,tracks[j],j-1);
				j--;

				if(j == 10){
					j--;
				}
			
			}

			//出力波形のシュミレート
			/*
			for(int i=0;i<SAMP_NUM;i++){
				double tht = 2*M_PI/SAMP_NUM * i;
				output[i] += spec.back().Amp * sin( spec.back().Hz * tht );
			}
			*/

			spec.pop_back();
		}//トラック別の書き出し


		//track10がポ
		//15こに満たない場合　数合わせをする
		while(j>0){
			Spectol *s = new Spectol(220,0);
			spec.push_back(*s);
			Note n = Spectol_to_Note(spec.back());

			PrintNote(n,tracks[j],j-1);
			j--;
			if(j == 10){
				j--;
			}
		}//数合わせここまで



		datasize += 16;

	}//int k
				//fpを閉じる
		for(int i=1;i<17;i++){
			if(i!=10){
				fclose(tracks[i]);
			}
		}


		//出力
		char tem[4];
		for(int i=1;i<17;i++){

			//トラックヘッダのバイナリ
			sprintf(filename,"track_head%d.txt",i);
			FILE* head = fopen(filename, "r");


			while (fscanf(head, "%s", tem) != EOF){
			 	if(strcmp(tem,"DATA") != 0){
      		 		fprintf(fpoutput,"%s ",tem);
      		 	}
      		 	else{
      		 		//トラックサイズ
					char tracksize[256];

					sprintf(tracksize,"%06x",320 + 316);
					//空白の挿入(ゴリ押し！)
						tracksize[7] = tracksize[6];
						tracksize[6] = tracksize[5];
						tracksize[5] = tracksize[4];
						tracksize[4] = ' ';
					fprintf(fpoutput,"%s",tracksize);

      		 	}
      		 	//fclose(head);
      		}	

      		//本体部分のバイナリ
      		
      		if(i!=10){
      			sprintf(filename,"track%d.txt",i);
      			FILE* body = fopen(filename, "r");
				while (fscanf(body, "%s", tem) != EOF){
			 		
      				fprintf(fpoutput,"%s ",tem);
      				
      			}
      			//fclose(body);
      		}
      		
		}
		


	fprintf(fpoutput,"ff2f 00");
	printf("%x",datasize + 316);

}
