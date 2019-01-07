var kittens = [] //define your array here

// Add your functions and code here
kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(element){
 kittens.push(element);
}

function destructivelyPrependKitten(element){
  kittens.unshift(element);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(element){
  let newArray = kittens.slice();
  newArray.push(element);
  return newArray;
}

function prependKitten(element){
  let newArray = kittens.slice();
  newArray.unshift(element);
  return newArray;
}

function removeLastKitten(){
  let newArray = kittens.slice();
  newArray.pop();
  return newArray;
}

function removeFirstKitten(){
  let newArray = kittens.slice();
  newArray.shift();
  return newArray;
}

