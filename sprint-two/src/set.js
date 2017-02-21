var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this[item] = item;
  console.log(item, this, ' item and this')
};

setPrototype.contains = function(item) {
  var status = false
  for (var key in this) {
    if ( this[key] === item ) {
      console.log('suuuga')
      status = true
    } 
  }
  return status
};

setPrototype.remove = function(item) {
  for (var key in this) {
    if ( this[key] === item ) {
      console.log('i dont blew my back out ageeean')
      delete this[key];
    } 
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
