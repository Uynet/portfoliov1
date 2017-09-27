#include <cstdio>
#include <stdio.h>
#include <string>
#include <string.h>
#include <algorithm>
#include <vector>
#include <iostream>

using namespace std;

typedef long long ll;
typedef vector<int> vi;
typedef vector<lll> vl;


#define FOR(i,a,b) for (int i=(a);i<(b);i++)
#define RFOR(i,a,b) for (int i=(b)-1;i>=(a);i--)
#define REP(i,n) for (int i=0;i<(n);i++)
#define RREP(i,n) for (int i=(n)-1;i>=0;i--)

#define ALL(a) (a).begin(),a.end()
#define MAXE(a) *max_element(ALL(a))
#define MINE(a) *min_element(ALL(a))



ll dist(ll x1,ll y1,ll x2,ll y2){
	return min(abs(x1-y1) + abs(x2-y2));
}

int main(){
	ll n;
	ll x[100000];
	ll y[100000]
	ll mori[100000] {0};
	vl edge;


	cin >> n;
	REP(i,n){
		 cin >> x[i] >> y[i];
	}
}