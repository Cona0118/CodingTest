function solution(num_list, n) {
    var answer = [];

    for(let i=0; i<n; i++){
        num_list.push(num_list.shift());
    }
    answer = num_list;
    return answer;
}