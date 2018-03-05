const app = "I don't do much."

function destructivelyAppendKitten(name){
  return kittens.push(name);
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}


function destructivelyRemoveLastKitten(name){
  return kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name){
  return kittens.shift(name);
}

function appendKitten(name){
  var kittens_new = [...kittens, name];
  return kittens_new;
}

function prependKitten(name){
  var kittens_new = [name, ...kittens];
  return kittens_new;
}

function removeLastKitten(){
  var kittens_new = kittens.slice(0, kittens.length-1);
  return kittens_new;
}

function removeFirstKitten(){
  var kittens_new = kittens.slice(1);
  return kittens_new;
}