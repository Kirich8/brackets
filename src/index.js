module.exports = function check(str, bracketsConfig) {
  const openBrackets = [];
  const bracketsPair = {};
  const bracketsTwins = [];
  let stack = [];

  bracketsConfig.forEach(element => {
    openBrackets.push(element[0]);
    bracketsPair[element[1]] = element[0];
    if (element[0] === element[1]) {
      bracketsTwins.push(element[0]);
    }
  });

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    let topElement = stack[stack.length - 1];

    if (openBrackets.includes(currentSymbol)) {
      stack.push(currentSymbol);
      if (currentSymbol === topElement && bracketsTwins.includes(currentSymbol)) {
        stack.pop();
        stack.pop();
      }
    } else {
      if (stack.length === 0) {
        return false;
      };

      if (bracketsPair[currentSymbol] === topElement) {
        stack.pop();
      } else {
        return false;
      };
    };
  };
  return stack.length === 0;
}
