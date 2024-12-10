// https://leetcode.com/problems/maximum-depth-of-binary-tree/
// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

/**
 * @param {TreeNode} root
 * @return {number}
 */
let rootArray = [3, 9, 20, null, null, 15, 7];
let root = buildTree(rootArray);

var maxDepth = function(root) {
  if (!root) return 0;

  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
};

console.log(maxDepth(root));