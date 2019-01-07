var kittens = [] //define your array here

// Add your functions and code here
// #1 Arrays destructivelyAppendKitten(name) appends a kitten to the end of the kittens array:

function destructivelyAppendKitten (name) {
  return kittens.push(name)
}

  // #2 Arrays destructivelyPrependKitten(name) prepends a kitten to the beginningof the kittens array:
function destructivelyPrependKitten (name){
  return kittens.unshift(name)
}
  //    3) Arrays destructivelyRemoveLastKitten() removes the last kitten from the kittens array:
  
function destructivelyRemoveLastKitten() {
  return kittens.pop()
}
// #4 Arrays destructivelyRemoveFirstKitten() removes the First kitten from the kittens array:
function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}
//#5 Arrays appendKitten(name) appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged:
function appendKitten (name) {
  return kittens.concat(name)

}
// #6 Arrays prependKitten(name) prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged:
function prependKitten(name) {
  var alpha = [name]
return alpha.concat(kittens)
}
// #7  Arrays removeLastKitten() removes the last kitten in the kittens array andreturns a new array, leaving the kittens array unchanged:
function removeLastKitten() {
  
  return kittens.slice(0, (kittens.length -1))

}
//Arrays removeFirstKitten() removes the first kitten from the kittens arrayand returns a new array, leaving the kittens array unchanged:
function removeFirstKitten() {
return kittens.slice(1)

}