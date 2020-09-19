// PermMissingElem
// Find the missing element in a given permutation

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let actualSum = 0
    for(let num of A){
        actualSum += num
    }
    
    let N = A.length + 1
    let expectedSum = (N*(N+1))/2
    return expectedSum - actualSum
}


console.log(solution([2,3,1,5]))
// expected output : 4
// submited solution link : https://app.codility.com/demo/results/trainingXDEWYA-7QX/
