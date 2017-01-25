var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackProperties = Object.create( stackMethods );
  stackProperties.count = 0;

  return stackProperties;
};

var stackMethods = {};

stackMethods.push = ( ) => {
  // console.log( 'yo' );
  //this.count++;
  console.log( this );
}


// i will thxxx .. i need those lips tho give me a kiss