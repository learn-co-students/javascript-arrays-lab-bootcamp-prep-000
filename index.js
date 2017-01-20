function destructivelyAppendKitten(name){
  return kittens.push(name);
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

function appendKitten(name){
  var moreKittens = [...kittens, name];
  return moreKittens;
}

function prependKitten(name){
  var moreKittens = [name, ...kittens];
  return moreKittens;
}

function removeLastKitten(){
  var newkittens = [...kittens];
  newkittens.pop();
  return newkittens;
}

function removeFirstKitten(){
  var newkittens = [...kittens];
  newkittens.shift();
  return newkittens;
}
