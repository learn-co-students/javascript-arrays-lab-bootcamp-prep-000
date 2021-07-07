var kittens = [] //define your array here

// Add your functions and code here
function destructivelyAppendKitten (name){
  kittens.push(name);
return kittens
}

function destructivelyPrependKitten (name){
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
  return kittens
}
function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
  return kittens
}
function appendKitten (name){
  return [...kittens, name]//kittens.splice(0, kittens.length ,name)//adds to end
} 

function prependKitten(name){
  return [name, ...kittens]//kittens.splice(0,kittens.length-1, name);// adds to beginning 
}

function removeLastKitten (name){
  return kittens.slice(0, kittens.length -1)
}

function removeFirstKitten (name){
return kittens.slice(1, kittens.length)
}
