function unroll(squareArray) {
  const arr = [];

  // as long as the array has length, goes through and pops off values
  // TOP L -> R
  // RIGHT UP -> DOWN
  // BOTTOM R -> L
  // BOTTOM DOWN -> UP
  while (squareArray.length) {
    arr.push(
      // taking entire first array and pushing to []
      ...squareArray.shift(),
      // removing the last item in the arrays through map
      ...squareArray.map((a) => a.pop()),
      // bottom array R -> L
      ...(squareArray.pop() || []).reverse(),
      // L side bottom -> top
      ...squareArray.map((a) => a.shift()).reverse()
    );
  }
  return arr;
}

const square = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

console.log(unroll(square));

module.exports = unroll;
