var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];

function solution(day, k) {
  var counter = day + k;
  var answer = [checkWeekend(counter)];
  days.forEach((day) => {
    counter += day;
    answer.push(checkWeekend(counter));
  });

  return answer;
}
function checkWeekend(day) {
  if (day % 7 === 6 || day % 7 === 0) {
    return 1;
  }
  return 0;
}

// console.log(checkWeekend(31)); // 1
// console.log(checkWeekend(62)); // 0
// console.log(checkWeekend(90)); // 0
// console.log(checkWeekend(121)); // 1
// console.log(checkWeekend(151)); // 0
// console.log(checkWeekend(182)); // 0
// console.log(checkWeekend(212)); // 1
// console.log(checkWeekend(243)); // 0

// console.log(checkWeekend(7)); // 1
// console.log(checkWeekend(38)); // 0
// console.log(checkWeekend(66)); // 0
// console.log(checkWeekend(97)); // 1
// console.log(checkWeekend(127)); // 0
// console.log(checkWeekend(158)); // 0
// console.log(checkWeekend(188)); // 1
// console.log(checkWeekend(219)); // 0
// console.log(checkWeekend(219)); // 0
// console.log(checkWeekend(249)); // 1

// console.log(checkWeekend(2)); // 0
// console.log(checkWeekend(5)); // 0
// console.log(checkWeekend(6)); // 1
// console.log(checkWeekend(7)); // 1
// console.log(checkWeekend(8)); // 0
// console.log(checkWeekend(9)); // 0
// console.log(checkWeekend(11)); // 0
// console.log(checkWeekend(31)); // 0
// console.log(checkWeekend(38)); // 0

console.log(JSON.stringify(solution(6, 1)) === "[1,0,0,1,0,0,1,0,0,1,0,0]");
console.log(JSON.stringify(solution(6, 25)) === "[0,1,1,0,0,1,0,0,0,0,1,0]");
// console.log(JSON.stringify(solution(6, 1)));
