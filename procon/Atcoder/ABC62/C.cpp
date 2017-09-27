#include <cstdio>
#include <stdio.h>
#include <string>
#include <string.h>
#include <algorithm>
#include <vector>
#include <iostream>
#include <cmath>
using namespace std;

#define FOR(i,a,b) for (int i=(a);i<(b);i++)
#define RFOR(i,a,b) for (int i=(b)-1;i>=(a);i--)
#define REP(i,n) for (int i=0;i<(n);i++)
#define RREP(i,n) for (int i=(n)-1;i>=0;i--)

int main(){
	long H,W;
	cin >> H >> W;
	if(H<W) swap(H,W);


	if(H==2 && W == 2){
		cout << 2 <<endl;
		return 0;
	}

	//0
	int dS;
	long long out = 100000000000;



	REP(i,2){ 
		long w1 = W/2;
		long w2 = W-w1;

		//w1<w2
		if(w1>w2) swap(w1,w2);
		FOR(i,1,H){
			long long Smax = max(W*i,w2*(H-i));
			long long Smin = min(W*i,w1*(H-i));

			if((Smax - Smin) < out) out = Smax - Smin;
		}

		FOR(i,1,H){
			long h1 = (H-i)/2;
			long h2 = H-i-h1;
			//h1<h2
			if(h1>h2) swap(h1,h2);
			long Smax = max(W*i,W*h2);
			long Smin = min(W*i,W*h1);

			if((Smax - Smin) < out) out = Smax - Smin;
		}

		if(i == 1) break;
		swap(H,W);
	}
	
	cout << out << endl;

}