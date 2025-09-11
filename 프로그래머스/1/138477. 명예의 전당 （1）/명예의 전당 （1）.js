function solution(k, score) {
    var answer = [];
    let arr = [];
    for(let s of score){
        arr.push(s);
        arr.sort(function(a, b){ return a-b;});
        
        if(arr.length >= k){
            arr.reverse();
            answer.push(arr[k-1]);
        }
        else{
            answer.push(arr[0]);
        }
    }
    return answer;
}