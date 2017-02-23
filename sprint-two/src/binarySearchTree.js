var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function( value ) {
  var that = this;

  var recurse = function( newObj ) {
      console.log(value, newObj.value, ' value, newObj.value,?????????')
      if (  value < newObj.value ) {
        console.log(value, newObj.value, value < newObj.value , ' value, newObj.value, value < newObj.value ')
        if (newObj.left === null){
        newObj.left = new BinarySearchTree(value);
        //console.log(newObj, ' HELLO! after push')  
      }
      newThat = newObj.left; 
      recurse(newThat)

      console.log( newThat, new BinarySearchTree(value) ,' HELLO! new that and BinarySearchTree ')
      } 
      else { 
        console.log(value, newObj.value, value > newObj.value , ' value, newObj.value, value > newObj.value  nick young false??')
        if (newObj.right === null){
        newObj.right = new BinarySearchTree(value);
        //console.log(newObj, ' right side')
      }
      newThat = newObj.left; 
      recurse(newThat)
      console.log( newThat, new BinarySearchTree(value) ,' HELLO! new that and BinarySearchTree ')
      }

      return that 
  }

  recurse(that)

};

BinarySearchTree.prototype.contains = ( value ) => {};

BinarySearchTree.prototype.depthFirstLog = ( cb ) => {};



var test = new BinarySearchTree(5);
// console.log(test.prototype, ' tree2')
// console.log(test.insert(7))
// console.log(test)

/*
 * Complexity: What is the time complexity of the above functions?
 */
