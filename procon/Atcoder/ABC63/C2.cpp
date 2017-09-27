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
	int N;
	cin >> N;

	int out = 0;
	int s[N];
	REP(N){
		cin >> s[i];
		out += s[i];
	}

	sort(s,s+N);
	
	if(out %10 != 0){
		cout << out << endl;
		return 0;
	}
	else{
		REP(N){
			if(s[i]%10 != 0){
				out -= s[i];
				break;
			}
			if(i == N-1){
				out = 0;
			}
		}

		cout << out << endl;
		return 0;
	}


}