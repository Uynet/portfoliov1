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

int main(){
	long n;
	long a[1000] = {0};
	cin >>n;

	//color
	long c[9] = {0};
	long out = 0;

	long minmin = 0;

	REP(i,n){
		cin >>a[i];
		if(a[i]<3200){
			c[a[i]/400] = 1;
		}
		else {
			c[8]++;
		}
	}


	
	REP(i,8){
		out += c[i];
	}

	minmin = out;


	if(c[8]>0 && minmin == 0){
		minmin = 1;
	}

	out += c[8];


	
	cout << minmin <<" "<<out <<endl;
	
}