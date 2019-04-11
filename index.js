var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()  
}

//Non-destructive ways
function appendKitten(name){
  var result = [...kittens, name];
  return result
}

function prependKitten(name){
  var result = [name, ...kittens];
  return result
}

function removeLastKitten(){
  var result = kittens.slice(0,kittens.length-1);
  return result
}

function removeFirstKitten(){
  var result = kittens.slice(1);
  return result
}
