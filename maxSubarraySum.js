const maxSubarraySum = (arr, num) => {
  let tempMax = 0;
  let maxSum = 0;
  for (let i = 0; i < num; i++) {
    tempMax += arr[i];
  }
  maxSum = tempMax;
  for (let i = num; i < arr.length; i++) {
    tempMax = tempMax - arr[i - num] + arr[num];
    maxSum = Math.max(maxSum, tempMax);
  }
  return maxSum;
};
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
// 17
