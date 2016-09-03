const app = "I don't do much."

function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
  return [...kittens,name]
}

function prependKitten(name){
  return [name,...kittens]
}

function removeLastKitten(){
  //[name,...kittens]
  return kittens.slice(0,kittens.length-1)
}

function removeFirstKitten(){
  //[name,...kittens]
  return kittens.slice(1,kittens.length)
}
