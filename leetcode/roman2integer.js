// https://leetcode.com/problems/roman-to-integer/

var romanToInt = function(s) {
  const SymbolsMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  const chunks = [];
  let last;
  s.split('').reverse().forEach(c => {
    // 뒤에서 부터 하나 꺼낸다.
    // 라스트가 없다면 +로 넣는다.
    // 라스트가 존재하고 현재 값보다 더 작다면 - 로 추가한다.
    // 라스트가 존재하고 현재값보다 크다면 +로 추가한다.

    if (!last) {
      last = SymbolsMap[c];
      chunks.push(SymbolsMap[c]);
    } else {
      if (last <= SymbolsMap[c]) {
        last = SymbolsMap[c];
        chunks.push(SymbolsMap[c]);
      } else {
        chunks.push(SymbolsMap[c] * -1);
      }
    }
  });
  return chunks.reduce((accum, chunk) => (accum += chunk, accum), 0);
};

console.log(3 === romanToInt("III"));
console.log(4 === romanToInt("IV"));
console.log(9 === romanToInt("IX"));
console.log(58 === romanToInt("LVIII"));
console.log(1994 === romanToInt("MCMXCIV"));
