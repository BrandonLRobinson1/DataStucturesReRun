var Tree = function(value) {
  
  var newTree = {
  };
  newTree.value = value;
  newTree.children = [];  // fix me

  //extend(destination, source) - extend takes a destination(newTree in this case) and adds methods and properties from the source to it
  _.extend(newTree, treeMethods)

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push( new Tree(value) );
  console.log(this.children, ' this for addchild')
};

treeMethods.contains = function(target) {
  console.log
};

// console.log(Tree);


/*
 * Complexity: What is the time complexity of the above functions?
 */
