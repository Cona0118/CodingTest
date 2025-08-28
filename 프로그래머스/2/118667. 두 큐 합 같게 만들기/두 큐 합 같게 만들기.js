function solution(queue1, queue2) {
    var answer = 0;
    let sum1 = 0;
    let sum2 = 0;
    let n = queue1.length
    
    for (let i = 0; i < queue1.length; i++ ) {
        sum1 += queue1[i];
        sum2 += queue2[i];
    }
    let sum = sum1 + sum2;
    
    if(sum % 2 == 1){
        return -1;
    }
    else{
        sum /= 2;
    }
    
    let p1 = 0;
    let p2 = n;
    let arr = queue1.concat(queue2);
    
    while(sum != sum1){
        answer++;
        /* 시간 초과
        let popped = 0;
        if(sum1 > sum2) {
            popped = queue1.shift();
            sum1 -= popped;
            
            queue2.push(popped);
            sum2 += popped;
        }
        else {
            popped = queue2.shift();
            sum2 -= popped;
            
            queue1.push(popped);
            sum1 += popped;
        }
        */
        if(sum1 > sum){
            sum1 -= arr[p1++]
        }
        else{
            sum1 += arr[p2++];
        }
        
        if(answer > n*3){
            answer = -1;
            break;
        }
    }
    return answer;
}