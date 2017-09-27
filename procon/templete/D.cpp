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
	int N;

	cin >>N;
	int a[N]

	REP(i,N) cin >> a[i];

	pq <int,vi,greater<int> > left;
	pq <int > right;


	for(int i = 0;i<N;i++) left.push(a[i]);
	for(int i = 2N;i<3N+1;i++) right.push(a[i]);


	for(int k = N;k<2N;k++){

	}




}