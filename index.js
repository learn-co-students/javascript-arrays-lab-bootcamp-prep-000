
function destructivelyAppendKitten (name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten (name) {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  return [...kittens, name] //spread operator that takes the kittens array and add 'name'
}

function prependKitten(name) {
  return [name, ...kittens];
}

function removeLastKitten(name) {
  var newArray = kittens.slice(0); // another method > var newArray = [...kittens]
  newArray.pop();
  return newArray;
}

function removeFirstKitten(){
  var newArray = [...kittens]
  newArray.shift();
  return newArray;
}
