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
  var littleCats = kittens.slice();
  littleCats.push(name);
  return littleCats;
}

function prependKitten(name){
  var littleCats = kittens.slice();
  littleCats.unshift(name);
  return littleCats;
}

function removeLastKitten(){
  var littleCats = kittens.slice(0, kittens.length-1);
  return littleCats;
}

function removeFirstKitten(){
  var littleCats = kittens.slice(1);
  return littleCats;
}
