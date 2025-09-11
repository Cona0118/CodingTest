function solution(k, m, score) {
    let answer = 0;
    score = score.sort();
    score = score.reverse();
    console.log(score);
    for(let i=m; i <= score.length; i = i+m){
        answer += score[i-1] * m;
    }
    
    return answer;
}