// 1. TapeEquilibrium
// Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|.

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let leftSum = A[0]
    let totalSum = 0
    for(let i=0; i<A.length; i++){
        totalSum = totalSum+A[i]  
    }
    let rightSum = totalSum - A[0];
    let diff = Math.abs(leftSum - rightSum)

    for(let i=1; i<A.length -1; i++){
        leftSum = leftSum+A[i]
        rightSum = rightSum - A[i]
        
        let currentDiff = Math.abs(leftSum - rightSum)
        
        if(diff > currentDiff){
            diff = currentDiff
        }
    }
    return diff   
}

console.log(solution([3,1,2,4,3]))