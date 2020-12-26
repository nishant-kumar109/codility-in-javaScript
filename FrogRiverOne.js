// FrogRiverOne
// Find the earliest time when a frog can jump to the other side of a river.

function solution(X, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let leaves = {};
  let steps = X
let readyToJump = [...Array(X+1).keys()].reduce((a,b)=>a+b )
  for(let i=0; i<X; i++){
      leaves[steps] = false;
      steps--
  }
  for(let i=0; i<A.length; i++){
      if(leaves[A[i]] === false){
          leaves[A[i]] = true; 
          readyToJump -= A[i];
      }

      if(readyToJump == 0){
          return i;
      }
  }
  return -1;
}

console.log(solution(5, (1, 3, 1, 4, 2, 3, 5, 4)))
// https://app.codility.com/demo/results/trainingPBJZN2-GX8/