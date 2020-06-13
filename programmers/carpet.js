/**
 * https://programmers.co.kr/learn/courses/30/lessons/42842?language=javascript
 */
function solution(brown, yellow) {
  for (let h = 1; h < 2500; h++) {
    for (let w = h; w < 2500; w++) {
      if (brown - 4 === w * 2 + h * 2) {
        if (w * h === yellow) {
          return [w + 2, h + 2];
        }
      }
    }
  }
}

console.log(solution(10, 2).join(",") === "4,3");
console.log(solution(8, 1).join(",") === "3,3");
console.log(solution(24, 24).join(",") === "8,6");
