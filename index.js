var kittens = [] //define your array here

// Add your functions and code here

var kittens = ['Milo', 'Otis', 'Garfield'];

 var name = 'Ralph';

function destructivelyAppendKitten(name){
  return kittens.push(name);
}

var name = 'Bob';

function destructivelyPrependKitten(name){
    return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
    return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
    return kittens.shift();
}

var name = 'Broom';

function appendKitten(name){
  return [...kittens, (name)];
}

var name = 'Arnold';

function prependKitten(name){
  return [(name), ...kittens];
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten(){
  return kittens.slice(1);
}







