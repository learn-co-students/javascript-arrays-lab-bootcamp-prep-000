var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push(name)

}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}


function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var kittens2 = kittens.slice(0);
  kittens2.push(name);
  return kittens2;
}

function prependKitten(name) {
  var kit = kittens.slice(0);
  kit.unshift(name);
  return kit;
}

function removeLastKitten() {
  var k = kittens.slice(0)
  k.pop();
  return k;
}

function removeFirstKitten() {
  var k = kittens.slice(0);
  k.shift();
  return k;
}