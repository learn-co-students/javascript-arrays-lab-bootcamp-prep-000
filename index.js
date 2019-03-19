var kittens = ["Milo", "Otis", "Garfield"];

// Add your functions and code here
function destructivelyAppendKitten("Garfield") = (array, kittens) {
  array.push("Garfield");
  return array;
}

function destructivelyPrependKitten("Milo") = (array, kittens) {
  array.unshift("Milo");
  return array;
}

function destructivelyRemoveLastKitten("Otis") = (array, kittens) {
  array.shift("Otis");
  return array;
}

function  destructivelyRemoveFirstKitten("Milo") = (array, kittens) {
  array.shift("Milo");
  return array;
}

function appendKitten("Garfield") = (array, kittens) {
 return [kittens, ...array]
}

function prependKitten("Milo") = (array, kittens) {
 return array.index["Milo", "Otis", "Garfield"]
}

function removeLastKitten("Garfield") = (array, "Garfield") {
  return array.slice("Garfield") 
}

function removeFirstKitten("Otis") = (array, kittens) {
   return array.slice("Otis")
}