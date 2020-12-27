

function solution(A) {
  const found = new Set();
  for (const num of A) {
    if (found.has(num) || num > A.length) return 0;
    found.add(num);
  }
  return 1;
}

console.log(solution([4, 1, 3, 2]))
console.log(solution([4, 1, 3]))

// submitted link : https://app.codility.com/demo/results/trainingXFZBDD-QAQ/
// Detected time complexity: O(N) or O(N * log(N))