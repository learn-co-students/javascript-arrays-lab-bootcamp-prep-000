const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
//learn  test = to test the code
//learn submit = to submit code

function destructivelyAppendKitten(name){
  //appends a kitten to the end of the kittens array
  return kittens.push(name);
}
function destructivelyPrependKitten(name){
  //prepends a kitten to the beginning of the kittens array
  return kittens.unshift(name);
}
function destructivelyRemoveLastKitten(){
  //removes the last kitten from the kittens array
  return kittens.pop();
}
function destructivelyRemoveFirstKitten(){
  //removes the First kitten from the kittens array
  return kittens.shift();
}
function appendKitten(name){
  //appends add to end, a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
  //const newAddArray = kittens.push(name); //[name, ...kittens];
  //return newAddArray;
  //return [name, ...kittens];
  return [...kittens, name];
}
function prependKitten(name){
  //prepends adds to beginning, a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
  //const newAddArray = kittens.unshift(name);
  //return newAddArray;
  //return kittens.unshift(name);
  return [name, ...kittens];
}
function removeLastKitten(){
  //removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged
  //const newAddArray = kittens.pop();
  //return newAddArray;
  //return kittens.pop();
  //const newAddArray = kittens.slice(3);
  //return newAddArray;
	return kittens.slice(0, kittens.length - 1)
  //return kittens.slice(3);
}
function removeFirstKitten(){
  //removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged
  //const newAddArray = kittens.shift();
  //return newAddArray;
  //return kittens.shift();
  const newAddArray = kittens.slice(1);
  return newAddArray;
}
