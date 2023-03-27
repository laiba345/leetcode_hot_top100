function isValid(s: string): boolean {
  // 对于括号的匹配问题；我们一般都是通过栈来进行模拟的
  let left = [];
  // 遍历
  for (let c of s) {
    if (c == "(" || c == "{" || c == "[") {
      left.push(c);
    } else {
      // 使用一个队列来模拟栈的情况
      if (!(left.length == 0) && leftOf(c) == left[left.length - 1]) {
        // 符合情况；进行匹配操作
        left.pop();
      } else {
        // 不符合情况
        return false;
      }
    }
  }
  // length长度为0时；表示全部匹配结束
  return left.length == 0 ? true : false;
}

function leftOf(c: string): string {
  if (c == "}") return "{";
  if (c == ")") return "(";
  else return "[";
}

/* 
    对于符号匹配问题；
    我们一般是通过 ～ 栈 这种数据结构来处理
*/
