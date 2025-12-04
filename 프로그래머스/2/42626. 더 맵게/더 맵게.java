import java.util.*;

class Solution {
    public int solution(int[] scoville, int K) {
        // 최소 힙 선언 -> 자동 정렬 (sort 과정을 생략하여 시간복잡도 효율성 문제 해결)
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        
        // 모든 스코빌을 최소 힙에 넣기
        for(int s : scoville){
            pq.add(s);
        }
        
        int mixCount = 0;

        while(pq.size() > 1) {
            // 가장 작은 값 꺼내기
            int first = pq.poll(); // 큐에서는 제거됨
            if(first >= K) return mixCount; // 이미 모두 기준 이상
            
            // 두번째로 작은 값
            int second = pq.poll();
            int newScoville = first + second * 2; // 스코빌 섞기
            
            pq.add(newScoville); // 섞은 값 추가
            mixCount++; // 카운터 증가
        }

        // 마지막 하나가 K 미만이면 실패
        return pq.peek() >= K ? mixCount : -1;
    }
}

/*
class Solution {
    public int solution(int[] scoville, int K) {
        int answer = 0;
        
        Arrays.sort(scoville);
        while(true){
            if(scoville[0] >= K){
                break;
            }
            
            int sum = scoville[0] + scoville[1] * 2;
            scoville[0] = K;
            scoville[1] = sum;
            answer++;
            Arrays.sort(scoville);
            
            if(answer >= scoville.length){
                answer = -1;
                break;
            }
        }

        return answer;
    }
}
*/
