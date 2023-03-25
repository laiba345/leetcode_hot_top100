function threeSum(nums: number[]): number[][] {
  // 先对数组进行排序
  nums.sort((a, b) => a - b);
  return nSumTarget(nums, 3, 0, 0);
}

function nSumTarget(
  nums: number[],
  n: number,
  start: number,
  target: number
): number[][] {
  /* 
        参数
        nums - 原数组
        n - 填写几数之和
        start - 从哪个索引开始计算
        target - 求解的目标多少
    */
  let sz = nums.length;
  // 返回的是符合要求的元素存入到数组当中
  let res: number[][] = [];
  if (n < 2 || sz < n) return res;
  // base: 2数之和；后面的多数之和都是根据2sum来的
  if (n == 2) {
    let lo = start,
      hi = sz - 1;
    while (lo < hi) {
      let sum = nums[lo] + nums[hi];
      let left = nums[lo],
        right = nums[hi];
      if (sum < target) {
        // 避免有两个相同的元素
        while (lo < hi && nums[lo] == left) lo++;
      } else if (sum > target) {
        while (lo < hi && nums[hi] == right) hi--;
      } else {
        // 此处的res代表的其实就是[[], []]的形式
        res.push(Array.from([left, right]));
        while (lo < hi && nums[lo] == left) lo++;
        while (lo < hi && nums[hi] == right) hi--;
      }
    }
  } else {
    // 当n > 2的时候；递归计算(n-1)sum的结果
    for (let i = start; i < sz; i++) {
      let sub = nSumTarget(nums, n - 1, i + 1, target - nums[i]);
      // console.log(sub)
      // 返回的其实也就是[[], []]的形式；然后每次将nums[i]再放入到数组当中
      for (let arr of sub) {
        arr.push(nums[i]);
        res.push(arr);
      }
      // 有重复的；每次也需要进行更新跳过；
      while (i < sz - 1 && nums[i] == nums[i + 1]) i++;
    }
  }
  return res;
}
