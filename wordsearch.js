//const wordSearch = (letters, word) => { 
    //const horizontalJoin = letters.map(ls => ls.join(''))
    //for (l of horizontalJoin) {
        //if (l.includes(word)) return true
    //}
//}

//module.exports = wordSearch

const transpose = matrix => matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));

  let found = false;

  for (let i = 0; i < horizontalJoin.length; i++) {
    if (horizontalJoin[i] && horizontalJoin[i].includes(word)) {
      found = true;
      break;
    }
    if (verticalJoin[i] && verticalJoin[i].includes(word)) {
      found = true;
      break;
    }
  }

  return found;
};

module.exports = wordSearch;

