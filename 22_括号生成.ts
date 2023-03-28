/* 
    本题其实可以改写为
        - 现有2n个位置，每个位置可以放置字符（ 或 ）
        - 组成的所有括号组合中，有多少个是合法的
        - 这就是典型的回溯算法
    为了减少不必要的穷举，我们需要知道合法括号串有以下性质：
        - 一个合法的括号组合的左括号数量一定等于右括号数量
        - 对于一个合法的括号字符串组合p，必然对于任何 0<= i < len(p)
        都有：子串p[0..i]中左括号的数量大于或等于右括号的数量
        （从左往右肯定是左括号数量多）
    题目🔗：https://leetcode.cn/problems/generate-parentheses/
*/

function generateParenthesis(n: number): string[] {
  if (n == 0) return [];
  let res = [];
  let track = [];
  backtrack(n, n, track, res);
  return res;
}
function backtrack(
  left: number,
  right: number,
  track: string[],
  res: string[]
): string[] {
  // res用来存储最后的结果；
  if (left > right) return;
  if (left < 0 || right < 0) return;
  // 左括号数量和右括号数量全部匹配完了
  if (left == 0 && right == 0) {
    res.push(track.join(""));
    return;
  }
  track.push("(");
  backtrack(left - 1, right, track, res);
  track.pop();

  track.push(")");
  backtrack(left, right - 1, track, res);
  track.pop();
}
