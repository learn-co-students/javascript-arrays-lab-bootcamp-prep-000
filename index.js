function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function appendKitten(name){
var updated_kitten=[...kittens, name];
return updated_kitten;
}

function prependKitten(name){
  var updated_kitten=[name, ...kittens]
  return updated_kitten;
}

function removeLastKitten() {
var updated_kitten=kittens.slice(0, kittens.length-1);
return updated_kitten;
}

function removeFirstKitten() {
  var updated_kitten=kittens.slice(1);
  return updated_kitten;
}
