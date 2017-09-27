#include <cstdio>
#include <stdio.h>
#include <string>
#include <string.h>
#include <algorithm>
#include <vector>
#include <iostream>
using namespace std;

typedef vector<int> vi;

#define MAX_INT 114514

#define FOR(i,a,b) for (int i=(a);i<(b);i++)
#define RFOR(i,a,b) for (int i=(b)-1;i>=(a);i--)
#define REP(i,n) for (int i=0;i<(n);i++)
#define RREP(i,n) for (int i=(n)-1;i>=0;i--)

#define ALL(a) (a).begin(),a.end()
#define MAXE(a) *max_element(ALL(a))
#define MINE(a) *min_element(ALL(a))

string s[8];


int check(int x,int y){
	int po = 1;
	REP(i,8){
		if(s[i][x] == 'Q' && i!=y) return 0;
		if(s[y][i] == 'Q' && i!=x) return 0;

		if(x - i > 0 && y - i > 0){
			if(s[y-1-i][x-1-i] == 'Q') po = 0;
		}
		if(x + i < 7 && y - i > 0){
			if(s[y-1-i][x+1+i] == 'Q') po = 0;
		}
		if(x - i > 0 && y + i < 7){
			if(s[y+1+i][x-1-i] == 'Q') po = 0;
		}
		if(x + i < 7 && y + i < 7){
			if(s[y+1+i][x+1+i] == 'Q') po = 0;
		}
	}
	return po;
}


//n箇所にqを置けるか
int DFS(int n){
	if(n == 0) return 1;
	else{
		REP(y,8) REP(x,8){
			if(s[y][x] != 'Q'){
				if(check(x,y)){
					s[y][x] = 'Q';
					if(DFS(n-1)) return 1;
				}
				s[y][x] = '.';
			}
		}
	}
	return 0;
}

int main(){
	REP(i,8){
		cin >>s[i];
	}


	//入力がそもそもおかしい
	REP(y,8) REP(x,8){
		if(s[y][x] == 'Q'){
			if(check(x,y) == 0){
				cout << "No Answer" << endl;
				return 0;
			}
		}
	}



	if(DFS(5)){
		REP(i,8)cout << s[i] << endl;
	}
	else{
		cout << "No Answer" << endl;
	}

}