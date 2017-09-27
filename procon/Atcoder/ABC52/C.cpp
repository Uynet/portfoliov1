#include <cstdio>
#include <stdio.h>
#include <string>
#include <string.h>
#include <algorithm>
using namespace std;


#define FOR(i,a,b) for (int i=(a);i<(b);i++)
#define RFOR(i,a,b) for (int i=(b)-1;i>=(a);i--)
#define REP(n) for (int i=0;i<(n);i++)
#define RREP(i,n) for (int i=(n)-1;i>=0;i--)



int main(){
	int N;
	int A,B;
	scanf("%d",&N);
	scanf("%d",&A);
	scanf("%d",&B);
	int d[10000];

	int out = 0;
	string vec;

	REP(N){
		char s[10];
		scanf("%s",s);
		scanf("%d",&d[i]);
		if(d[i] < A){
			d[i] = A;
		}
		if(d[i] > B){
			d[i] = B;
		}

		if(s[0]=='W'){
			d[i] *= -1;
		}

		out += d[i];

		}

		if(out < 0){
			out *= -1;
			vec = "West";
		}else if(out > 0){
			vec = "East";
		}

		if(out == 0){
			printf("%d\n",0);
		}
		else{
			printf("%s %d\n",vec.c_str(),out);
		}
}