function solution(numbers) {
  var map = numbers.reduce((accum, num) => {
    if (!(num in accum)) {
      accum[num] = 0;
    }
    accum[num] += 1;
    return accum;
  }, {});

  var max = 0;
  var answer;

  Object.keys(map).forEach((number) => {
    if (max < map[number]) {
      answer = parseInt(number);
      max = map[number];
    }
  });
  return max > numbers.length / 2 ? answer : -1;
}

console.log(solution([6, 1, 6, 6, 7, 6, 6, 7]) === 6);
console.log(solution([6, 1, 6, 6, 7, 5, 6, 7]) === -1);
