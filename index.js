var kittens = [] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name)
  return name
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return name
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return name
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return name
}

function appendKitten(name){
let result = kittens.concat(name)
return result;
}

function prependKitten(name){
let result = [name, ...kittens]
return result;
}

function removeLastKitten(){
let result = kittens.slice(0, kittens.length-1)
return result;
}

function removeFirstKitten(){
let result = kittens.slice(1)
return result;

}
