var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.item = item;
};

setPrototype.contains = function(item) {
  var status = false
  for (var key in this) {
    console.log( this.item, item)
    if ( this['item'] === item ) {
      console.log('suuuga')
      status = true
      return status;
    } else {
      status = false
    }
  }
  console.log(status, this.item, item, this.item === item, ' status, this.item, item, this.item === item')
  return status
};

setPrototype.remove = function(item) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
