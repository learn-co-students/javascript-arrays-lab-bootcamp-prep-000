

function destructivelyAppendKitten(array, name){
  newArray = array.push(name)
  return newArray
}

function destructivelyPrependKitten(array, name){
  array.unshift(name)
  return array
}

function destructivelyRemoveLastKitten(array){
  array.pop()
  return array
}

function destructivelyRemoveFirstKitten(array){
  array.shift()
  return array
}

function appendKitten(array, name){
  return [...array, name]
}

function prependKitten (array, name){
  return [name, ...array]
}

function removeLastKitten(array, name){
  var newArray = array
  return newArray.slice(0, newArray.length-1)
}

function removeFirstKitten(array){
  var newArray = array
  return newArray.slice(1)
}
