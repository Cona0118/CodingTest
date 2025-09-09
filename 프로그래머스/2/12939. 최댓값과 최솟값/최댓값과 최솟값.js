function solution(s) {
    let newArr = s.split(" ");
    let maxIdx = 0;
    let minIdx = 0;
    
    for(let i=1; i<newArr.length; i++){
        if(parseInt(newArr[i]) > parseInt(newArr[maxIdx])) maxIdx = i;
        else if(parseInt(newArr[i]) < parseInt(newArr[minIdx])) minIdx = i;
    }
    
    return newArr[minIdx] + " " + newArr[maxIdx];
    // return Math.min(...arr)+' '+Math.max(...arr);
}