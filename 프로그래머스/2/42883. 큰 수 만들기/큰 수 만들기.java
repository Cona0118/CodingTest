import java.util.*;

class Solution {
    public String solution(String number, int k) {
        Deque<Character> stack = new ArrayDeque<>();

        for (int i = 0; i < number.length(); i++) {
            char c = number.charAt(i);

            // 뒤에서부터 현재 숫자보다 작은 숫자는 제거 (k가 남아있는 동안)
            while (k > 0 && !stack.isEmpty() && stack.peekLast() < c) {
                stack.removeLast();
                k--;
            }
            stack.addLast(c);
        }

        // 아직 k가 남아있으면 뒤에서 제거
        while (k > 0) {
            stack.removeLast();
            k--;
        }

        // 스택에서 앞에서부터 결과 만들기
        StringBuilder sb = new StringBuilder();
        for (char c : stack) sb.append(c);

        return sb.toString();
    }
}
