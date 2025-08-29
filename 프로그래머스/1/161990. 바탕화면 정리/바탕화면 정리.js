function solution(wallpaper) {
    let up = 51;
    let left = 51;
    let right = 0;
    let down = 0;
    
    for(let i=0; i<wallpaper.length; i++){
        let num = wallpaper[i].indexOf("#");
        if(num !== -1){
            if(i < up){
                up = i;
            }
            if(num < left){
                left = num;
            }
        } 
        
        let num2 = wallpaper[i].lastIndexOf("#");
        if(num2 !== -1){
            if(i+1 > down){
                down = i+1;
            }
            if(num2+1 > right){
                right = num2+1;
            }
        }
    }
    
    
    
    
    return [up,left,down,right];
}