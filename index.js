var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name){
  return kittens.push('Ralph');
}

function destructivelyPrependKitten(name){
  return kittens.unshift('Bob');
}

function destructivelyRemoveLastKitten(name){
  return kittens.pop('Garfield');
}

function destructivelyRemoveFirstKitten(name){
  return kittens.shift('Milo');
}

function appendKitten(name){
  return [...kittens, name];
}

function prependKitten(name){
  return [name,...kittens];
}

function removeLastKitten(){
  return kittens.slice(0, length-1);
}

function removeFirstKitten(){
  return kittens.slice(1);
}
