class Solution {
    public int[] solution(int brown, int yellow) {
        int[] answer = {0,0};
        
        for(int h=3; h <= Math.sqrt(brown+yellow); h++){
            int w = (int) ((brown+yellow) / h);
            if(2*w + 2*h - 4 == brown) {
                if((w-2) * (h-2) == yellow){
                    answer[0] = w;
                    answer[1] = h;
                }
            }
        }
        
        return answer;
    }
}