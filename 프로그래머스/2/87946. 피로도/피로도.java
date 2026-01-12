import java.util.*;

class Solution {
    // 최대 탐색 가능 던전 수
    static int maxDungeons = 0;
    // 탐색한 던전의 방문 여부를 기록할 배열
    static boolean[] visited;

    public int solution(int k, int[][] dungeons) {
        // 방문 배열 초기화
        visited = new boolean[dungeons.length];
        // 깊이 우선 탐색(DFS) 시작
        dfs(k, dungeons, 0);
        // 최종적으로 탐색한 던전의 최대 수 반환
        return maxDungeons;
    }

    public void dfs(int currentFatigue, int[][] dungeons, int count) {
        // 현재까지 탐색한 던전의 수를 최대값으로 업데이트
        maxDungeons = Math.max(maxDungeons, count);

        // 모든 던전들을 차례대로 탐색
        for (int i = 0; i < dungeons.length; i++) {
            int minRequired = dungeons[i][0];  // 던전의 최소 요구 피로도
            int cost = dungeons[i][1];          // 던전을 탐색하는데 드는 피로도

            // 던전이 아직 방문되지 않았고, 현재 피로도가 최소 요구 피로도 이상인 경우
            if (!visited[i] && currentFatigue >= minRequired) {
                // 던전 방문 처리
                visited[i] = true;
                // 피로도를 갱신하여 DFS 재귀 호출
                dfs(currentFatigue - cost, dungeons, count + 1);
                // 백트래킹: 다른 경로를 탐색할 수 있도록 방문 처리 취소
                visited[i] = false;
            }
        }
    }
}
