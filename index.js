function destructivelyAppendKitten(name){
kittens.push(name);
return kittens;
}


function destructivelyPrependKitten(name){
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

function appendKitten(name){
var newArr = [...kittens, name];
return newArr;
}

function prependKitten(name){
return[name, ...kittens];
}

function removeLastKitten(){
var newKittens = kittens.slice(0, -1);
  return newKittens;
}

function removeFirstKitten(){
  var newKittens = kittens.slice(1)
    return newKittens;
}
