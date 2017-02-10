const app = "I don't do much."

//modifies array by adding kitten name to end of the kitten array
function destructivelyAppendKitten (name) {
  return kittens.push(name);
}

//modifies array by adding kitten name to the beginning of the kitten array
function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

//modifies array by removing kitten name from end of kitten array
function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

//modifies array by removing kitten name from beginning of kitten array
function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

//adds kitten name to end of array and creates a new array
function appendKitten(name){
  return [...kittens, name]
}

//adds kitten name to beginning of array and creates a new array
function prependKitten(name){
  return [name, ...kittens]
}

//removes kitten name from end of array and creates a new array
function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
}

//removes kitten name from beginning of array and creates a new array
function removeFirstKitten(){
  return kittens.slice(1)
}
