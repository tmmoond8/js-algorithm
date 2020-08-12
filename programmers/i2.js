function solution(arrA, arrB) {
  var answer = arrA.length === arrB.length;
  var bStartIndex = arrB.findIndex(n => n === arrA[0]);
  if (bStartIndex === -1) {
    answer = false;
  } else {
    for (let i = 0; i < arrA.length; i++) {
      if (arrA[i] !== arrB[(bStartIndex + i) % arrA.length]) {
        answer = false;
        break;
      }
    }
  }
  
  return answer;
}



console.log(solution([144, 8, 10], [10, 7, 8]) === true)
console.log(solution([4, 3, 2, 1]	, [5, 4, 1, 2]) === false)