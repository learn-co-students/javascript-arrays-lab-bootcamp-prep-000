var kittens = ['Milo', 'Otis', 'Garfield']; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name) {
   kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}


function appendKitten(name) {
  let moreKittens = [...kittens, name];
  return moreKittens;
}

function prependKitten(name) {
  let moKittens = [name, ...kittens];
  return moKittens;
}



function removeFirstKitten() {
 let fk = kittens.slice(1);
  return fk;
}

function removeLastKitten() {
  let lk = kittens.slice(0, kittens.length-1);
  return lk;
}