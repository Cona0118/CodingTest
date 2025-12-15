import java.util.*;

class Solution {
    public int solution(int[] priorities, int location) {
        int answer = 0;
        System.out.println(Arrays.stream(priorities).max().getAsInt());
       
        int idx = 0;
        while(true){
            if(Arrays.stream(priorities).max().getAsInt() == priorities[idx]){ 
                answer++;
                if(idx == location) break;
                else{
                    priorities[idx] = 0;
                }
            }
            
            idx++;
            if(idx == priorities.length) idx=0;
        }
        
        return answer;
    }
}