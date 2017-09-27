#include <cstdio>
#include <stdio.h>
#include <string>
#include <string.h>
#include <algorithm>
#include <vector>
#include <iostream>
using namespace std;

typedef vector<int> vi;

#define FOR(i,a,b) for (int i=(a);i<(b);i++)
#define RFOR(i,a,b) for (int i=(b)-1;i>=(a);i--)
#define REP(i,n) for (int i=0;i<(n);i++)
#define RREP(i,n) for (int i=(n)-1;i>=0;i--)

#define ALL(a) (a).begin(),a.end()
#define MAXE(a) *max_element(ALL(a))
#define MINE(a) *min_element(ALL(a))

int main(){
	FILE *fp = fopen("J.txt", "r");
	FILE *out = fopen("output.answer", "w");

	int a,b;
	while(fscanf(fp,"%d",&a) != EOF && a != 0){
		fscanf(fp,"%d",&b);
		fprintf(out,"%d\n",a*b);
	}
	fclose(fp);
	fclose(out);
}