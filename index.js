var kittens = [Milo, Otis, Garfield];

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

destructivelyAppendKitten('Ralph');


function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

destructivelyPrependKitten('Bob');


function destructivelyRemoveLastKitten(){
  kittens.pop(-1);
  return kittens;
}


function destructivelyRemoveFirstKitten(){
  kittens.shift(0);
  return kittens;
}

