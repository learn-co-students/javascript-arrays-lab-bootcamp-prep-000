var kittens = ["Milo", "Otis", "Garfield"] //define your array here

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
  var newArr = kittens.concat(name)
  return newArr
}

function prependKitten(name){
  var newArr = [name]
  var thirdArr = newArr.concat(kittens)
  return thirdArr
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length -1);
}

function removeFirstKitten(){
    return kittens.slice(1, kittens.length);
}
