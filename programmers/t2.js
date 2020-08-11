function solution(v) {
  const candidate = getPermutations(v);
  var answer = candidate.reduce((accum, arr) => {
    accum = Math.max(accum, sumDifference(arr));
    return accum;
  }, 0);
  return answer;
}

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
