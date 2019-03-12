var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// using push
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

//using unshift
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

//using pop 
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

//using shift 
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

//using concat
function appendKitten(name){
  var newkittens = kittens.concat(name)
  return newkittens
}

//using ...
function prependKitten(name){
  var newkittens = [name ,...kittens]
  return newkittens
  }

//using slice end 
function removeLastKitten(){
  var newkittens = kittens.slice(0, 2)
  return newkittens
}

//using slice begining
function removeFirstKitten(){
  var newkittens = kittens.slice(1)
  return newkittens
}
