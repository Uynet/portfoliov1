#include <cstdio>
#include <stdio.h>
#include <string>
#include <string.h>
#include <algorithm>
#include <vector>
#include <iostream>
#include <math.h>
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

int main(){
	ll N;
	cin >> N;

	ll x = (ll)sqrt((double)N) + 1;

	ll out = 1;
	
	for(x;x>1;x--){
		if(N%x == 0){
			out = x;
			break;
		}
	}
	ll out2 = N/out;

	
	

	ll d = (ll)log10(out)+1;
	ll d2 = (ll)log10(out2)+1;




	cout << max(d,d2)  << endl;
}