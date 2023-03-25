function letterCombinations(digits: string): string[] {
  if (digits.length == 0) return [];
  const map = {
    //建立电话号码和字母的映射关系
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let queue = [];
  // 里面的每个内容都是["ad","ae","af","bd","be","bf","cd","ce","cf"]
  queue.push(""); // queue.length == 0
  // digits = ""的话;其长度为0
  for (let i = 0; i < digits.length; i++) {
    // 一个控制里层；一个控制外层；
    let levelSize = queue.length;
    // console.log(levelSize)
    for (let j = 0; j < levelSize; j++) {
      // 获取当前层的字符串
      let curStr = queue.shift();
      // console.log("curStr:", curStr) 第一个肯定为""
      let letters = map[digits[i]];
      for (let l of letters) {
        queue.push(curStr + l);
      }
    }
  }
  return queue;
}
