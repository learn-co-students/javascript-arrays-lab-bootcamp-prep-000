var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
kittens.push(name);
kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.splice(-1,1);
  kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.splice(0,1);
  kittens;
}

function prependKitten(name){
  return [name, ...kittens];

}

function appendKitten(name){
  return [...kittens, name];
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length -1);
}

function removeFirstKitten(){
  return kittens.slice(1);
}
