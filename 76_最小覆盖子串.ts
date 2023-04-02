/* 
    华东窗口算法技巧的思路特别简单，就是维护一个窗口，不断滑动，然后更新答案
    本题算法思路：
        1 我们在字符串 S 中使用双指针中的左右指针技巧，初始化 left = right = 0，把索引左闭右开区间 [left, right) 称为一个「窗口」。
        2 我们先不断地增加 right 指针扩大窗口 [left, right)，直到窗口中的字符串符合要求（包含了 T 中的所有字符）。
        3 此时，我们停止增加 right，转而不断增加 left 指针缩小窗口 [left, right)，直到窗口中的字符串不再符合要求（不包含 T 中的所有字符了）。同时，每次增加 left，我们都要更新一轮结果。
        4 重复第 2 和第 3 步，直到 right 到达字符串 S 的尽头。
        总结：第二步相当于寻找一个可行解，第三步相当于优化这个可行解，最终找到最优解
*/
function minWindow(s: string, t: string): string {
    // 用滑动窗口的方式来进行判断计算 
    let window = new Map()
    let need = new Map()
    // 对于需求t来进行判断(先要实现的是需求) 往Map中添加数据使用set()来进行
    for(let str of t) {
        need.set(str, need.has(str) ? need.get(str)+1 : 1)
    }
    // 左右边界 left用于向右收缩，right用于向右扩张
    let left = 0, right = 0
    // 有效个数（一定要记录每次的有效个数）
    let valid = 0
    // 记录最小覆盖子串的起始索引以及长度，最大安全边界
    let start = 0, len = Infinity
    // 开始进行查找操作
    // right用于扩张，left用于收缩
    while(right < s.length) {
        // @：c是将移入窗口的字符
        let c = s[right]
        // @：扩大窗口
        right++
        // 判断 @：进行窗口内数据的一系列更新操作
        if(need.has(c)) {
            // 有的话传入到window中
            window.set(c, window.has(c) ? window.get(c)+1 : 1)
            // 满足need中的每一个值对应的数量
            if(window.get(c) == need.get(c)) valid += 1 // 算作一个满足条件
        }
        // @：判断左侧窗口是否需要收缩
        while(valid == need.size) { 
            // 记忆
            if(right - left < len) {
                start = left
                len = right - left
            }
            // @：d是将移出窗口的字符
            let d = s[left]
            // @：缩小窗口
            left += 1
            // @：进行窗口内的数据更新操作
            // @此处的if判断和上方几乎是一致的
            if(need.has(d)) {
                if(window.get(d) == need.get(d)) {
                    valid -= 1
                }
                window.set(d, window.get(d)-1)
            }
        }
    }
    return len == Infinity ? "" : s.substr(start, len)
};