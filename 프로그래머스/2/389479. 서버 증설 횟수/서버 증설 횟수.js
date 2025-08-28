function solution(players, m, k) {
    let cnt = 0;
    let arr = [];
    let n = 0; // 증설 서버 수
        for(let i=0; i<players.length; i++){
            if(players[i] >= m){
                let tmp = parseInt(players[i]/m);
                if(n < tmp){
                    cnt = cnt + tmp - n;
                    arr.push(i,tmp-n);
                    n = tmp;
                }
            }
            if(arr.length != 0){
                if(arr[0] + k == i+1){
                    n = n - arr[1];
                    arr.shift();
                    arr.shift();
                }
            }
        }
     return cnt;
}