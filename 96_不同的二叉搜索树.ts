/* 
    基本思路
        - 假设给算法输入n = 5,也就是说 {1, 2, 3, 4, 5}
          这些数字去构造BST
        - 如果固定其中某一位，比如固定3作为根节点，左子树节点就是{1, 2}
        的组合，右子树就是{4, 5}的组合
        - 那么{1, 2} 和 {4, 5}的组合有多少种呢？
            - 只要合理定义递归函数即可
        - BST：节点值满足左小右大
        - 这题存在重叠子问题，可以通过备忘录的方式消除冗余计算
 */
function numTrees(n: number): number {
    const dp = new Array(n+1).fill(0)
    dp[0] = 1
    for(let i = 1; i <= n; i++) {
        // 每一个数都可以作为一个根节点
        for(let j = 1; j <= i; j++) {
            dp[i] += dp[j-1] * dp[i-j]
        }
    }
    return dp[n]
};