function solution(input) {
  const baseballs = input.map(([q, s, b]) => [
    q
      .toString()
      .split("")
      .map((s) => Number(s)),
    s,
    b,
  ]);
  const allCase = new Array(988)
    .fill()
    .map((_, i) => i)
    .filter((i) => i > 122)
    .filter((i) => {
      const [a, b, c] = i.toString().split("");
      return a !== b && b !== c && a !== c;
    })
    .map((num) =>
      num
        .toString()
        .split("")
        .map((s) => Number(s))
    );

  let candidate = allCase;
  baseballs.forEach((baseball) => {
    candidate = check(candidate, baseball);
  });
  return candidate.length;

  function check(candidates, input) {
    const [q, s, b] = input;
    return candidates.filter((candidate) => {
      let S = 0;
      let B = 0;
      for (let i = 0; i < candidate.length; i++) {
        if (candidate[i] === q[i]) {
          S++;
        } else if (q.includes(candidate[i])) {
          B++;
        }
      }
      return S === s && B === b;
    });
  }
}

const input = [
  [123, 1, 1],
  [356, 1, 0],
  [327, 2, 0],
  [489, 0, 1],
];
console.log(solution(input));

// const baseballs = input.map(([q, s, b]) => [
//   q
//     .toString()
//     .split("")
//     .map((s) => Number(s)),
//   s,
//   b,
// ]);

// function check(candidates, input) {
//   const [q, s, b] = input;
//   return candidates.filter((candidate) => {
//     let S = 0;
//     let B = 0;
//     for (let i = 0; i < candidate.length; i++) {
//       if (candidate[i] === q[i]) {
//         S++;
//       } else if (q.includes(candidate[i])) {
//         B++;
//       }
//     }
//     return S === s && B === b;
//   });
// }

// console.log(
//   check(
//     [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9],
//     ],
//     [[9, 8, 7], 1, 2]
//   )
// );
