function maxArea(height: number[]): number {
  // 对于要盛多少水；
  // 可以利用面积进行计算；后续进行不断的更新操作
  // 左右位置不断移动来更新最后的面积值
  let left = 0,
    right = height.length - 1;
  let res = 0;
  while (left < right) {
    // 本身就是通过面积的大小来计算能够盛装的水有多少
    // 要获取最多的水；但是高度选小的；因为高度选高的；水会溢出；
    let cur_area = Math.min(height[left], height[right]) * (right - left);
    res = Math.max(res, cur_area);
    // 不管大小；left和right一直进行相应的更新操作即可
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return res;
}
