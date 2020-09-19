// OddOccurrencesInArray
// Find value that occurs in odd number of elements.

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let obj = {}
    for(let i = 0; i<A.length; i++){
       if(obj[A[i]]){
           obj[A[i]] +=1
       }else{
         obj[A[i]] = 1   
       } 
    }
    
    for(let key in obj){
        // console.log(obj[key])
        if(obj[key] % 2 !==0){
            return parseInt(key)
        }
    }
}

console.log(solution([9,3,9,3,9,7,9]))
// expected output : 7
// submited solution link : https://app.codility.com/demo/results/trainingCU7UM2-E5Q/