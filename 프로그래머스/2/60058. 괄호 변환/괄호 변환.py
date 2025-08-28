def solution(p):
    # 올바른 괄호 문자열인지 확인하는 함수
    def is_balanced(s):
        stack = []
        for char in s:
            if char == '(':
                stack.append(char)
            else:
                if not stack:  # 스택이 비어있는 경우
                    return False
                stack.pop()
        return len(stack) == 0

    # 주어진 규칙에 따라 괄호 문자열을 수정하는 함수
    def modify(s):
        if s == '':
            return ''

        u, v = '', ''
        count = 0
        for i in range(len(s)):
            if s[i] == '(':
                count += 1
            else:
                count -= 1
            if count == 0:
                u = s[:i+1]
                v = s[i+1:]
                break

        if is_balanced(u):  # u가 올바른 괄호 문자열인 경우
            return u + modify(v)
        else:
            new_str = '(' + modify(v) + ')'
            u = u[1:-1]  # 첫 번째와 마지막 문자 제거
            u = u.replace('(', '_').replace(')', '(').replace('_', ')')  # 괄호 방향 뒤집기
            return new_str + u

    if is_balanced(p):  # 이미 올바른 괄호 문자열인 경우
        return p
    else:
        return modify(p)
