function longestPalindrome(s: string): string {
  // res一般用来存储最后结果
  let res = "";
  // 从任意一个字符开始进行判断
  for (let i = 0; i < s.length; i++) {
    // 从某个位置开始；奇数/偶数
    let s1 = palindRome(s, i, i);
    let s2 = palindRome(s, i, i + 1);
    // 获取s1和s2的长度，并把最长的那个存入res
    res = s1.length > res.length ? s1 : res;
    res = s2.length > res.length ? s2 : res;
  }
  return res;
}

function palindRome(s: string, l: number, r: number): string {
  /* 
        防止越界操作 + 匹配规则
        匹配规则：从某个字符开始；往两边开始扩散
        规则1：越界
        规则2：匹配规则 
    */
  while (l >= 0 && r < s.length && s.charAt(l) == s.charAt(r)) {
    // 从某个位置进行扩散操作
    l--;
    r++;
  }
  return s.slice(l + 1, r); // 因为最后一波循环不满足的结果还是会造成l--;r++
}
