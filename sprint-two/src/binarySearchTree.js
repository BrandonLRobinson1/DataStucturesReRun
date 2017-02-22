var BinarySearchTree = function(value) {
  this.value = value;
  this.left = [];
  this.right = [];
};

BinarySearchTree.prototype.insert = () => {};
BinarySearchTree.prototype.contains = () => {};
BinarySearchTree.prototype.depthFirstLog = () => {};

// BinarySearchTree.insert = () => {};
// BinarySearchTree.contains = () => {};
// BinarySearchTree.depthFirstLog = () => {};

console.log(BinarySearchTree, ' tree')
var test = BinarySearchTree(5);
console.log(BinarySearchTree(5), ' tree2')
console.log(test.insert)

/*
 * Complexity: What is the time complexity of the above functions?
 */
