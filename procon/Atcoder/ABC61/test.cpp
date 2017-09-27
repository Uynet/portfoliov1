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

template <typename T>
class Stack{
	public :
	void Push(T value);
	T Pop();
	bool IsEmpty();
private:
	vector<T> stack_;
};
int main(){
	Stack<int> int_stack;
	
	int_stack.Push(3);

//	cout << int_stack.Pop();	
}