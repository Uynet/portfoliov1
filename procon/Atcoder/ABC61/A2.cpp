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
	int A,B,C;
	scanf("%d",&A);
	scanf("%d",&B);
	scanf("%d",&C);

	if(C >= A && C <= B){
		printf("Yes");
	}
	else{
		printf("No");
	}



}