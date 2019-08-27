class AST{
    constructor(){
        this.root = null
    }
    insert(data){
        this.root = this._insert(this.root,data)
        return this
    }
    _getTreeHeight(node){
        if(!node){
            return 0
        }
        let leftTreeHeight = node.left ? node.left.height : 0
        let rightTreeHeight = node.right ? node.right.height : 0
        return Math.max(leftTreeHeight,rightTreeHeight) + 1 
    }
    _getBalanceFactor(node){
        if(!node){
            return 0
        }
        return this._getTreeHeight(node.left) - this._getTreeHeight(node.right)
    } 
    _LLRotate(node){
        let newNode = node.left
        node.left = newNode.right
        newNode.right = node
        node.height = this._getTreeHeight(node)
        newNode.height = this._getTreeHeight(newNode)
        return newNode
    }
    _RRRotate(node){
        let newNode = node.right
        node.right = newNode.left
        newNode.left = node
        node.height = this._getTreeHeight(node)
        newNode.height = this._getTreeHeight(newNode)
        return newNode
    }
    _LRRotate(node){
        //麻烦节点为BR
        let L = node.left
        let LR = L.right

        L.right = LR.left
        node.left = LR.right
        LR.left = L
        LR.right = node
        
        L.height = this._getTreeHeight(L)
        node.height = this._getTreeHeight(node)
        LR.height = this._getTreeHeight(LR)        
        return LR
    }
    _RLRotate(node){
        let R = node.right
        let RL = R.left

        R.left = RL.right
        node.right = RL.left
        RL.left = node
        RL.right = R

        R.height = this._getTreeHeight(R)
        node.height = this._getTreeHeight(node)
        RL.height = this._getTreeHeight(RL)        
        return RL
    }
    _insert(node,data){
        if(!node){
            return new ASTNode(data)
        }
        if(data>node.val){
            node.right = this._insert(node.right,data)
        }else if(data<node.val){
            node.left = this._insert(node.left,data)
        }
        if(this._getBalanceFactor(node)===2&&this._getBalanceFactor(node.left)===1){
            node = this._LLRotate(node)
        }else if(this._getBalanceFactor(node)===-2&&this._getBalanceFactor(node.right)===-1){
            node = this._RRRotate(node)
        }else if(this._getBalanceFactor(node)===2&&this._getBalanceFactor(node.left)===-1){
            node = this._LRRotate(node)
        }else if(this._getBalanceFactor(node)===-2&&this._getBalanceFactor(node.right)===1){
            node = this._RLRotate(node)
        }

        node.height = this._getTreeHeight(node)
        return node
    }
}

class ASTNode{
    constructor(data){
        this.val = data
        this.left = null
        this.right = null
        this.height = 1
    }
}

const astTree = new AST()
astTree.insert(88).insert(70).insert(61).insert(96).insert(120)
// astTree.insert(2)
// astTree.insert(4)