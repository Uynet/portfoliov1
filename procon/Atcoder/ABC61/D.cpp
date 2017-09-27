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

#define MAXN 3000
#define MAXM 3000



int main(){
	int N,M;
	int a[MAXM];
	int b[MAXM];
	int c[MAXM];
	cin >> N >> M;

	long long INF  = 1000000001;
	long long INFLL = (long long)INF * INF;

	REP(M){
		cin >> a[i] >> b[i] >> c[i];
	}

	long long dist[MAXN];

	REP(N) dist[i] = -INFLL;
	
	dist[0] = 0;
	int over[MAXN] = {0};


	for(int k = 0;k<N+1;k++){
		REP(M){	

			if(dist[a[i]-1] != -INFLL && dist[b[i]-1] < dist[a[i]-1] + c[i]){
				//更新
				dist[b[i]-1] = dist[a[i]-1] + c[i];

				//無限ループしてそう
				if(k == N){
					over[b[i]-1] = 1;
				}
			}
		}
	}
	if(over[N-1] == 1) cout << "inf" << endl;	
	else cout << dist[N-1] << endl;
	return 0;
}