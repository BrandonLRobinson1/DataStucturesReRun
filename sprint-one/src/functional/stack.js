var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  //var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    count++;
    this[count] = value;
  };

  someInstance.pop = function() {
    var deleted = this[count];
    delete this.count;
    count--;
    console.log(deleted)
    return deleted; 
  };

  someInstance.size = function() {
    if ( count < 0 ) {
      return 0;
    }
    return count;
  };

  return someInstance;

};

