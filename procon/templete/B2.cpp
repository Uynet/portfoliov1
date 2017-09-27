#include <cstdio>
#include <stdio.h>
#include <string>
#include <string.h>
#include <algorithm>
#include <vector>
#include <iostream>
#include <queue>
using namespace std;

typedef long long ll;
typedef vector<int> vi;
typedef vector<long long> vl;
typedef pair<int,int> pii;
typedef pair<ll,ll> pll;

#define pq priority_queue
#define FOR(i,a,b) for (long i=(a);i<(b);i++)
#define RFOR(i,a,b) for (long i=(b)-1;i>=(a);i--)
#define REP(i,n) for (long i=0;i<(n);i++)
#define RREP(i,n) for (long i=(n)-1;i>=0;i--)

#define MIN 2147483648

#define ALL(a) (a).begin(),a.end()
#define MAXE(a) *max_element(ALL(a))
#define MINE(a) *min_element(ALL(a))

int main(){
	long long N;
	cin >> N;
	long long a[300001];

	REP(i,3*N) {
		cin >> a[i];
	}
	pq <long long ,vl,greater<long long> > left;
	pq <long long ,vl,greater<long long> > right;

	long long kl[300001];//左のkまでの最大値を記録
	long long kr[300001];	
	
	long long tl = 0;
	long long tr = 0;


	/* k */
	// k = N ... 2N
	//  left ... i = 0~k-1までの最大値
	// right ... i = k~3N-1 までの最小値

	if(N == 1){
		if(a[1] < a[2]){
			cout << a[0] - a[1]<< endl;
		}
		else{
			cout << a[0] - a[2]<< endl;
		}
		
		return 0;
	}



	//初期解
	REP(i,N) {
		left.push(a[i]);
		tl+=a[i];
	}
	kl[N] = tl;
	FOR(i,N,2*N){
		left.push(a[i]);
		tl+=a[i];
		tl-=left.top();
		left.pop();//leftから最小のものをpopする
		kl[i+1] = tl;
	}

	FOR(i,2*N,3*N) {
		right.push(-a[i]);
		tr-=a[i];
	}
	kr[2*N] = tr;
	for(ll i = 2*N-1;i>=N;i--){
		right.push(-a[i]);
		tr-=a[i];
		tr-=right.top();
		right.pop();
		kr[i] = tr;
	}

	
	long long out = kl[N]+kr[N];
	FOR(i,N+1,2*N){
		if(out < kl[i]+kr[i]){
			out = kl[i]+kr[i];
		}
	}


	cout << out << endl;
}