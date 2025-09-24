function solution(dartResult) {
    let num = 0;
    let sum = 0;
    let psNum = 0;
    let arr = dartResult.split("");
    
    while (arr.length != 0){
        if(arr.length > 1){
            if(arr[1] == 0) {
                num = 10;
                arr.shift();
                arr.shift();
            }
            else num = parseInt(arr.shift());
        }
        
        if(arr[0] == "D"){
            num = num * num;
            arr.shift();
        }
        else if(arr[0] == "T"){
            num = num * num * num;
            arr.shift();
        }
        else {
            arr.shift();
        }
        
        if(arr[0] == "*"){
            psNum *= 2;
            num *= 2;
            arr.shift();
        }
        else if(arr[0] == "#"){
            num *= -1;
            arr.shift();
        }
        
        sum += psNum;
        psNum = num;
    }
    sum += num;
    return sum;
}
   