const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name) {
  return kittens.push("Ralph");
  kittens.pop("ralph");
}

function destructivelyPrependKitten(name){
  return kittens.unshift("Bob");
  kittens.shift("Bob");
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
   return [...kittens,"Broom"];

}
function prependKitten(name){
  return ["Arnold",...kittens];
}
function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1);
}
function removeFirstKitten(){
  return kittens.slice(1);
}
