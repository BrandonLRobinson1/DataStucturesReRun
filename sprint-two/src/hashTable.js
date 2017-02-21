var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  let index = getIndexBelowMaxForKey(k, this._limit);
  
  //checking to see if there is a tuplet at the location
  if ( !this._storage.get(index) ){
    //if no tuplet, make one
    this._storage.set( index, [[k,v]] )
  }

  // all the tuplets for a given location
  let bucket = this._storage.get( index );
  //console.log(bucket, ' bucket')

  //checking all tuplets which should be a an array of arrays
  bucket.forEach( (tuple, i, theBucket) => {
    // if there is tuple present at that location, over write it per the tdd
    if ( tuple[0] === k ) {
      theBucket[i] = [k,v];
    }
    //push it into main bucket
    bucket.push( [k,v] );
  } );

};






HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //create results 
  var result;
  //bucket is the all tuplets at a given index
  var bucket = this._storage.get( index );

  //loop through buckets which is an array of arrays
  bucket.forEach( (item, index, collection) => {
    //console.log(item, k, ' item and key')
    //tuplet matches key, return the value
    if ( item[0] === k ) {
      result = item[1];
    }
  } );
  return result
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var bucket = this._storage.get( index );
  
  bucket.forEach( (item, index, collection)=>{
    console.log(item, index, k, collection[index], collection, ' item index k')
    if ( item[0] === k ){
      bucket.splice(index); //go over slice vs splice
    }
  } )

};





// var timmy = new HashTable()
// timmy.insert('Steven', 'Seagul');
// console.log(timmy.retrieve('Steven'))

/*
 * Complexity: What is the time complexity of the above functions?
 */