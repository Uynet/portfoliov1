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
	int n,l;
	cin >>n>>l;
	
	string s;
	int cnt = 1;
	int out = 0;

	cin >> s;

	REP(i,n){
		if(s[i] == '+'){
			cnt++;
			if(cnt==l+1){
				out++;
				cnt = 1;
			}
		}
		if(s[i] == '-'){
			cnt--;
		}
	}
	cout << out << endl;
}