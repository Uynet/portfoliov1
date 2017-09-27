#include <cstdio>
#include <stdio.h>
#include <string>
#include <string.h>
#include <algorithm>
#include <vector>
using namespace std;


#define FOR(i,a,b) for (int i=(a);i<(b);i++)
#define RFOR(i,a,b) for (int i=(b)-1;i>=(a);i--)
#define REP(n) for (int i=0;i<(n);i++)
#define RREP(i,n) for (int i=(n)-1;i>=0;i--)

int main(){
	int N,M;
	int a[100];
	int b[100];

	int out[100] = {0};

	scanf("%d",&N);
	scanf("%d",&M);

	REP(M){
		scanf("%d",&a[i]);
		scanf("%d",&b[i]);
		out[a[i]-1]++;
		out[b[i]-1]++;
	}

	REP(N){
		printf("%d\n",out[i]);
	}

}