const app = "I don't do much."

var kittens =  ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
function appendKitten(name){
  var catArr = kittens.slice("")
  catArr.push(name)
return catArr
}

function prependKitten(name){
  var catArr = kittens.slice("")
  catArr.unshift(name)
  return catArr
}

function removeLastKitten(){
  var catArr = kittens.slice("")
  catArr.pop()
  return catArr
}

function removeFirstKitten(){
  var catArr = kittens.slice("")
  catArr.shift()
  return catArr
}
