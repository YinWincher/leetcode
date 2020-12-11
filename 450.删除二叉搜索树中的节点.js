/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    let dummyNode = new TreeNode(null)
    dummyNode.left = root
    let node = root;
    let nodeFa = dummyNode;
    while(node){
        if(node.val===key){
            // node = root;
            break;
        }else if(node.val<key){
            nodeFa = node;
            node = node.right;
        }else{
            nodeFa = node;
            node = node.left;
        }
    }
    if(node){
        return dummyNode.left;
    }
    
    if(nodeFa.val>node.val){
        if(node.left&&node.right){
            //双子节点
            let newNode = node.right;
            let newNodeFa = node;
            while(newNode.right){
                newNodeFa = newNode;
                newNode = newNode.right;
            }
            nodeFa.left = newNode;
            newNodeFa.right = null;

            newNode.left = node.left;
            newNode.right = node===newNode ? null : node.right ;
        }else if(node.left||node.right){
            //单子节点
            if(node.left){
                nodeFa.left = node.left
            }else{
                nodeFa.left = node.right
            }
        }else{
            //无子节点
            nodeFa.left = null;
        }
    }else if(nodeFa.val<node.val){
        if(node.left&&node.right){
            let newNode = node.left;
            let newNodeFa = node;
            while(newNode.right){
                newNodeFa = newNode;
                newNode = newNode.right;
            }
            nodeFa.right = newNode;
            newNodeFa.right = null;

            newNode.left = node===newNode ? null : node.left;
            newNode.right = node.right ;
        }else if(node.left||node.right){
            if(node.left){
                nodeFa.right = node.left
            }else{
                nodeFa.right = node.right
            }
        }else{
            nodeFa.right = null;
        }
    }
    return dummyNode.left;
};
// @lc code=end

