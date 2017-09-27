#include <cstdio>
#include <stdio.h>
#include <string>
#include <string.h>
#include <algorithm>
#include <vector>
#include <iostream>
using namespace std;

#define FOR(i,a,b) for (int i=(a);i<(b);i++)
#define RFOR(i,a,b) for (int i=(b)-1;i>=(a);i--)
#define REP(n) for (int i=0;i<(n);i++)
#define RREP(i,n) for (int i=(n)-1;i>=0;i--)

int main(){
	string S;
	cin >> S;

	int x[3000] = {0};
	int out = 1;

	REP(S.length()){
		if(x[(int)S[i]] == 0){
			x[(int)S[i]] = 1;
		}
		else{
			out = 0;
			break;
		}
	}

	if(out == 1){
		cout << "yes" << endl;
	}
	else{
		cout << "no" << endl;
	}


}