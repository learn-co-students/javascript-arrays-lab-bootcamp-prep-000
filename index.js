var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
var destructivelyAppendKitten = (val) => {
  kittens.push(val)
  return kittens
}

var destructivelyPrependKitten = (val) => {
  kittens.unshift(val)
  return kittens
}

var destructivelyRemoveLastKitten = (val) => {
  kittens.pop(val)
  return kittens
}

var destructivelyRemoveFirstKitten = (val) => {
  kittens.shift(val)
  return kittens
}

var appendKitten = (val) => {
  //var newArray = [...kittens, val]
  var newArray = [...kittens]// duplacated the orginal array 
  newArray.push(val)
  return newArray
}

var prependKitten = (val) => {
  var newArray = [...kittens]// duplacated the orginal array 
  newArray.unshift(val)
  return newArray
}

var removeLastKitten = (val) => {
  var newArray = [...kittens]// duplacated the orginal array 
  newArray.pop(val)
  return newArray
}

var removeFirstKitten = (val) => {
  var newArray = [...kittens]// duplacated the orginal array 
  newArray.shift(val)
  return newArray
}
