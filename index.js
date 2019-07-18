var kittens = ['Milo','Otis','Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name);
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
}
function appendKitten(name){
  let newArray=[...kittens,name];
  return newArray;
}
function prependKitten(name){
  let newArray=[name,...kittens];
  return newArray;
}
function removeLastKitten(){
  let kitt=[...kittens]
  let newArray=kitt.splice(0,kitt.length - 1)
  return newArray;
}
function removeFirstKitten(){
  let kitt=[...kittens]
  let newArray=kitt.splice(1,kitt.length - 1)
  return newArray;
}

