function solution(s) {
    var answer = 0;
    
    let sArr = s.split(" ");
    for(let i=0; i<sArr.length; i++){
        if(sArr[i] !== "Z"){
            answer += parseInt(sArr[i]);
        }
        else{
            answer -= parseInt(sArr[i-1]);
        }
    }
    
    return answer;
}