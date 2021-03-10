
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix){
      const arr = matrix.reduce((total, item, index) => {
          return (index % 2 === 0) ? total.concat(item) : total.concat(item.reverse());
          }, []);
      return arr;
  }
  return [];
}
