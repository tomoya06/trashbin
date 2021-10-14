
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
 var isAlienSorted = function(words, order) {
  const orderMap = {};
  order.split('').forEach((m, idx) => {
      orderMap[m] = idx;
  })

  const swords = [...words].sort((a, b) => {
      let i = 0;
      while (a[i] && b[i]) {
          if (a[i] !== b[i]) {
              return orderMap[a[i]] - orderMap[b[i]];
          }
          i += 1;
      }
      if (!a[i] && !b[i]) {
          return 0;
      }
      if (!a[i]) {
          return -1;
      }
      return 1;
  })

  for (let i=0; i<swords.length; i+=1) {
      if (swords[i] !== words[i]) {
          return false;
      }
  }

  return true;
};