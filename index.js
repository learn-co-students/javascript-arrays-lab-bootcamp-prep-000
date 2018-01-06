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
  var a = [...kittens];
  a.push(name);
  return a;
}

function prependKitten(name){
  var a = [...kittens];
  a.unshift(name);
  return a;
}

function removeLastKitten(){
    var a = [...kittens];
    a.pop();
    return a;
}

function removeFirstKitten(){
  var a = [...kittens];
  a.shift();
  return a;
}