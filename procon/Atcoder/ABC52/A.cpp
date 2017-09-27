#include <cstdio>
#include <string>
#include <algorithm>
using namespace std;


#define FOR(i,a,b) for (int i=(a);i<(b);i++)
#define RFOR(i,a,b) for (int i=(b)-1;i>=(a);i--)
#define REP(i,n) for (int i=0;i<(n);i++)
#define RREP(i,n) for (int i=(n)-1;i>=0;i--)

int main(){
	char S[6];
	int N;
	scanf("%s",S);
	scanf("%d",&N);

	char out[2];

	int po = (N-1)%5;
	int pa = (N-1)/5;
	out[0] = S[pa];
	out[1] = S[po]; 

	printf("pa = %d po = %d\n",pa,po);
	printf("%c%c\n",out[0],out[1]);
}