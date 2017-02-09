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
    this.tail.value = value;
    this.tail.next = oldNodeTail;
    this.tail.prev = null;
   
    //this.tail.next.prev = new Node(value);

    //console.log(this)
  };

  list.removeHead = function() {
    // setting the head
    var head = this.head;
    // if the head is also the tail = newhead is oldhead, otherwise newhead is whatever is before it
    if (head.prev === null) {
      var newHead = head;
    } else {
      var newHead = head.prev; 
    }
    newHead.next = null;
    this.head = newHead;
    return head.value;
  };

  list.contains = function(target) {
    // debugger
    var tail = this.tail;
    var status = false;

    var recurse = ( )=>{
    
    if (tail.value === target) {
      // console.log('green', tail.value, "===", target);
      status = true
      return
    } else if (tail.next === null) {
      status = false;
      return
    } else {
      tail = tail.next;
      // console.log('yello', tail);
      recurse()
    }
      
    }
    recurse()
    return status

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