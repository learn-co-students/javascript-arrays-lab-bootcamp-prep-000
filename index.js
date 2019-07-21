//Step One: Define kittens as an array
var kittens = ["Milo", "Otis", "Garfield"];

//Step Two:Arrays destructivelyAppendKitten(name) appends a kitten to the end of the kittens array:
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens
}

//Step Three: Arrays destructivelyPrependKitten(name) prepends a kitten to the beginningof the kittens array
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens
}

//Step Four: Arrays destructivelyRemoveLastKitten() removes the last kitten from the kittens array:
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens
}

//Step Five: Arrays destructivelyRemoveFirstKitten() removes the First kitten from the kittens array:
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens
}

//Step Six: Arrays appendKitten(name) appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged:
function appendKitten(name){
return [...kittens, name];
  
}

//Step Seven:Arrays prependKitten(name) prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged:
function prependKitten(name){
 return [name, ...kittens];
}

//Step Eight: Arrays removeLastKitten() removes the last kitten in the kittens array andreturns a new array, leaving the kittens array unchanged:
function removeLastKitten(){
  return kittens.slice(0, kittens.length -1);
}

//Step Nine: Arrays removeFirstKitten() removes the first kitten from the kittens arrayand returns a new array, leaving the kittens array unchanged:
function removeFirstKitten(){
  return kittens.slice(1);
  
}