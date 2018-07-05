// Add your functions and code here


// function destructivelyAppendKitten(){
//   var kittens = ['Milo', 'Otis', 'Garfield'];
//   var newKit =['Ralph']
//   var newkittens = kittens.concat(newKit);
//   return newkittens
// }

// console.log(destructivelyAppendKitten())


var kittens = ['Milo', 'Otis', 'Garfield'];


function destructivelyAppendKitten(Ralph){
  kittens.push(Ralph)
  return kittens
}

function destructivelyPrependKitten(Bob){
  kittens.unshift(Bob)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.splice(0,1)
  return kittens
}

function appendKitten(Broom){
  var newKittens = [...kittens, "Broom"];
  return newKittens;
}


function prependKitten(){
  var preNewKittens = ["Arnold", ...kittens]
  return preNewKittens
}

function removeLastKitten(){
  var newKittens = kittens.slice(0,-1)
  return newKittens
}

function removeFirstKitten(){
  var firstKit = kittens.slice(1,3)
  return firstKit
}