const app = "I don't do much."


function destructivelyAppendKitten(name) {
   kittens.push(name);
   return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return kittens;
}

function appendKitten(name) {
  var k = [...kittens, 'Broom'];
  return k;
}

function prependKitten(name) {
  var k = [ 'Arnold',...kittens];
  return k;
}

function removeLastKitten() {
  return kittens.slice(0, 2)
}
  
  
function removeFirstKitten() {
  return kittens.slice(1)
}
  
  
  
  
