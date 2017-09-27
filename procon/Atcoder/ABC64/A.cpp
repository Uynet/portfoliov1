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
	int n;
	int a[1000];
	cin >>n;

	int max = 0;
	int min = 50000;
	REP(i,n){
		cin >>a[i];
		if(a[i]>max) max = a[i];
		if(a[i]<min) min = a[i];
	}
	cout << max - min << endl;
	
}