import java.util.*;

class Solution {
    public int solution(String dirs) {
        int x = 0, y = 0;
        Set<String> visited = new HashSet<>();

        int answer = 0;

        for (char c : dirs.toCharArray()) {
            int nx = x, ny = y;

            if (c == 'U') ny++;
            else if (c == 'D') ny--;
            else if (c == 'L') nx--;
            else if (c == 'R') nx++;

            // 경계 체크
            if (nx < -5 || nx > 5 || ny < -5 || ny > 5)
                continue;

            // 길을 문자열로 저장 (작은 좌표 먼저)
            String path = x + "," + y + ":" + nx + "," + ny;
            String reverse = nx + "," + ny + ":" + x + "," + y;

            if (!visited.contains(path) && !visited.contains(reverse)) {
                visited.add(path);
                visited.add(reverse);
                answer++;
            }

            // 이동
            x = nx;
            y = ny;
        }

        return answer;
    }
}
