function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // 因为找的是两个数组正序的中位数
  // 先进行简单排序，然后将两个数组结合起来，然后排序
  const newArr = nums1.concat(nums2).sort((a, b) => a - b);
  // console.log(newArr)
  const len = newArr.length;
  // console.log(len)

  // 根据数组长度的奇偶性来找出中位数
  if (len % 2 == 0) {
    return (newArr[len / 2 - 1] + newArr[len / 2]) / 2;
    // console.log((newArr[len/2-1] + newArr[len/2])/2)
  } else {
    // Math.ceil()是向上取整的操作，获取的下标要减1
    return newArr[Math.ceil(len / 2) - 1];
  }
}

/* 
    知识点
        - 1、将两个数组进行合并
            nums1.concat(nums2)
        - 2、对两个数组进行排序
            nums.sort((a, b) => a - b)
        - 3、对某个小数的向上取整操作
            Math.ceil(1.5)
*/
