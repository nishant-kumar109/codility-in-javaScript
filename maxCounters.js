// MaxCounters
// Calculate the values of counters after applying all alternating operations:
// increase counter by 1; set value of all counters to current maximum.


function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let counterArray = new Array(N).fill(0)
  let start_line = 0;
  let current_max = 0;
  for(let i of A){
      let x = i-1;
      if(i > N){
         start_line = current_max
      }
      else if(counterArray[x] < start_line){
          counterArray[x] = start_line + 1;
      }
      else{
          counterArray[x] +=1;
      }

    if (i <= N && counterArray[x] > current_max) current_max = counterArray[x];
  }
  for(let i =0; i<counterArray.length; i++){
      if(counterArray[i] < start_line){
          counterArray[i] = start_line
      }
  }
  return counterArray
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]))
// O/P = [ 3, 2, 2, 4, 2 ]

// Detected time complexity: O(N + M)
// submitted solution link : https://app.codility.com/demo/results/trainingU8BBMR-MKV/