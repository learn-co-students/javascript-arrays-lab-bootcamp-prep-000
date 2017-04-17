const app = "I don't do much."
const kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
  var myKittens = kittens.push(name);
  return myKittens;
}

function destructivelyPrependKitten(name){
  var myKittens = kittens.unshift(name);
  return myKittens;
}

function destructivelyRemoveLastKitten(){
  var myKittens = kittens.pop();
  return myKittens;
}

function destructivelyRemoveFirstKitten(){
  var myKittens = kittens.shift();
  return myKittens;
}

 function appendKitten(name){
   var myKittens = [...kittens, name];
   return myKittens;
 }

 function prependKitten(name){
   var myKittens = [name, ...kittens];
   return myKittens;
 }

 function removeLastKitten(){
   var myKittens = kittens.slice(0, kittens.length-1);
   return myKittens;
 }

 function removeFirstKitten(){
   var myKittens = kittens.slice(1, kittens.length);
   return myKittens;
 }
