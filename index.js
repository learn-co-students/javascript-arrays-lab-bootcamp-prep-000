var kittens = ["Milo", "Otis", "Garfield"];
// Add your functions and code here

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
  var appended= kittens.concat(name);
  return appended;
}

function prependKitten(name){
  var prepend= [name, ...kittens]
  return prepend;
}

function removeFirstKitten(){
  var removed=kittens.slice(1);
  return removed;
}

function removeLastKitten(){
  var removed= kittens.slice(0,kittens.length-1)
  return removed;
}





