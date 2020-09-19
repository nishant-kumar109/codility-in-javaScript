// CyclicRotation
// Rotate an array to the right by a given number of steps.

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
     let result = [] 
     for(let i =0; i<A.length; i++){ 
         result[(i+K)%A.length] = A[i] 
         
     } 
     return result 
}

console.log(solution([3, 8, 9, 7, 6], 3))
// expected output : [ 9, 7, 6, 3, 8 ]
console.log(solution([1, 2, 3, 4],4))
// expected output : [1, 2, 3, 4]
console.log(solution([0, 0, 0],1))
// expected output : [0, 0, 0]

// submitted solution link : https://app.codility.com/demo/results/trainingPJ5HBY-5WS/


// ================================== alternate solution ================================

function solution1(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    K = A.length - (K%A.length) 
    return [...A.slice(K),...A.slice(0,K)] 
}

console.log(solution1([3, 8, 9, 7, 6], 3))
// expected output : [ 9, 7, 6, 3, 8 ]
console.log(solution1([1, 2, 3, 4],4))
// expected output : [1, 2, 3, 4]
console.log(solution1([0, 0, 0],1))
// expected output : [0, 0, 0]
// submitted solution link : https://app.codility.com/demo/results/trainingXK5H4C-M28/

