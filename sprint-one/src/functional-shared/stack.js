var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  // someInstance.count = 0;
  // _.extend( someInstance, stackActions );

  return someInstance
};

var stackActions = {};

stackActions.push = ( value ) => {
  // console.log( this, ' this is the this keyword' )
  // console.log( Stack.someInstance );
  //console.log(stackActions)
  // this.count++;
  //count = value 
  //console.log( stackActions )
  // console.log( this.count )
  // console.log( count )
};

stackActions.pop = (  ) => {
  // var deleted = stackActions.count;
  // delete stackActions.count;
  // count--;
  // return deleted;
};


stackActions.size = ( ) => {
  // if ( stackActions.count < 0 ) {
  //   return 0;
  // }
  // return stackActions.count;
};



// var Stack = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   var someInstance = {
//     storage: {},
//     tracker: 0
//   };
//   _.extend(someInstance, stackMethods);
//   return someInstance;
// };

// var stackMethods = {
//   push: function (value) {
//     this.storage[this.tracker] = value;
//     this.tracker++;  
//   }, 
//   pop: function () {
//     this.tracker --;
//     return this.storage[this.tracker];
//   },
//   size: function () {
//     if (this.tracker < 0) {
//       return 0; 
//     }
//     return this.tracker;
//   }
// };






