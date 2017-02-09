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
  // console.log(this.children, ' this for addchild')
};

treeMethods.contains = function(target) {

  let match = false;
  var current = this;

  var recurse = function( theTree ) {

   for ( var i = 0; i < theTree.children.length; i++) {
    //current position in recursive tree
    current = theTree.children[i];
    //current value of tree
    currentValue = theTree.children[i].value;
    //if the current value is equal to the targer
    if ( currentValue === target ){
      match = true;
      return 
    }
    // recursive call
    recurse( current )
   }
  }
  
  //initial call
  recurse( this )
  return match
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
