var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

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
  var newKittens = kittens.concat(name);
  return newKittens
}

function prependKitten(name){
  var newKittens = [name];
  const finalKittens = newKittens.concat(kittens);
  return finalKittens;
}

function removeLastKitten(){
  var smallKittens = kittens.slice(0,length-1);
  return smallKittens;
}

function removeFirstKitten(){
  var otherSmallKitten = kittens.slice(1);
  return otherSmallKitten;
}



