var kittens = [] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name);
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
}
function appendKitten(name){
  return kittens.concat(name);
}
function prependKitten(name){
  /*dad's Example 
    var foo = [name];
    foo.concat(kittens);
  */
  return [name, ...kittens];
}
function removeLastKitten(){
  return kittens.slice(0,kittens.length-1);
}
function removeFirstKitten(){
  return kittens.slice(1);
}