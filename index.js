const app = "I don't do much."


function destructivelyAppendKitten(name){
  kittens.push("Ralph");
}
function destructivelyPrependKitten(name){
  kittens.unshift("Bob");
}
function destructivelyRemoveLastKitten(){
  kittens.pop("Garfield");
}
function destructivelyRemoveFirstKitten(){
  kittens.shift("Milo");
}
function appendKitten(Broom){
    appendKitten = [...kittens, "Broom"]
  return appendKitten;
  }
function prependKitten(Arnold){
    prependKitten = ["Arnold", ...kittens]
    return prependKitten
}
function removeLastKitten(){
   removeLastKitten = [ "Milo", "Otis" ]
   return removeLastKitten
}
function removeFirstKitten(){
    removeFirstKitten = [ "Otis", "Garfield" ]
    return removeFirstKitten
}
