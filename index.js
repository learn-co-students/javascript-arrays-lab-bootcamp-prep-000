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
  var kit = [...kittens, name];
  return kit;
}

function prependKitten(name){
  var kit = [name, ...kittens];
  return kit;
}

function removeLastKitten(){
  var kit = kittens.slice(0, kittens.length -1);
  return kit;
}

function removeFirstKitten(){
  var kit = kittens.slice(1);
  return kit;
}
