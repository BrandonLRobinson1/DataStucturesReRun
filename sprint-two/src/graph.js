

// Instantiate a new graph
var Graph = function() {

  this.storage = {};
  // this.count = 1;
  // this.prev = null;
  // this.next = null;
  // this.value = value;
  //this.name = name???
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = { value: node };
  // this['node'].node = node;
  this.storage[node].edge1 = null;
  this.storage[node].edge2 = null;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

  for ( var key in this ){
  //console.log(key, node, this.storage[node].value,  ' this line 26')
    if (this.storage[node].value === node) {
      return true;
    } else {
      return false;
    }

  }

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  for ( var key in this ) {
    console.log(this.storage[node].value, node)
    if (this.storage[node].value === node) {
      console.log('mmyes')
      console.log(this.storage[node].value, ' node before removal')
      console.log(this.storage, this.storage[node])
      delete this.storage[node];
      console.log(this.storage[node].value, ' node after removal')
    }
  
  }  

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  // for(var key in this){

  //   if (this[key] === fromNode) {
  //     if (this[key].edge1 === toNode || this[key].edge2 === toNode) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   }

  // }

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  // for(var key in this){
    
  //   if (this[key] === fromNode) {
  //     this[key].edge1 = toNode;
  //     console.log(this)
  // }

// }

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


