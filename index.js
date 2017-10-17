const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
  var temp = [...kittens, name];
  return temp
}

function prependKitten(name){
  var temp = [name, ...kittens];
  return temp
}

function removeLastKitten(){
  var temp = kittens.slice(0, kittens.length - 1);
  return temp
}

function removeFirstKitten(){
  var temp = kittens.slice(1);
  return temp
}
