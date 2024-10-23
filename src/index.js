
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(arguments.length === 0 || matrix.length === 0){
    return []
  }
  return matrix.map((el, i) => i % 2 !== 0 ? el.reverse() : el).flat();
}
