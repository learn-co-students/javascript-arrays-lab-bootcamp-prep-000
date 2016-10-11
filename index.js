const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name); //adds to end
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name); //adds to beginning
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
}

function appendKitten(name) {
 var newArray = [...kittens, name];
 return newArray
}

function prependKitten(name) {
  var newerArray = [name, ...kittens];
  return newerArray
}

function removeLastKitten() {
  var arrayFour = kittens.slice(0, kittens.length - 1)
  return arrayFour
}

function removeFirstKitten() {
  var arrayThree = kittens.slice(1);
  return arrayThree
}
