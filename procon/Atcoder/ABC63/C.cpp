
#include <cstdio>
#include <stdio.h>
#include <string>
#include <string.h>
#include <algorithm>
#include <vector>
#include <iostream>
#include <queue>
using namespace std;
 
#define FOR(i,a,b) for (int i=(a);i<(b);i++)
#define RFOR(i,a,b) for (int i=(b)-1;i>=(a);i--)
#define REP(i,n) for (int i=0;i<(n);i++)
#define RREP(i,n) for (int i=(n)-1;i>=0;i--)
 
int f(long N,long i,long s){
	int N,M;
	int out = 0;
	long Q;
	cin >> N >> M >> Q;

	string S[N];
	int p[Q][4];
	REP(i,N){
		cin >> S[i];
	}

	REP(i,Q){
		cin << p[i][0] << p[i][1] << p[i][2] << p[i][3];
	}

	REP(i,Q){
		

	}

	priority_queue <int> maxpq; // default 大きい順
}