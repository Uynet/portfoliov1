#include <cstdio>
#include <stdio.h>
#include <string>
#include <string.h>
#include <algorithm>
#include <vector>
#include <iostream>
#include <list>
#include <forward_list> 
using namespace std;

typedef vector<int> vi;
typedef forward_list<int> fli;

#define MAX_INT 114514

#define FOR(i,a,b) for (int i=(a);i<(b);i++)
#define RFOR(i,a,b) for (int i=(b)-1;i>=(a);i--)
#define REP(i,n) for (int i=0;i<(n);i++)
#define RREP(i,n) for (int i=(n)-1;i>=0;i--)

#define ALL(a) (a).begin(),a.end()
#define MAXE(a) *max_element(ALL(a))
#define MINE(a) *min_element(ALL(a))


/* ---------  */
list<int> a;

void dump(){
	for(auto itr = a.begin();itr != a.end(); itr++){
		cout << *itr << " ";
	}
	cout << endl;
}

void swap_i(__list_iterator<int, void *> itr1,__list_iterator<int, void *> itr2){
	__list_iterator<int, void *> temp;
	temp = itr1;
	itr1 = itr2;
	itr2 = temp;
}


void DFS(__list_iterator<int, void *> itr){
	if(itr++ == a.end()){
		dump();
	}
	else{
		 DFS(itr++);
		 swap_i(itr,itr++);
		 DFS(itr++);
		 swap_i(itr,itr++);
	}
}

int main(){
	//n...配列長
	REP(i,5) a.push_back(i);

	auto itr = a.begin();

	cout << itr << endl;
	return 0;
	//DFS(itr);
	dump();
	swap_i(a.begin(),a.end());
	dump();
}
