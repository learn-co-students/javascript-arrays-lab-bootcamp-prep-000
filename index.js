var kittens = ['Milo', 'Otis', 'Garfield'];
// Add your functions and code here

 function destructivelyAppendKitten (name) {
  kittens.push(name);
  return kittens;
}

 function destructivelyPrependKitten  (name) {
 return  kittens.unshift(name);

}

function destructivelyRemoveLastKitten () {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten () {
  kittens.shift();
  return kittens;
}

function appendKitten (name) {
 var newArray = [...kittens, name];
  return newArray;
}

function prependKitten (name) {
 var newArray = [name, ...kittens];
  return newArray;
}

function removeLastKitten () {
var newArray = kittens.slice(0, kittens.length - 1);
return newArray;
}

function removeFirstKitten () {
var newArray = kittens.slice(1);
return newArray;
}

