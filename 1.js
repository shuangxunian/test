/*
 * @Author: yuelin.wang
 * @Date: 2021-08-30 19:28:15
 * @LastEditors: yuelin.wang
 * @LastEditTime: 2021-09-24 16:39:08
 * @Description: 
 */
// const f4 = function (n) {
//   // 乘法
//   const mul = function (x,y) {
//     let ans = [[],[]]
//     ans[0][0] = x[0][0] * y[0][0] + x[0][1] * y[1][0]
//     ans[0][1] = x[0][0] * y[0][1] + x[0][1] * y[1][1]
//     ans[1][0] = x[1][0] * y[0][0] + x[1][1] * y[1][0]
//     ans[1][1] = x[1][0] * y[0][1] + x[1][1] * y[1][1]
//     return ans
//   }
//   const fpow = function (x, n) {
//     let ans = [[1, 0],[0, 1]]
//     let y = x
//     while(n) {
//       if(n % 2){
//         ans = mul(ans, y)
//         n--
//       }
//       y = mul(y, y)
//       n /= 2
//     }
//     return ans
//   }
//   if(n < 1) return 0
//   let x = [[0, 1],[0, 0]]
//   let y = [[0, 1],[1, 1]]
//   return mul(x, fpow(y,n-1))[0][1]
// }

// console.log(f4(3))
// console.log(f4(4))
// console.log(f4(5))
// console.log(f4(6))
// console.log(f4(7))
// console.log(f4(8))
// console.log(f4(9))

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
//  var levelOrder = function(root) {
//   let ans = []
//   let q = []
//   q.push(root)
//   while(q) {
//     let p = []
//     for (let i = 0; i < q.length; i++) {
//       p.push(q[i].val)
//     }
//     ans.push(p)
//   }
// };

var sortedArrayToBST = function (nums) {
  const buildTree = (Arr, left, right) => {
    if (left > right) return null
    let mid = Math.floor(left + (right - left) / 2);
    let root = new TreeNode(Arr[mid]);
    root.left = buildTree(Arr, left, mid - 1);
    root.right = buildTree(Arr, mid + 1, right);
    return root;
  }
  return buildTree(nums, 0, nums.length - 1);
};
