// ##剑指offer##levele
/**
 * @param {number[]} nums
 * @return {string}
 */
 var minNumber = function(nums) {
  return nums.sort((a, b) => {
      return `${a}${b}` > `${b}${a}` ? 1 : -1
  }).join('')
};
