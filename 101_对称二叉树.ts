/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {
    if(root == null) return true 
    return check(root.left, root.right)
};

// 重新创建一个新的函数来进行判断
function check(left: TreeNode | null, right: TreeNode | null): boolean {
    if(left == null || right == null) return left == right
    // 左右两个节点需要相同
    if(left.val != right.val) {
        return false 
    }
    // 左右子节点也需要对称相同
    return check(left.left, right.right) && check(left.right, right.left)
}
