var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(){
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten(){
  kittens.unshift('Bob');
  return kittens;
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

function appendKitten(){
  return [...kittens, "Broom"];
}

function prependKitten(){
  return ["Arnold", ...kittens];
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten(){
  return kittens.slice(1);
}
