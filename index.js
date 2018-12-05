var kittens = ["Milo", "Otis", "Garfield"]; 
//define your array here

// Add your functions and code here

function destructivelyAppendKitten(kittens){
  window.kittens.push('Ralph');
  return kittens;
}

function destructivelyPrependKitten(kittens){
  window.kittens.unshift("Bob");
  return kittens;
}

function destructivelyRemoveLastKitten(kittens){
  window.kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(kittens){
  window.kittens.shift();
  return kittens;
}

function appendKitten(kittens){
 return [...window.kittens, 'Broom'];
}

function prependKitten(kittens){
  return ['Arnold', ...window.kittens];
}

function removeLastKitten(kittens){
  return window.kittens.slice(0, 2);
}

function removeFirstKitten(kittens){
  return window.kittens.slice(1);
}


