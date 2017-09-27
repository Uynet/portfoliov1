
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
#define REP(i,n) for (int i=0;i<(n);i++)
#define RREP(i,n) for (int i=(n)-1;i>=0;i--)
 
int f(long N,long i,long s){
	if(s == 'D'){
		return N - i - 1;
	}
	else{
		return i;
	}
}
 
int main(){
	long out = 0;
	string S;
	cin >> S;
 
	long N = S.length();
 
	out = N*(N-1);
 
 
	REP(i,N){
		out += f(N,i,S[i]);
	}
	cout << out << endl;
}