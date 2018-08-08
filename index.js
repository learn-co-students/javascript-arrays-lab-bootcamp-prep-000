// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  let newArray = [...kittens, name]
  return newArray;
}

function prependKitten(name){
  let newArray = [name, ...kittens]
  return newArray;
}

function removeLastKitten(){
  let newArray = kittens.slice(0, kittens.length-1)
  return newArray;
}

function removeFirstKitten(){
  let newArray = kittens.slice(1)
  return newArray;
}