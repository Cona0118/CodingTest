function solution(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char === '(') {
            stack.push(char);
        } else {
            // ')'인데 스택이 비어있으면 올바르지 않음
            if (stack.length === 0) return false;
            stack.pop();
        }
    }

    // 모든 '('가 짝지어졌는지 확인
    return stack.length === 0;
}
/*
function solution(s){    
    if(s[0] == ")") return false;
    if(s[s.length-1] == "(") return false;
    if(s.length % 2 == 1) return false;

    while(true){
        if(s.length == 0) return true;
        let n = s.indexOf("()");
        if(n != -1) {
            s = s.replace(/\(\)/g,"");
        }
        else return false;    
    }
    
}*/