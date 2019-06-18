var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
 kittens.push(name)
 return kittens
}

function destructivelyPrependKitten(name){
 kittens.unshift(name)
 return kittens
}

function destructivelyRemoveLastKitten(){
 kittens.pop()
 }

function destructivelyRemoveFirstKitten(){
 kittens.shift()
}

function appendKitten(name){
 var newArray = []
 var kittens = kittens.concat(newArray);
 kittens.push(name)
 return kittens
}

function prependKitten(name) {
  return [name, ...kittens]
}


function appendKitten(name){
  var newArray = kittens.slice();
  // or ES6 way
  // var newArray = [...kittens];
  newArray.push(name)
  return newArray
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

 function removeFirstKitten() {
  return kittens.slice(1)
}