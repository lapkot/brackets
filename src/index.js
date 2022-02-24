function check(str, bracketsConfig) {
  let brackets = bracketsConfig
    .reduce((acc, brackets) => ({
      ...acc, [brackets[0]]: brackets[1],
    }), {});
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    const symbol = str[i];
    if (
        (symbol !== brackets[symbol] || arr[arr.length - 1] !== symbol)
        && Object.keys(brackets).includes(symbol)
      ) {
      arr.push(symbol);
    } else {
      const lastSymbol = arr.pop();
      if (brackets[lastSymbol] !== symbol) {
        return false;
      }
    }
  };
  return arr.length === 0
}

module.exports = check;
