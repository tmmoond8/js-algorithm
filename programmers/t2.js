function solution(v) {
  const candidate = getPermutations(v);
  var answer = 0;
  candidate.forEach((arr) => {
    answer = Math.max(answer, sumDifference(arr));
  });
  return answer;
}

console.log(solution([20, 8, 10, 1, 4, 15]) === 62);

function sumDifference(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    sum += Math.abs(arr[i] - arr[i + 1]);
  }
  return sum;
}

function getPermutations(arr) {
  const results = [];
  if (arr.length === 1) {
    return arr.map((value) => [value]);
  }

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, arr.length - 1);
    const attached = permutations.map((permutation) => {
      return [fixed, ...permutation];
    });
    results.push(...attached);
  });

  return results;
}

// const numbers = [4, 1, 3, 2];
// const result = getPermutations(numbers);
// console.log(result);
