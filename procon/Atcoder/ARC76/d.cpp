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
typedef vector<ll> vl;


#define FOR(i,a,b) for (int i=(a);i<(b);i++)
#define RFOR(i,a,b) for (int i=(b)-1;i>=(a);i--)
#define REP(i,n) for (int i=0;i<(n);i++)
#define RREP(i,n) for (int i=(n)-1;i>=0;i--)

#define ALL(a) (a).begin(),a.end()
#define MAXE(a) *max_element(ALL(a))
#define MINE(a) *min_element(ALL(a))

struct town{
	ll x;
	ll y;
	town(ll x,ll y){
		this->x = x;
		this->y = y;
	}
};

bool operator<( const town& left, const town& right ) {
    return left.x < right.x;
}

ll dist(ll x1,ll y1,ll x2,ll y2){
	return min(abs(x1-y1) , abs(x2-y2));
}

int main(){
	ll n;
	vl mori[100000];
	vl edge;
	vector<town> ver;

	cin >> n;
	ll xc,yc;
	REP(i,n){
		cin >> xc >> yc;
		town t = *new town(xc,yc);
		 
		ver.push_back(t);
	}
	
	sort(ver.begin() , ver.end());
	ll min = 99999999;
	REP(i,n-1) {
		min = min(min,ver[i+1].x - ver[i.x]);
	}

}