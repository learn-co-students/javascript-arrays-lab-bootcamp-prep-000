//define your array here
var kittens = ["Milo","Otis","Garfield"] ;

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
    kittens.unshift(name);
    return kittens;
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
}

function appendKitten(name){
  var cats = kittens.concat(name);
  return cats;
}

function prependKitten(name){
  var cats2 = [name,...kittens]
  return cats2
}

/* function removeLastKitten(kittens){
  var cats3 = kittens.slice(0, kittens.length-1)
  return cats3
} */

function removeLastKitten(){
    return kittens.slice(0,kittens.length-1)}
    
//remove removeFirstKitten() removes the first kitten from the kittens array and returns a new array, leaving the kittens arrray unchanged

function removeFirstKitten(){
    return kittens.slice(1)}
    

