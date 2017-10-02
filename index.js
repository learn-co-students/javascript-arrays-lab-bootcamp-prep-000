const app = "I don't do much."

function destructivelyAppendKitten(name){
  return kittens.push(name);
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

function appendKitten(name){
  const moreKittens = [...kittens, name];
  return moreKittens;
}

function prependKitten(name){
  const moreKittens = [name, ...kittens];
  return moreKittens;
}

function removeLastKitten(){
  const lessKittens = kittens.slice(0, -1);
  return lessKittens;
}

function removeFirstKitten(){
  const lessKittens = kittens.slice(1);
  return lessKittens;
}
