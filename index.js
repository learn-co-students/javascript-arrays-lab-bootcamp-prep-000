const app = "I don't do much."

function destructivelyAppendKitten(name) {
  window.kittens.push(name);
  return;
}

function destructivelyPrependKitten(kitty) {
  window.kittens.unshift(kitty);
  return;
}

function destructivelyRemoveLastKitten() {
  window.kittens.pop();
  return;
}

function destructivelyRemoveFirstKitten() {
  window.kittens.shift();
  return;
}

function appendKitten(kittyName){
  var moreKittens = [...window.kittens, kittyName];
  return moreKittens;
}

function prependKitten(Name){
  return [Name, ...window.kittens];
}

function removeLastKitten() {
  var fewerKittens = window.kittens.slice(0, window.kittens.length - 1);
  return fewerKittens;
}

function removeFirstKitten() {
  return window.kittens.slice(1);
}
/*Note: To get the first kitten returned, just return window.kittens.slice(0,1)
To get the last kitten returned, just return window.kittens.slice(-1)*/