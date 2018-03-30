// 
// Binary Search Tree
// 
module.exports = function(){
    let root = null;

    function createNode(key){
        this.key = key;
        this.left = null;
        this.right = null;   
    }
  
    this.insert = (key) => {
        let newNode = new createNode(key);
      
        if (root === null){ 
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    }
    
    function insertNode(parent, newNode){    
        if(newNode.key > parent.key) {
            if(!parent.right) {
                parent.right = newNode;
            } else {
                insertNode(parent.right, newNode);
            }
        } else if(newNode.key < parent.key) {
            if(!parent.left) {
                parent.left = newNode;
            } else {
                insertNode(parent.left, newNode);
            }
        }     
    }
  
    this.inOrderTraverse = function(callback){   
        inOrderTraverseNode(root, callback);
    };

    let inOrderTraverseNode = function (node, callback) { 
        if (node !== null) {
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    };

    this.contains = function(value, callback){
        containsNode(value).then((res)=>{
            callback(res)
        })
    }

    let containsNode = function(value, node) {
        return new Promise((resolve) => {    
            function check(value, node) {
                if(!node) node = root;
        
                if(value == node.key) {
                    resolve(true)
                }

                if(value < node.key) {
                    if(!node.left) {
                        resolve(false)
                    }
                    check(value, node.left)
                } else {
                    if(!node.right) {
                        resolve(false)
                    }
                    check(value, node.right)
                }
            }
            check(value, node)
        })
    }
}

  
