const app = "I don't do much."

var kittens =["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
   kittens.push(name);
   return kittens;
}

function destructivelyPrependKitten(name){
   kittens.unshift(name);
   return kittens;
}


function destructivelyRemoveLastKitten(){
   kittens.pop();
   return kittens;
}

function destructivelyRemoveFirstKitten(){
   kittens.shift();
   return kittens;
}


function appendKitten(name){
   var newKittens = kittens.slice(0,kittens.length);
   newKittens.push(name);
   return newKittens;
}

function prependKitten(name){
  var newKittens = [name,...kittens];
  return newKittens;
}


function removeLastKitten(){
 var newKittens = kittens.slice(0,kittens.length-1);
 return newKittens;
}

function removeFirstKitten(){
  var newKittens = kittens.slice(1,kittens.length);
  return newKittens;
}
