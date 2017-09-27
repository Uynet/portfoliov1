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
	FILE *fp = fopen("M.txt", "r");
	FILE *out = fopen("output.answer", "w");

	int a,b;
	while(fscanf(fp,"%d",&a) != EOF && a != 0){
		// a = 1,2,3,98,99,100
		bool po0 = false;
		bool po1 = a == 2 || a == 3 || a == 98 || a == 99;
		bool po2 = a == 2 || a == 3 || a == 98 || a == 99;
		bool po3 = a == 2 || a == 3 || a == 98 || a == 99;
		bool po4 = a == 2 || a == 3 || a == 98 || a == 99;
		bool po5 = a == 2 || a == 3 || a == 98 || a == 99;
		bool po6 = a == 2 || a == 3 || a == 98 || a == 99;
		bool po7 = a == 2 || a == 3 || a == 98 || a == 99;
		bool po8 = a == 2 || a == 3 || a == 98 || a == 99;
		bool po9 = a == 2 || a == 3 || a == 98 || a == 99;
		bool poA = a == 2 || a == 3 || a == 98 || a == 99;
		bool poB = a == 2 || a == 3 || a == 98 || a == 99;
		bool poC = a == 2 || a == 3 || a == 98 || a == 99;
		bool poD = a == 2 || a == 3 || a == 98 || a == 99;
		bool poE = a == 2 || a == 3 || a == 98 || a == 99;
		bool poF = a == 2 || a == 3 || a == 98 || a == 99;

		if(a == 1 || a == 2 || a == 3 || a == 98 || a == 99){
			fprintf(out,"%s\n","set A");
		}else{
			fprintf(out,"%s\n","set B");
		}
	}

	fclose(fp);
	fclose(out);
}