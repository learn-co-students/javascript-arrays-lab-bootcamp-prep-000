const app = "I don't do much."


function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  var newKittens = new Array();
  for (var i=0;i<kittens.length ; i++) {
    newKittens.push(kittens[i]);
  }
  newKittens.push(name);
  return newKittens
}

function prependKitten(name) {
  var newKittens = new Array();
  for (var i=0;i<kittens.length ; i++) {
    newKittens.push(kittens[i]);
  }
  newKittens.unshift(name);
  return newKittens
}

function removeLastKitten(name) {
  var newKittens = new Array();
  for (var i=0;i<kittens.length ; i++) {
    newKittens.push(kittens[i]);
  }
  newKittens.pop();
  return newKittens
}

function removeFirstKitten(name) {
  var newKittens = new Array();
  for (var i=0;i<kittens.length ; i++) {
    newKittens.push(kittens[i]);
  }
  newKittens.shift();
  return newKittens
}
