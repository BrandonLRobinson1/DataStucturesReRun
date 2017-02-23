var BinarySearchTree = function(value) {
  this.value = value;
  this.left = [];
  this.right = [];
};

BinarySearchTree.prototype.insert = function( value ) {
  var that = this;

  var recurse = function( newObj ) {
    var count = 0;
    console.log(newObj, newObj.value, count, ' beggining newObj, newObj.value, count')
    count++
    for ( var key in newObj ) {
      console.log(newObj, newObj.value, key, newObj[key], value, ' newObj, newObj.value, key, newObj[key] Testerrrrrrrrrr value')
      if (  value < newObj.value ) {
        console.log(value, newObj.value, value < newObj.value, newObj.left.length , ' value, newObj.value, value < newObj.value length')
        if (newObj.left.length === 0){
        newObj.left.push( new BinarySearchTree(value) );
        //console.log(newObj, ' HELLO! after push')  
        //return
      }
      newThat = newObj.left[0];  // BINGOOOOOOOOOOOOOOO
      console.log( that, new BinarySearchTree(value) ,' HELLO! new that and BinarySearchTree ')
      } 
      else { 
        console.log(value, newObj.value, value > newObj.value, newObj.left.length , ' value, newObj.value, value < newObj.value length nick young false??')
        if (newObj.right.length === 0){
        newObj.right.push( new BinarySearchTree(value) );
        //console.log(newObj, ' right side')
        //return
      }
      newThat = newObj.right[0]; // BINGOOOOOOOOOOOOOOO
      console.log( that, new BinarySearchTree(value) ,' HELLO! new that and BinarySearchTree ')
      }

      //console.log(that, 'recursed that')
      recurse(newThat)
    }

  }

  recurse(that)
    // console.log(that.value, ' value')
    // console.log(that.left, ' left')
    // console.log(that.right, ' right')
  //may reset that to be the entire object player  
  //return that;

    // for ( var i = 0; i < that.children.length; i++ ) {
    //   var current = that.children[i]
    //   console.log(current) // two empty arrays
    // }
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
