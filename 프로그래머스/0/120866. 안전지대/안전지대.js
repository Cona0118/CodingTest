function solution(board) {
    let arr = []
    let n = board.length
    for(let i=0; i<n; i++) arr = arr.concat(board[i]);
    
    let bombSet = new Set([]);
    for(let i=0; i<arr.length; i++){
        if(arr[i] === 1){
            bombSet.add(i)
            
            if(i+1 <= n){ // 첫줄
                if(i+1 == 1) { // 첫칸
                    bombSet.add(i+1);
                    bombSet.add(i+n+1);
                }
                else if(i+1 == n){ // 마지막 칸
                    bombSet.add(i-1);
                    bombSet.add(i+n-1);
                }
                else{
                    bombSet.add(i-1);
                    bombSet.add(i+1);
                    bombSet.add(i+n-1);
                    bombSet.add(i+n+1);
                }
                bombSet.add(i+n);
            }
            else if(i+1 > n*(n-1)){ // 마지막줄
                if((i+1) % n == 1){ // 첫칸
                    bombSet.add(i-n+1);
                    bombSet.add(i+1);
                }
                else if((i+1) % n == 0){ // 마지막칸
                    bombSet.add(i-n-1);
                    bombSet.add(i-1);
                }
                else{
                    bombSet.add(i-1);
                    bombSet.add(i+1);
                    bombSet.add(i-n-1);
                    bombSet.add(i-n+1);
                }
                bombSet.add(i-n);
            }
            else if((i+1) % n == 1){ // 첫줄, 마지막줄을 제외한 첫칸
                bombSet.add(i-n);
                bombSet.add(i-n+1);
                bombSet.add(i+1);
                bombSet.add(i+n);
                bombSet.add(i+n+1);
            }
            else if((i+1) % n == 0){ // 첫줄, 마지막줄을 제외한 마지막칸
                bombSet.add(i-n);
                bombSet.add(i-n-1);
                bombSet.add(i-1);
                bombSet.add(i+n);
                bombSet.add(i+n-1);
            }
            else{ // 그외
                bombSet.add(i-n-1);
                bombSet.add(i-n);
                bombSet.add(i-n+1);
                bombSet.add(i-1);
                bombSet.add(i+1);
                bombSet.add(i+n-1);
                bombSet.add(i+n);
                bombSet.add(i+n+1);
            }
        }
    }
    let answer = n*n-bombSet.size;
    if (answer < 0) answer = 0;
    return answer;
}