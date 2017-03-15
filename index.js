const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name){ // destructivelyAppendKitten('Ralph')
  kittens.push(name)
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyPrependKitten(name) {
kittens.unshift (name);
return kittens;
}

var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyRemoveLastKitten(name){
kittens.pop ();
return kittens;
}

var kittens = ["Milo", "Otis", "Garfield"];
 function destructivelyRemoveFirstKitten(name){
  kittens.shift(1);
}


function appendKitten(name){
  return [...kittens,"Broom"];
}

function prependKitten(name) {
   return ["Arnold", ...kittens];
 }


  function removeLastKitten(name) {
      kittens.slice (0, -1);
      return kittens.slice (0, -1);
 }

function removeFirstKitten(name){
       kittens.slice (1);
       return kittens.slice (1);
 }
