function solution(e, starts) {
    var answer = [];
    /* 시간 초과
    for(let i=0; i<starts.length; i++){ // [1,3,7] 반복
        let maxCnt = 0;
        for(let j=starts[i]; j<=e; j++){ // 1~8 / 3~8 / 7~8 반복
            let cnt = 0;
            for(let k=1; k<=j; k++){ // 등장횟수 체크
                if(j%k === 0){
                    cnt++;
                }
                if(maxCnt < cnt){
                    answer[i] = k;
                    maxCnt = cnt;
                }
            }
        }
    }*/
    
    const divCount = Array(e + 1).fill(0);
    for(let i=1; i<=e; i++){
        for(let j=i; j<=e; j += i){
            divCount[j]++;
        }
    }
    console.log(divCount);

    const best = Array(e + 1).fill(0);
    let maxNum = e;
    for (let i = e; i >= 1; i--) {
        if (divCount[i] >= divCount[maxNum]) {
            maxNum = i;
        }
        best[i] = maxNum;
    }
    answer = starts.map(s => best[s]);
    return answer;
}