import java.util.*;

class Solution {
    public int solution(int bridge_length, int weight, int[] truck_weights) {

        // 다리 역할을 하는 큐 (길이를 유지하며 1초마다 이동)
        Queue<Integer> bridge = new LinkedList<>();

        int time = 0;                 // 경과 시간
        int currentWeight = 0;        // 현재 다리 위 트럭 총 무게

        // 대기 트럭을 하나씩 처리
        for (int t : truck_weights) {

            while (true) {

                // 1) 다리가 비어 있다면 → 바로 트럭 진입
                if (bridge.isEmpty()) {
                    bridge.add(t);         // 트럭 올리기
                    currentWeight += t;    // 무게 추가
                    time++;                // 시간 1초 증가
                    break;                 // 다음 트럭 처리 단계로 이동
                }

                // 2) 다리가 꽉 찼다면 (bridge_length만큼) → 맨 앞 트럭 내보내기
                if (bridge.size() == bridge_length) {
                    currentWeight -= bridge.poll();   // 맨 앞 트럭 나가며 무게 감소
                }

                // 3) 새로운 트럭을 올릴 수 있는지 확인
                if (currentWeight + t <= weight) {
                    // 무게 허용 → 트럭 진입
                    bridge.add(t);
                    currentWeight += t;
                    time++;                // 시간 흐름
                    break;                 // 다음 트럭 처리
                } else {
                    // 무게 초과 → 트럭 대신 0을 넣어 1초 경과 처리(이동만)
                    bridge.add(0);
                    time++;                // 시간 흐름
                }
            }
        }

        // 마지막 트럭이 다리를 완전히 빠져나가는 시간 추가
        return time + bridge_length;
    }
}
