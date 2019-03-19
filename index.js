var kittens = ["Milo", "Otis", "Garfield"];

// Add your functions and code here
function destructivelyAppendKitten(name) {
  array.push("Garfield");
  return array;
}

function destructivelyPrependKitten(name) {
  array.unshift("Milo");
  return array;
}

function destructivelyRemoveLastKitten(name) {
  array.shift("Otis");
  return array;
}

function destructivelyRemoveFirstKitten(name) {
  array.shift("Milo");
  return array;
}

function appendKitten(name) {
 return [kittens, ...array]
}

function prependKitten(name) {
 return array.index["Milo", "Otis", "Garfield"]
}

function removeLastKitten(name) {
  return array.slice("Garfield") 
}

function removeFirstKitten(name) {
   return array.slice("Otis")
}