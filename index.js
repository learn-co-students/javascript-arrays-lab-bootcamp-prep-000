var kittens = [] //define your array here

// Add your functions and code here
kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name){
  kittens.push(name)
  return name
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
  const newK = kittens.concat(name);
  return newK
}

function removeLastKitten(){
  return kittens.slice(0, 2);
}

function prependKitten(name){
  const newK = [name, ...kittens];
  return newK
}

function removeFirstKitten(){
  return kittens.slice(1, 3);
}