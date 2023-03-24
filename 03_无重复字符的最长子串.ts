function lengthOfLongestSubstring(s: string): number {
  // 因为是找最长无重复的，所以用一个窗口就行
  let window = new Map();
  let left = 0,
    right = 0;
  let res = 0;
  // 依次进行遍历操作即可
  while (right < s.length) {
    let str = s[right];
    right++;
    window.set(str, window.has(str) ? window.get(str) + 1 : 1);
    // 每次对应的数值有重复的，抛出去即可(多余的)
    // 当window[str]的值大于1的时候，说明窗口中存在重复字符，不符合条件，就该移动left来缩小窗口
    while (window.get(str) > 1) {
      let str2 = s[left];
      left++;
      window.set(str2, window.get(str2) - 1);
    }
    // 在收缩窗口完成以后需要更新res；
    // 因为窗口收缩的while条件是存在重复元素
    // 换言之：收缩完成后一定保证窗口中没有重复元素
    res = Math.max(res, right - left);
  }
  return res;
}
