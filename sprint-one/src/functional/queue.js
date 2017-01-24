var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values

  //how many items are currently in the que
  var currentTotal = 0;
  //how many things have been in the queue
  var total = 0;
  //whats in the front of the queue
  var head = 0;

  someInstance.enqueue = function(value) {
    //add to current total
    currentTotal++;
    //add to total
    total++;
    //this needs to be total and not current total because since the current total goes up and down,
    // and youre dealing with an object, you will overwrite properties when you just want to add
    // using total ensures youre always adding a new propety sequentially since you can only remove via head
    someInstance[total] = value;
  };

  someInstance.dequeue = function() {
    head++;
    currentTotal--;
    return someInstance[head];
  };

  someInstance.size = function() {
    if ( currentTotal < 1 ) {
      return 0;
    }
    return currentTotal;
  };

  //console.log(someInstance.dequeue(), ' dequeued')
  return someInstance;
};


// var Queue = function() {
//   var someInstance = {};
      
//   // Use an object with numeric keys to store values
//   var head = 0;
//   var total = 0;
//   var lineSize = 0;
//   //var 

//   // Implement the methods below

//   someInstance.enqueue = function(value) {
//     lineSize++;
//     total++;
//     someInstance[total] = value;
//   };

//   someInstance.dequeue = function() {
 
//     head++;
//     lineSize--;
//     return someInstance[head];

//   };

//   someInstance.size = function() {
//     if ( lineSize < 1 ) {
//       lineSize = 0;
//       return lineSize;
//     }
//     return lineSize;
//   };

//   return someInstance;
// };
