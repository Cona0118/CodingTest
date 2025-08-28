function solution(today, terms, privacies) {
    var answer = [];
    const t_year = parseInt(today.substring(0,4));
    const t_month = parseInt(today.substring(5,7));
    const t_date = parseInt(today.substring(8,10));
    
    for(let i=0; i<privacies.length; i++){
        for(let j=0; j<terms.length; j++){
            if(privacies[i][11] == terms[j][0]){
                let year = parseInt(privacies[i].substring(0,4));
                let month = parseInt(privacies[i].substring(5,7));
                let date = parseInt(privacies[i].substring(8,10));
                
                date--;
                if (date <= 0){
                    month--;
                    date = 28;
                }
                month = month + parseInt(terms[j].substring(2));
                
                year += Math.floor((month - 1) / 12);
                month = (month - 1) % 12 + 1;

               
                
                if(year < t_year){
                    answer.push(i+1);
                    break;
                }
                else if(year == t_year && month < t_month){
                    answer.push(i+1);
                    break;
                }
                else if(year == t_year && month == t_month && date < t_date){
                    answer.push(i+1);
                    break;
                }
            }
        }
    }
    return answer;
}