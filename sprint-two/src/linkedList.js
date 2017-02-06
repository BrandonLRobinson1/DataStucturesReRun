var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  // list.next = null;

  list.addToTail = function(value) {
    var copy = this.tail;
    //if there is no list, set node as head and tail, no next no prev
    if (this.head === null && this.tail === null) {
      this.head = new Node(value);
      this.tail = new Node(value);
      return
    }
    //if the head is the same as the tail, then set a new tail, keep the same head, set heads prev to tail, the tails next to the head
    if ( JSON.stringify(this.head) && JSON.stringify(this.tail) ) {
      this.tail = new Node(value);
      this.head.prev = this.tail;
      this.tail.next = this.head;
      // console.log(this)
      return
    }

    let newNode = new Node(value);
    let oldNodeTail = this.tail;

    this.tail.prev = newNode;
    // this.tail.next = null; <------
    
    this.tail = newNode;
    this.tail.next = oldNodeTail;
    this.tail.prev = null;
   
    //this.tail.next.prev = new Node(value);

    //console.log(this)
  };

  list.removeHead = function() {
    // console.log(this.head, ' remove head this');
    var deleted = this.head.value;
    this.head = this.head.prev;
    return deleted
  };

  list.contains = function(target) {
    // let valueToCheck = this.tail.value;
    var mainObject = this.tail
    var targetStatus = false;

    var recurse = ( currentValue ) => {
      console.log( currentValue.value, ' main object at the beginning of the recursion')
      //console.log(currentValue.tail.value, target, ' currentValue and target')
      // console.log(currentValue.value === target, '*************')
      
      if ( currentValue.value === target ) {
        // targetStatus = true;
        console.log('scaaaaaaar')

        return true;
      }  


      if ( currentValue.value !== target ) {
        // console.log( currentValue.next, ' current value next' )
        currentValue = currentValue.next;
        recurse( currentValue )
      }
      // return targetStatus
    }
    recurse( mainObject );
    return targetStatus;
  };

  //end
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

// LinkedList.addToTail(Node('x'))
// LinkedList.addToTail(Node('y'))



/*
 * Complexity: What is the time complexity of the above functions?
*/