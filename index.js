const app = "I don't do much."

function destructiveAppendKitten(array){
  array = array.slice();
  return array
}

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens
}

function appendKitten(element){
  var array = new Array();
  array = [...kittens,element]
  return array
}

function prependKitten(element){
  var array = new Array();
  array = [element,...kittens]
  return array
}

function removeLastKitten(){
  return kittens.slice(0,kittens.length-1);
}

function removeFirstKitten(){
  var array = new Array();
  array = kittens.slice(1);
  return array
}
