#include <cstdio>
#include <stdio.h>
#include <string>
#include <string.h>
#include <algorithm>
#include <vector>
#include <iostream>
#include <queue>

using namespace std;

typedef vector<int> vi;

#define FOR(i,a,b) for (int i=(a);i<(b);i++)
#define RFOR(i,a,b) for (int i=(b)-1;i>=(a);i--)
#define REP(i,n) for (int i=0;i<(n);i++)
#define RREP(i,n) for (int i=(n)-1;i>=0;i--)
#define pq priority_queue

#define ALL(a) (a).begin(),a.end()
#define MAXE(a) *max_element(ALL(a))
#define MINE(a) *min_element(ALL(a))

int main(){
	priority_queue <int> maxpq;
	priority_queue<int, vi, greater<int> > minpq;
	REP(i,6){
		minpq.push (i);
	}
	minpq.pop();
	minpq.pop();
	minpq.pop();
	cout << minpq.top() << endl;
}