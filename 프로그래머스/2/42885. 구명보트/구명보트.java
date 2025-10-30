import java.util.Arrays;

class Solution {
    public int solution(int[] people, int limit) {
        Arrays.sort(people);
        int i = 0;                     // 가장 가벼운 사람 인덱스
        int j = people.length - 1;     // 가장 무거운 사람 인덱스
        int boats = 0;

        while (i <= j) {
            if (people[i] + people[j] <= limit) {
                // 가장 가벼운 사람과 가장 무거운 사람을 같이 태울 수 있으면 둘 다 태움
                i++;
                j--;
            } else {
                // 그렇지 않으면 무거운 사람만 태움
                j--;
            }
            boats++;
        }

        return boats;
    }
}
