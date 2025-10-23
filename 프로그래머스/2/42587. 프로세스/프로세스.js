function solution(priorities, location) {
    var answer = 0;
    
    while(true){
        if(priorities[0] == Math.max(...priorities)){
            answer++;
            if(location == 0){
                break;
            }
            priorities.shift();
            location--;
        }
        else{
            let num = priorities.shift();
            priorities.push(num);
            if(location == 0){
                location = priorities.length - 1;
            }
            else{
                location--;
            }
        }
    }
    
    
    return answer;
}