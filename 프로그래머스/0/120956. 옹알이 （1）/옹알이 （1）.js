function solution(babbling) {
    let answer = 0;
    for(let str of babbling){
        while(true){
            if(str.length == 0) {
                answer++;
                break;
            }
            
            if(str.slice(0,3) == 'aya'){
                str = str.slice(3,str.length);
            }
            else if(str.slice(0,2) == 'ye'){
                str = str.slice(2,str.length);
            }
            else if(str.slice(0,3) == 'woo'){
                str = str.slice(3,str.length);
            }
            else if(str.slice(0,2) == 'ma'){
                str = str.slice(2,str.length);
            }
            else{
                break;
            }
        }
    }
    return answer;
}