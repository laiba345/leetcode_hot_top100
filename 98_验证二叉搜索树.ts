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
/* 
    二叉搜索树的定义
        节点的左子树只包含 小于 当前节点的数。
        节点的右子树只包含 大于 当前节点的数。
        所有左子树和右子树自身必须也是二叉搜索树。
    - 一看就可以通过递归来实现
 */
function isValidBST(root: TreeNode | null): boolean {
    return isValidBSTPlus(root, null, null)
};

function isValidBSTPlus(root: TreeNode | null, min: number, max: number): boolean{
    if(root == null) return true 
    if(min != null && root.val <= min) return false 
    if(max != null && root.val >= max) return false 
    return isValidBSTPlus(root.left, min, root.val) && isValidBSTPlus(root.right, root.val, max)
}