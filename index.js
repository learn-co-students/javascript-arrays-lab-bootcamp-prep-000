const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
//The next 4 functions are "destructive" they actually change the array
function destructivelyAppendKitten(name) {
  kittens.push(name); //Simply adds a value to the array
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name); //Unshift adds to the beggining of an array.
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(); //Pops off the last value in the array
  return kittens;
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift();
  return kittens;
}

//The next 4 functions do not alter the array, only show what values we want them to.
function appendKitten(name) {
  return [...kittens,name]; //adding name to the end of array "..." grabs all the array
}

function prependKitten(name) {
  return [name,...kittens]; //adding name to front of array "..." grabs all of the array values
}

function removeLastKitten(name){
  return kittens.slice(0,kittens.length - 1); //starts at 1st index, then ends right before the last value
}

function removeFirstKitten(name){
return kittens.slice(1); //Removing first value by starting at 1 aka the second index
}
