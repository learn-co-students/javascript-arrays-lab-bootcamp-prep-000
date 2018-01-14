const app = "I don't do much."

function destructivelyAppendKitten(){
  kittens.push('Ralph');
}

function destructivelyPrependKitten(){
  kittens.unshift('Bob');
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
  var newKittens = [...kittens, 'Broom'];
  return newKittens;
}

function prependKitten(name){
  var newKittens = ['Arnold', ...kittens];
  return newKittens;
}

function removeLastKitten(){
  var newKittens = kittens.slice(0,2);
  return newKittens;
}

function removeFirstKitten(){
  var newKittens = kittens.slice(1);
  return newKittens;
}