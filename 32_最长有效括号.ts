/* 
    如果多个合法括号子串连在一起，会形成一个更长的合法括号子串，而上述算法无法适配这种情况。
    所以需要一个 dp 数组，记录 leftIndex 相邻合法括号子串的长度，才能得出题目想要的正确结果。
 */
    function longestValidParentheses(s: string): number {
        // 对于括号匹配问题，一般都是通过栈来实现
        let stk = []
        // dp[i]的定义：
        // 记录以s[i-1]结尾的最长合法括号子串长度
        // 所以dp[i]是从1开始的,因为第一个位置是左括号就是不合法的
        let dp = new Array(s.length+1).fill(0)
        // 从第一个位置进行匹配
        for(let i = 0; i < s.length; i++) {
            // 遇到左括号放入栈中
            // !!! 遇到左括号，记录索引
            if(s.charAt(i) == '(') {
                stk.push(i)
                // 左括号不可能是合法括号子串的结尾
                dp[i+1] = 0
            }else {
                // 遇到了右括号就进行匹配操作
                // !!!遇到右括号
                if(!(stk.length == 0)) {
                    // !!!配对的左括号对应索引
                    // !!![leftIndex, i]是一个合法括号子串
                    let leftIndex = stk.pop()
                    // 以这个右括号结尾的最长子串长度
                    // !!!这个合法括号子串的长度
                    let len = 1 + i - leftIndex + dp[leftIndex]
                    dp[i+1] = len
                }else {
                    // 没有配对的左括号
                    dp[i+1] = 0
                }
            }
        }
        // 计算最长子串的长度
        let res = 0
        for(let i = 0; i < dp.length; i++) {
            res = Math.max(res, dp[i])
        }
        return res 
    };