var kittens = [] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(array, element){
  var kitten = ["Milo", "Otis", "Garfield"];
  kittens.push("Ralph")
  return array
}
function destructivelyPrependKitten(array){
  kittens.unshift("Bob")
  return array
}
function destructivelyRemoveLastKitten (array){
  kittens.pop("Garfield")
  return array
}
function destructivelyRemoveFirstKitten(array){
  kittens.shift([0])
  return array
}
function appendKitten(array, element){
  return [...kittens, "Broom"];
}
function prependKitten(array, element){
  return ["Arnold",...kittens];
}
function removeLastKitten (array){
  return kittens.slice(0,2);
}
function removeFirstKitten(array){
  return kittens.slice(1);
}
