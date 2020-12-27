function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let N = A.length+1
  let isThere = new Array(N).fill(false);
  for(let a of A){
      if(a >= 1 && a<=N){
          isThere[a-1] = true;
      }
  }

  for(let i=0; i<N; i++){
      if(isThere[i] == false){
          return i+1;
      }
  }
  return -1;
}

console.log(solution([1, 3, 6, 4, 1, 2]))

// https://app.codility.com/demo/results/trainingJVJJ7J-WFH/
// run time Order O(N)