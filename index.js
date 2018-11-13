var kittens = ["Milo", "Otis", "Garfield"] ;

// Add your functions and code here

function destructivelyAppendKitten (element) {
  var appendKitty = kittens.push(element)
return appendKitty;
}

function destructivelyPrependKitten(element) {
  var prependKitty = kittens.unshift(element);
  return prependKitty;
}

function destructivelyRemoveLastKitten() {
var popKitten = kittens.pop();
return popKitten;
}

function destructivelyRemoveFirstKitten() {
  var pushKitten = kittens.shift();
  return pushKitten;
}

function appendKitten(element) {
  var appKittySpread = [...kittens, element];
  return appKittySpread;
}

function prependKitten(element) {
  var preKittySpread = [element, ...kittens];
  return preKittySpread;
}

function removeLastKitten() {
  var NondestRemoveLastKitty = kittens.slice(0, -1);
  return NondestRemoveLastKitty;
}

function removeFirstKitten() {
  var NondestRemoveFirstKitty = kittens.slice(1);
  return NondestRemoveFirstKitty;
}