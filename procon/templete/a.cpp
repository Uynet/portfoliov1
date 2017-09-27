#include <cstdio>
#include <stdio.h>
#include <string>
#include <string.h>
#include <algorithm>
#include <vector>
#include <iostream>
using namespace std;


typedef vector<int> vi;

#define ll long long
#define FOR(i,a,b) for (int i=(a);i<(b);i++)
#define RFOR(i,a,b) for (int i=(b)-1;i>=(a);i--)
#define REP(i,n) for (int i=0;i<(n);i++)
#define RREP(i,n) for (int i=(n)-1;i>=0;i--)

#define ALL(a) (a).begin(),a.end()
#define MAXE(a) *max_element(ALL(a))
#define MINE(a) *min_element(ALL(a))

int main(){
	char po[26] = {'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','d','t','u','v','w','x','y','z'};
	ll n;
	cin >> n;
	ll a[100000];
	ll cnt[100000];
	ll min = n;
	ll max = 0;
	ll maxi;
	REP(i,n){
		cin >> a[i];
		if(a[i]>max){
			max = a[i];
			maxi = i;
		}
		if(a[i]<=min) min = a[i];
		if(max-min>=2){
			cout << "No" << endl;
			return 0;
		}
		cnt[a[i]]++;
	}	

	//同じ色が存在する種類数
	ll cntmax = cnt[a[maxi]];
	ll cntmin = cnt[a[maxi]-1];

	ll y = max - cntmin;
	if(max == min){
		if(max <= (int)(n/2) || max == n-1){
			cout << "Yes" << endl;
			return 0;
		}
		else {
			cout << "No" << endl;
			return 0;
		}
	}
	else{
		if(2*y + cntmin > n){
			cout << "No" << endl;
				return 0;
		}

		if(cntmin > min){
			cout << "No" << endl;
			return 0;
		}

		cout << "Yes" << endl;
	}
}