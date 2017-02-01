var Stack = () => {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  stackProperties.count = 0;

  return stackProperties;
};

var stackMethods = {};

stackMethods.push = ( value ) => {
  this[this.count] = value;
  this.count++;
  console.log( this.count );
  // console.log( stackMethods );
}
  var stackProperties = Object.create( stackMethods );

// var tony = Stack()
// console.log( tony.push );
// console.log( Stack ); 
