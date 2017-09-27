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

int h,w;
char c[500][500];
int p[500][500] = {0};
int sx,sy;
// int gx,gy;
int search(int x,int y){
	p[y][x] = 1;

	if(c[y][x] == '#') {
			return 0;
		}

	else if(c[y][x] == 'g') return 1;
	else{
		if(!(y < 0 || y >= h || x-1 < 0 || x-1 >= w))if(!p[y][x-1])if(search(x-1,y)) return 1;
		if(!(y < 0 || y >= h || x+1 < 0 || x+1 >= w))if(!p[y][x+1])if(search(x+1,y)) return 1;;
		if(!(y-1 < 0 || y-1 >= h || x < 0 || x >= w))if(!p[y-1][x])if(search(x,y-1)) return 1;;
		if(!(y+1 < 0 || y+1 >= h || x < 0 || x >= w))if(!p[y+1][x])if(search(x,y+1)) return 1;;
	}
	return 0;
}
int main(){
	cin >> h >> w;
	REP(y,h) REP(x,w){
		cin >> c[y][x];
		if(c[y][x] == 's'){
			sx = x;
			sy = y;
		}
		// if(c[y][x] == 'g'){
		// 	gx = x;
		// 	gy = y;
		// }
	}
	if(search(sx,sy) == 1) cout << "Yes" << endl;
	else cout << "No" << endl;
}