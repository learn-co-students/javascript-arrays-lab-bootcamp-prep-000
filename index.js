var kittens = [] //define your array here

// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield'];


function destructivelyAppendKitten(){
  return kittens.push('Ralph');
}

function destructivelyPrependKitten(){
  return kittens.unshift('Bob');
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

function appendKitten(){
  return kittens.concat('Broom');
}

function prependKitten(){
  var newKitts = kittens.slice();
  var newKitts1 = newKitts.splice(0,0,'Arnold');
  return newKitts;
}

function removeLastKitten(){
    var removeLast = kittens.slice();
    var removeLast1 = removeLast.splice(-1,1);
  return removeLast;
}

function removeFirstKitten(){
  return kittens.slice(1);
}





