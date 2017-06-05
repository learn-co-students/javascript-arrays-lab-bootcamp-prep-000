function destructivelyAppendKitten(name){
  //destructive means it mutates the existing array
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
  var kitt2 = [...kittens, name];
  return kitt2;
}

function prependKitten(name){
  var kitt2 = [name,...kittens];
  return kitt2;
}

function removeLastKitten(){
  var kitt2 = kittens.slice(0, kittens.length -1);
  return kitt2;

}

function removeFirstKitten(){
  var kitt2 = kittens.slice(1);
  return kitt2;

}
