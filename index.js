var kittens = [] //define your array here

// Add your functions and code here
function destructivelyAppendKitten (name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten (name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

function destructivelyRemoveFirstKitten (){
  return kittens.shift();
}

function appendKitten (name){
  return kittens.concat(name);
}

function prependKitten(name){
  var newarray = [name,...kittens]
    return newarray;
}

function removeLastKitten(){
  var newKittens = kittens.slice(0, kittens.length -1)
  return newKittens;
}

function removeFirstKitten() {
  var newKittens = kittens.slice(1);
  return newKittens;
}
