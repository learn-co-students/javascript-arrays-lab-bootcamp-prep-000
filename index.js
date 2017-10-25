var kittens = ["Milo", "Otis", "Garfield"];
console.log(kittens.length);

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
   kittens.pop();
   return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift(0);
  return kittens;
}

function appendKitten(name){
  var morekittens = [...kittens, name];
  return morekittens;
}

function prependKitten(name) {
  var morekittens = [name, ...kittens];
  return morekittens
}

function removeLastKitten() {
  var morekittens = kittens.slice(0, kittens.length -1);
  return morekittens;
}

function removeFirstKitten() {
  var morekittens = kittens.slice(1);
  return morekittens;
}
