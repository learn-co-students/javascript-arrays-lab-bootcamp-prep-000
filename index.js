const app = "I don't do much."

function destructivelyAppendKitten(name){
   kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}
function appendKitten(name){
  return [...kittens, name]
}

function prependKitten(name){
  return [name, ...kittens]
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length-1)
}

function removeFirstKitten(){
  return kittens.slice(1, kittens.length)
}
