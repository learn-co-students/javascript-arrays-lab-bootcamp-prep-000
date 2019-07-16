var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){  //appends kitten to the end of array
  kittens.push(name)
}

function destructivelyPrependKitten(name){  //prepends a kitten to the beginningof the kittens array:
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){  //removes the last kitten from the kittens array:
  return kittens.pop()
}
function destructivelyRemoveFirstKitten(){ //removes the First kitten from the kittens array:
  return kittens.shift()
}
 function appendKitten(name) {  //appends a kitten to the kittens array and returns a new array, leaving the kittens array 
  let newArr =  kittens.concat(name)
  return newArr
 }

function prependKitten(name){    //prepends a kitten to the kittens array and returns a new array, leaving the kittens array kitte
  var newArray = [name,...kittens];
  return newArray;
  
}

function removeLastKitten(){ //removes the last kitten in the kittens; array unchanged
   var newArray = kittens.slice(0, 2);
   return newArray
   
  
}

function removeFirstKitten(){  //removes the first kitten from the kittens; array unchanged
  var newArray = kittens.slice(1, 3);
   return newArray;
}


