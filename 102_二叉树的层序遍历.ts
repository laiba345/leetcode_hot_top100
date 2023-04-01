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
// 二叉树的层序遍历
function levelOrder(root: TreeNode | null): number[][] {
    const res = []
    if(!root) {
        return res 
    }
    const q = []
    q.push(root)
    while(q.length !== 0) {
        const currentLevelSize = q.length
        let current = []
        for(let i = 1; i <= currentLevelSize; i++) {
            let node = q.shift()
            current.push(node.val)
            if(node.left != null) q.push(node.left)
            if(node.right != null) q.push(node.right)
        }
        res.push(current)
    }
    return res 
};





