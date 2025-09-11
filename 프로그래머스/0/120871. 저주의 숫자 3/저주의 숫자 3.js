function solution(n) {
    let num = 1;
    let arr = [];
    while(true){
        let nString = num.toString();
        if(num%3 != 0 && nString.indexOf('3') == -1){
            arr.push(num);
            console.log(num);
        }
        if(arr.length == n) {
            break;
        }
         num++;
    }
    return num;
}