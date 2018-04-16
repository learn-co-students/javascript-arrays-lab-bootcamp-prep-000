const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens
}

function appendKitten(name){
  var newAppend = [...kittens, name]
  return newAppend;
}

function prependKitten(name) {
  var newPrepend = [name, ...kittens];
  return newPrepend;
}

function removeLastKitten(){
  var removal = kittens.slice(0, kittens.length - 1);
  return removal;
}

function removeFirstKitten() {
  var removeFirst = kittens.slice(1, kittens.length);
  return removeFirst;
}
