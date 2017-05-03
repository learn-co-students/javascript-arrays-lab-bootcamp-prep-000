const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
   kittens.push(name);
   return(kittens);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return(kittens);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return(kittens);
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return(kittens);
}

function appendKitten(name){
  var appendkittenarray = [...kittens, name];
  return(appendkittenarray);
}
function prependKitten(name){
  var prependkittenarray = [name, ...kittens];
  return(prependkittenarray);
}

function removeLastKitten(){
var removeLastKittenarray = kittens.slice(0, kittens.length -1)
return (removeLastKittenarray);
}

function removeFirstKitten(){
var removeFirstKittenarray = kittens.slice(1)
return (removeFirstKittenarray);
}
