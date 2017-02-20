

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
  // console.log(key[node.toString()], node, key[node.toString()] === node, this.storage[node].value)
    if (this.storage[node]) {
      return true;
    } else {
      return false;
    }

  }

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  for ( var key in this.storage ) {
    // console.log(this.storage[node].value, node, ' this.storage[node], node')
    if (this.storage[node].value === node) {
      // console.log('mmyes')
      // console.log(this.storage[node], ' node before removal')
      var removeMe = this.storage[node].edge1;
      if ( removeMe !== null ) { 
        this.storage[removeMe.toString()].edge1 = null;
      }
      //this.storage[node].edge1 = null;
      //console.log(removeMe,' removeMe', this.storage[removeMe], ' this.storage[removeMe]')
      //console.log(this.storage, node, this.storage[node.toString()], ' this.storage, node, this.storage[node.toString()] delete NODE')
      delete this.storage[node.toString()];
      //console.log(this.storage[node], node,  ' node after removal')
    }
  
  }  

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  for(var key in this.storage){
    //console.log(key, this.storage, this.storage[key], fromNode.toString(), ' key, this.storage, this.storage[key], fromNode.toString()')
      if ( key === fromNode.toString() ) {
        //console.log(this.storage[key], key, this.storage.edge1,  ' figuree it oaawt this.storage, key, this.storage.edge1')
        if ( this.storage[key].edge1 === toNode ) {
          //console.log('cookie')
          //console.log(this.storage, fromNode, toNode, ' this.storage, fromNode, toNode')
          return true
        } else {
          return false
        }
      } 
    

    // if (this.storage[key] === fromNode.toString()) {
    //   if (this[key].edge1 === toNode || this[key].edge2 === toNode) {
    //     return true
    //   } else {
    //     return false
    //   }
    // }

  }

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  for(var key in this.storage){

    if (Number(key) === fromNode) {
      //console.log('trueys ', key)
      this.storage[key].edge1 = toNode;
      this.storage[toNode].edge1 = fromNode;
      //console.log(this.storage, ' this.storage')
      //console.log(this.storage, ' adding edgekey should be:', fromNode,  ' edge1 should be:' + toNode )
  }

}

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  for(var key in this.storage){

    if (Number(key) === fromNode) {
      //console.log('trueys ', key)
      this.storage[fromNode].edge1 = null;
      this.storage[toNode].edge1 = null;
      //console.log(this.storage, ' this.storage')
      console.log(this.storage[fromNode].edge1, this.storage[toNode].edge1, this.storage, ' this.storage[fromNode].edge1, this.storage[toNode].edge1, this.storage');
      console.log(this.storage, ' adding edgekey should be:', fromNode,  ' edge1 should be:' + toNode )
  }

}

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


