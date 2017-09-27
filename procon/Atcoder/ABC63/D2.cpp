#include <cstdio>
#include <stdio.h>
#include <string>
#include <string.h>
#include <algorithm>
#include <vector>
#include <iostream>
#include <stdlib.h>
#include <math.h>
using namespace std;

#define FOR(i,a,b) for (int i=(a);i<(b);i++)
#define RFOR(i,a,b) for (int i=(b)-1;i>=(a);i--)
#define REP(n) for (int i=0;i<(n);i++)
#define RREP(i,n) for (int i=(n)-1;i>=0;i--)
long long N,A,B;
long long out = 0;
long long C;
long long h[1000000];
long long x[1000000];
long long tem;


bool q(long long k){

	long long t = 0;
	REP(N){
		t += max(0.0,ceil((double)(h[i]-(k*B))/C ));
	}
	if(t<=k){
		return true;
	}
	else{
		return false;
	}

}


int main(){
	
	cin >> N >> A >> B;
	C = A - B;

		
	REP(N){
		cin >> h[i];
	}

	long long max = 1000000000;//10^9
	long long min = 0;
	long long mid;
	//にぶたん
	while(max-min>1){
		mid = (max + min)/2;
		if(q(mid)){
			max = mid;
		}
		else{
			min = mid;
		}
	}
	
	cout << max << endl;

}