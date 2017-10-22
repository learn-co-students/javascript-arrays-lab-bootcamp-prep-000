const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var arr = [];

  for (var i = 0; i < kittens.length; i++) {
    arr.push(kittens[i]);
  }
  arr.push(name);
  return arr;
}

function prependKitten(name) {
  var arr = [];

  arr.push(name);
  for (var i = 0; i < kittens.length; i++) {
    arr.push(kittens[i]);
  }

  return arr;
}

function removeLastKitten() {
  var arr = [];

  for (var i = 0; i < kittens.length - 1; i++) {
    arr.push(kittens[i]);
  }

  return arr;
}

function removeFirstKitten() {
  var arr = [];

  for (var i = 1; i < kittens.length; i++) {
    arr.push(kittens[i]);
  }

  return arr;
}
