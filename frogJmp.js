// FrogJmp
// Count minimal number of jumps from position X to Y.

function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    let distanceToJump = Y-X
    if(distanceToJump % D === 0){
        return Math.floor(distanceToJump/D)
    }else{
        return Math.floor(distanceToJump/D) + 1;
    }
}

console.log(solution(10,85,30))
// expected output : 3
// submitted solution link : https://app.codility.com/demo/results/trainingWUE5N7-5SA/