/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  // 从后往前
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  if (i >= 0) {
    let j = nums.length - 1; // 从后往前
    while (j >= 0 && nums[i] >= nums[j]) {
      j--;
    }
    swap(nums, i, j);
  }
  reverse(nums, i + 1);
}
function swap(nums: number[], i: number, j: number) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function reverse(nums: number[], start: number) {
  let left = start,
    right = nums.length - 1;
  while (left < right) {
    swap(nums, left, right);
    left++;
    right--;
  }
}
