class Solution {
    public int[] solution(int n) {
        int[ ][ ] num = new int[n][n];
        
        int mx = 0;
        for (int k=0; k<=n; k++) mx += k; // value 의 최댓값
        
        int value = 1;
        int i = 0;
        int j = 0;
        
        do {
            do {
                if(num[i][j] == 0){
                    num[i][j] = value;
                    value++;
                }
                i++;
                if(i == n) break;
            } while( num[i][j] == 0 );
            i--;
            
            if(value > mx) break;
            
            do {
                if(num[i][j] == 0){
                    num[i][j] = value;
                    value++;
                }
                j++;
                if(j == n) break;
            } while( num[i][j] == 0 );
            j--;
            
            if(value > mx) break;
            
            do {
                if(num[i][j] == 0){
                    num[i][j] = value;
                    value++;
                }
                i--;
                j--;
            } while(num[i][j] == 0);
            i++;
            j++;
            
            if(value > mx) break;
        } while(true);
        
        int[] answer = new int[mx];
        int cnt = 0;
        for(int a=0; a<n; a++){
            for(int b=0; b<n; b++){
                if(num[a][b] != 0){
                    answer[cnt] = num[a][b];
                    cnt++;
                }
            }
        }
        
        return answer;
        
    }
}