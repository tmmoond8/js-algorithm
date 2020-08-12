
function solution(str)
{
  var isFinish = false;

  while(!isFinish) {
    var tmp = str.replace(/(aa|bb|cc|dd|ee|ff|gg|hh|ii|jj|kk|ll|mm|nn|oo|pp|qq|rr|ss|tt|uu|vv|ww|xx|yy|zz)/g, '');
    if (tmp === str) {
      isFinish = true;
    } else {
      str = tmp;
    }
  }

  return str.length === 0 ? 1 : 0;
}

function solution(str)
{
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const last = stack.pop();
    if (last !== undefined) {
      if (last !== str[i]) {
        stack.push(last);
        stack.push(str[i]);
      }
    } else {
      stack.push(str[i])
    }
    
  }

  return stack.length === 0 ? 1 : 0;
}

console.log(solution('baabaa') === 1);
console.log(solution('cdcd') === 0);
// console.log(solution('') === 1);
// console.log(solution('') === 1);