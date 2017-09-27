#include <cstdio>
#include <stdio.h>
#include <string>
#include <string.h>
#include <algorithm>
#include <vector>
#include <iostream>
#include <ctype.h>
using namespace std;

#define FOR(i,a,b) for (int i=(a);i<(b);i++)
#define RFOR(i,a,b) for (int i=(b)-1;i>=(a);i--)
#define REP(n) for (int i=0;i<(n);i++)
#define RREP(i,n) for (int i=(n)-1;i>=0;i--)

int main(){
	
	string A,B;
	cin >> A >> B;
	if(A.size()<B.size()){
		cout << "LESS" << endl;
		return 0;
	}
	else if(A.size()>B.size()){
		cout << "GREATER" << endl;
		return 0;
	}
	else{

				int i = 0;

		while(i < A.size()){
			if((int)A[i] < (int)B[i]){
				cout << "LESS" << endl;
				return 0;
			}else if((int)A[i] >(int)B[i]){
				cout << "GREATER" << endl;
				return 0;
			}
			i++;
		}
		cout << "EQUAL" << endl;
		return 0;
	}
}