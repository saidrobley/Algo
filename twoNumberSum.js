function twoNumberSum(array, targetSum) {
  let nums = {};

  for (let i = 0; i < array.length; i++) {
    if (targetSum - array[i] in nums) {
      return [array[i], targetSum - array[i]];
    } else {
      nums[array[i]] = true;
    }
  }
  return [];
}
