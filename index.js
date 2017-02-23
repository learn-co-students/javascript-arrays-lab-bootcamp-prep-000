const app = "I don't do much."

// This function takes one parameter:
// 1) a name to add to the beginning of the array.
// This function alters/changes the original array that's passed in.
// The push method pushes elements onto end of array.
function destructivelyAppendKitten(name){
   kittens.push(name)
}

// The unshift method add eleemnt to the front of an array and
// mutates the underlying array.
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

// The pop method removes the last element from an array and returns that element.
function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
}

// The shift method removes the first element from an array and returns that element.
function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
}

// This function takes two parameters:
// 1) an array, 2) an element to add to the beginning of the array.
// This function does not alter the original array that's passed in,
// but rather return a new array and not modify the original.
// When used in an array, the spread operator (...) creates a new array
// in place, rather than modifying the original one.
function appendKitten(name){
  var kittens2 = [...kittens, name]
  return kittens2
}

function prependKitten(name){
  var kittens2 = [name, ...kittens]
  return kittens2
}

// The slice method takes a slice from its array. The first argument specifies
// where the slice starts, and the second argument specifies where it ends.
// If there is no second argument, the slice goes from the first argument
// (the start) to the end of the array.
// If there is no second argument, the slice goes from the first argument
// (the start) to the end of the array.
// Ex: Removing the first element is: slice(1).
function removeLastKitten(name){
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(name){
  return kittens.slice(1)
}
