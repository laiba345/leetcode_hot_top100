function twoSum(nums: number[], target: number): number[] {
  // 元素值与索引之间创建链接（Map）
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let need = target - nums[i];
    if (map.has(need)) {
      return [i, map.get(need)];
    }
    map.set(nums[i], i);
  }
  return [];
}

/* 
    知识点
    - Map的映射
        - 判断map中是否含有某一个键 map.has(key)
        - 向map数据结构中添加键值对 map.set(key, value)

    - 遍历
*/
