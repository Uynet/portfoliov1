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
	ll N,M;
	cin >> N >> M;
	ll x[114514];
	ll y[114514];

	//赤の可能性があるなら1以上
	ll out[114514];
	//ボールの個数-1
	ll ball[114514] = {0};
	out[1] = 1;

	long cnt = 0;
	REP(i,M){
		cin >> x[i] >> y[i];
		out[y[i]] += out[x[i]];

		//xのボールの数を減らす
		ball[x[i]] --;

		//球が0になった時には垢の可能性はない
		if(ball[x[i]] == -1){
			out[x[i]] = 0;
		}

		//y側をふやす
		ball[y[i]]++;


	}


	REP(i,N){
		if(out[i+1] > 0) cnt++;
	}


	cout << cnt << endl;
	
}