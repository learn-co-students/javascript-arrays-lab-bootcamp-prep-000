// const app = "I don't do much."
// function destructivelyAppendKitten(name){
// kittens.push(name)
//   return kittens
// }
//
// function destructivelyPrependKitten(name){
//   kittens.unshift(name)
//   return kittens
// }
//
// function destructivelyRemoveLastKitten(){
//   kittens.pop()
//   return kittens
// }
//
// function destructivelyRemoveFirstKitten(){
//   kittens.shift()
//   return kittens
// }
// function appendKitten(name){
//   var newKittens = [...kittens,name]
//   return newKittens
// }
//
// function prependKitten(name){
//   var newKittens = [name,...kittens]
//   return newKittens
// }
//
// function removeLastKitten(){
//   var newKittens = kittens.slice(0,-1)
//   return newKittens
// }
//
// function removeFirstKitten() {
//   var newKittens = kittens.slice(1)
//   return newKittens
// }


function destructivelyAppendKitten(name) {
   return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
   var new_array =[ ...kittens, name]
   return new_array
}

function prependKitten(name) {
  var new_array = [name, ...kittens]
  return new_array
}

function removeLastKitten() {
  var new_array = kittens.slice(0,-1)
  return new_array
}

function removeFirstKitten() {
  var new_array = kittens.slice(1)
  return new_array
}
