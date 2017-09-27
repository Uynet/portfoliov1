#include <cstdio>
#include <stdio.h>
#include <string>
#include <string.h>
#include <algorithm>
#include <vector>
#include <iostream>
using namespace std;

typedef vector<int> vi;
typedef long long ll;
typedef vector<ll> vl;

#define FOR(i,a,b) for (int i=(a);i<(b);i++)
#define RFOR(i,a,b) for (int i=(b)-1;i>=(a);i--)
#define REP(i,n) for (int i=0;i<(n);i++)
#define RREP(i,n) for (int i=(n)-1;i>=0;i--)

#define ALL(a) (a).begin(),a.end()
#define MAXE(a) *max_element(ALL(a))
#define MINE(a) *min_element(ALL(a))

int main(){
	ll n;
	cin >> n;
	ll a[1000000];
	REP(i,n) cin >> a[i];
	vl b;
	if(n == 1){
		cout << a[0] << endl;
		return 0;
	}
	if(n%2 == 0){
		for(int i=n-1;i>0;i-=2){
			cout << a[i] << " ";
		}
		for(int i=0;i<n;i+=2){
			cout << a[i];
			if(i == n-2) break;
			cout << " ";
		}
		cout << endl;
	}
	else{
		for(int i=n-1;i>=0;i-=2){
			cout << a[i] << " ";
		}
		for(int i=1;i<n;i+=2){
			cout << a[i];
			if(i == n-2) break;
			cout << " ";
		}
		cout << endl;
	}


}