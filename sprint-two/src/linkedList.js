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
      console.log(this)
      return
    }

    this.tail = new Node(value);
    this.tail.prev = null;
    this.next = hmm;
   
    //this.tail.next.prev = new Node(value);

    console.log(this)
  };

  list.removeHead = function() {
    // console.log(this.head, ' remove head this');
    var deleted = this.head.value;
    this.head = this.head.prev;
    return deleted
  };

  list.contains = function(target) {
  };

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