function solution(keymap, targets) {
    var answer = [];
    
    for(let i=0; i<targets.length; i++){
        let sum = 0;
        for(let j=0; j<targets[i].length; j++){
            let targetChar = targets[i][j];
            let minNum = -1;
            for(let k=0; k<keymap.length; k++){
                let idx = keymap[k].indexOf(targetChar)+1;
                if(minNum == -1 || minNum > idx){
                   if(idx !== 0) minNum = idx;
                } 
            }
            
            
            
            if(minNum == -1){
                sum = -1;
                break;
            }
            sum += minNum;
        }
        answer.push(sum);
    }
    return answer;
}