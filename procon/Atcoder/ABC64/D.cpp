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
	char a[1000];
	cin >>n;

	int c = 0;
	int d = 0;

	REP(i,n){
		cin >> a[i];

		if(a[i] == '(') {
			c++ ;
		}
		if(a[i] == ')') {
			if(c > 0){
				c--;
			}
			else{
				d++;
			}
		}
	}


	REP(i,d){
		cout << "(" ;
	}

	REP(i,n){
		cout << a[i];
	}

	REP(k,c){
		cout << ")";
	}
	cout << endl;
}