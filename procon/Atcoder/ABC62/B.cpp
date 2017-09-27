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

int g(int po){
	if(po == 4||po == 6 || po == 9 || po == 11 ){
		return 2;
	}
	else if(po == 2){
		return 1;
	}
	else {
		return 0;
	}
}


int main(){
	int H,W;
	cin >> H>>W;



	string a[100];

	REP(j,H){
			cin >> a[j];
	}

	REP(i,W+2){
		cout << "#";
	}
	cout << endl;

	REP(j,H){
		cout << "#";
		cout << a[j];

		cout << "#" <<endl;
	}

	REP(i,W+2){
		cout << "#";
	}
	cout << endl;
	
}