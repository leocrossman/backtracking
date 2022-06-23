/*
You are given an array of integers and a target number. Write a function that returns true if there is a subset of the array that sums up to the target and returns false otherwise.
 A subset can be any size and the elements do not have to appear consecutively in the array.

Positive, negative, and zero allowed. Some numbers may be duplicated.

subsetSum([3, 7, 4, 2], 5) -> true (3 + 2)
subsetSum([3, 34, 4, 12, 5, 12], 32) -> true (3 + 12 + 5 + 12)
subsetSum([8, 2, 4, 12], 13) -> false
subsetSum([8, -2, 1, -3], 6) -> true (8 + 1 + -3)

subsetSum([7, 2, 3], 0) -> true (a subset can be of size zero)
subsetSum([], 0) -> true
subsetSum([-4], -4) -> true
*/
const isNegative = (num) => Math.sign(num) < 0;

const subsetSum = (nums, target, firstIdx = 0) => {
  if (target === 0) return true; // base case

  // normalize input to always have a positive target
  if (isNegative(target)) {
    nums = nums.map((num) => num * -1);
    target *= -1;
  }

  if (target < 0) return false; // backtrack

  for (let i = firstIdx; i < nums.length; i++) {
    target -= nums[i];
    if (subsetSum(nums, target, firstIdx + 1)) return true;
    target += nums[i];
  }
  return false;
};

console.log(subsetSum([3, 7, 4, 2], 5)); // -> true (3 + 2)
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)); // -> true (3 + 12 + 5 + 12)
console.log(subsetSum([8, 2, 4, 12], 13)); //-> false
console.log(subsetSum([8, -2, 1, -3], 6)); //-> true (8 + 1 + -3)
console.log(subsetSum([7, 2, 3], 0)); //-> true (a subset can be of size zero)
console.log(subsetSum([], 0)); //-> true
console.log(subsetSum([-4], -4)); //-> true
console.log(subsetSum([-4, -5], -9)); // -> true
console.log(subsetSum([-5, 4, -3], -8)); // true
console.log(subsetSum([5, -4, 3], 8)); // true
