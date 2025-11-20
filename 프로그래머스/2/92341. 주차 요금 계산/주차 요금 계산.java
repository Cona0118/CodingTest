import java.util.*;

class Solution {
    public int[] solution(int[] fees, String[] records) {
        int[] answer = {};
        ArrayList<String> time = new ArrayList<>();
        ArrayList<String> cars = new ArrayList<>();
        int[] TotalTime = new int[10000]; 
        ArrayList<Integer> feeList = new ArrayList<>();
        
        for(int i=0; i<records.length; i++){
            if(records[i].substring(11,13).equals("IN")){
                cars.add(records[i].substring(6,10));
                time.add(records[i].substring(0,5));
            }
            else{
                int num = cars.indexOf(records[i].substring(6,10));
                String str = time.get(num);
                int t1 = Integer.parseInt(str.substring(0,2)) * 60 + Integer.parseInt(str.substring(3,5));
                int t2 = Integer.parseInt(records[i].substring(0,2)) * 60 + Integer.parseInt(records[i].substring(3,5));
                
                TotalTime[Integer.parseInt(records[i].substring(6,10))] += (t2-t1);
                
                cars.remove(num);
                time.remove(num);
            }
        }
        
        for(int j = 0; j< cars.size(); j++){
            String strTime = time.get(j);
            int carNum = Integer.parseInt(cars.get(j));
            int t1 = Integer.parseInt(strTime.substring(0,2)) * 60 + Integer.parseInt(strTime.substring(3,5));
            
            TotalTime[carNum] += (23*60 + 59 - t1);
        }
        
        for(int k = 0; k < TotalTime.length; k++){
            if(TotalTime[k] != 0){
                if(TotalTime[k] > fees[0]){
                    System.out.println(TotalTime[k]);
                    int t = (int)Math.ceil(((float) TotalTime[k] - fees[0]) / fees[2]);
                    int f = fees[1] + t * fees[3];
                    feeList.add(f);
                }
                else{
                    feeList.add(fees[1]);
                }
            }
        }
        
        answer = new int[feeList.size()];
        for (int i = 0; i < feeList.size(); i++) {
            answer[i] = feeList.get(i);
        }
        return answer;
    }
}