//const app = "I don't do much."

function kittens(){
  var kittens = ['Milo', 'Otis', 'Garfield']
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
  return kittens.pop();
}


function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

function appendKitten(name){
  return [...kittens, name];
}

function prependKitten(name){
  return [name, ...kittens];
}

function removeLastKitten(){
   var kittens2 = kittens.slice(0,2)
   return kittens2
}

function removeFirstKitten(){
   var kittens2 = kittens.slice(1,3)
   return kittens2
}
