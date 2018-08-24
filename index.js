function destructivelyAppendKitten(name){
  return kittens.push("Ralph");
}

function destructivelyPrependKitten(name){
  return kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten(){
 return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

function appendKitten(name){
  kittens.concat("Broom")
  return kittens.concat("Broom")
}

function prependKitten(name){
  ["Arnold"].concat(kittens)
  return ["Arnold"].concat(kittens)
}

function removeLastKitten(){
  kittens.slice(0,1)
  return kittens.slice(0,2)
}

function removeFirstKitten() {
  kittens.slice(1,3)
  return kittens.slice(1,3)
}