const app = "I don't do much."
let kittens = ['Milo', 'Otis', 'Garfield'];

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
  let array = kittens.slice(0);
  array.push(name);
  return array
}
function preppendKitten(name){
  let array = kittens.slice(0);
  array.unshift(name);
  return array
}
function removeLastKitten(){
  let array = kittens.slice(0);
  array.pop();
  return array
}
function removeFirstKitten(){
  let array = kittens.slice(0);
  array.shift();
  return array
}
