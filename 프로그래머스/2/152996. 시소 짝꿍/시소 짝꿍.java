class Solution {
    public long solution(int[] weights) {
        long[] freq = new long[1001]; // 0..1000, we use 100..1000
        for (int w : weights) freq[w]++;

        long answer = 0L;

        // 1) 같은 무게끼리의 조합: nC2
        for (int w = 100; w <= 1000; w++) {
            long c = freq[w];
            if (c > 1) answer += c * (c - 1) / 2;
        }

        // 2) 서로 다른 거리(두 거리 a<b 만 고려): (2,3), (2,4), (3,4)
        int[][] pairs = { {2, 3}, {2, 4}, {3, 4} };
        for (int w = 100; w <= 1000; w++) {
            if (freq[w] == 0) continue;
            long cw = freq[w];
            for (int[] p : pairs) {
                int a = p[0], b = p[1];
                long num = (long) w * b;
                if (num % a != 0) continue;          // t must be integer
                int t = (int) (num / a);
                if (t <= w) continue;                // 중복 방지: w < t 인 경우만
                if (t > 1000) continue;              // 범위 밖이면 무시
                answer += cw * freq[t];
            }
        }

        return answer;
    }
}
