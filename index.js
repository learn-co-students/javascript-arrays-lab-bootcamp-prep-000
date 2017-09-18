const app = "I don't do much."

function destructivelyAppendKitten(name){
  return kittens.push(name);
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

function appendKitten(name){
  var newKittens = [];
  newKittens = newKittens.concat(kittens);
  newKittens.push(name);
  return newKittens;
}

function prependKitten(name){
  var newKittens = [];
  newKittens = newKittens.concat(kittens);
  newKittens.unshift(name);
  return newKittens;
}

function removeLastKitten(){
  var newKittens = [];
  newKittens = newKittens.concat(kittens);
  newKittens.pop();
  return newKittens;
}

function removeFirstKitten(){
  var newKittens = [];
  newKittens = newKittens.concat(kittens);
  newKittens.shift();
  return newKittens;
}
