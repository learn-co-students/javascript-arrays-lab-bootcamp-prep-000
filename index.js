var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(kitten){
  kittens.push(kitten);
  return kittens;
}

function destructivelyPrependKitten(kitten){
  kittens.unshift(kitten);
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

function appendKitten(kitten){
  var arr = [ ...kittens, kitten ];
  return arr;
}

function prependKitten(kitten){
  var arr = [ kitten, ...kittens ];
  return arr;
}

function removeLastKitten(){
  var arr = kittens.slice( 0, kittens.length - 1 );
  return arr;
}

function removeFirstKitten(){
  var arr = kittens.slice ( 1, kittens.length );
  return arr;
}
