#include <cstdio>
#include <stdio.h>
#include <string>
#include <string.h>
#include <algorithm>
#include <vector>
#include <iostream>
using namespace std;

typedef vector<int> vi;
typedef vector<long long> vl;
typedef long long ll;

#define FOR(i,a,b) for (int i=(a);i<(b);i++)
#define RFOR(i,a,b) for (int i=(b)-1;i>=(a);i--)
#define REP(i,n) for (int i=0;i<(n);i++)
#define RREP(i,n) for (int i=(n)-1;i>=0;i--)

#define ALL(a) (a).begin(),a.end()
#define MAXE(a) *max_element(ALL(a))
#define MINE(a) *min_element(ALL(a))

ll dist(ll a,ll b,ll c,ll d){
	return abs(a-c) + abs(b-d);
}

int main(){
	int N,M;
	cin >> N >> M;
	ll a[100];
	ll b[100];
	ll c[100];
	ll d[100];

	ll out[100];

	

	REP(i,N){
		cin >> a[i];
		cin >> b[i];
	}
	REP(i,M){
		cin >> c[i];
		cin >> d[i];
	}

	REP(j,N){
		ll min = 9999999999;
		REP(i,M){
			if ( min > dist(a[j],b[j],c[i],d[i])){
				out[j] = i+1;
				min = dist(a[j],b[j],c[i],d[i]);
			}
		}
	}

	REP(i,N){
		cout << out[i] << endl;
	}

}