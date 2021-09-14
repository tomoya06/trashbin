/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var add = function(a, b) {
  let c = 0;

  while (b) {
      c = (a & b) << 1;
      a ^= b;
      b = c;
  }

  return a;
};
