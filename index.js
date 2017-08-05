const app = "I don't do much."

destructivelyAppendKitten = [1,2,3,4]
function destructivelyAppendKitten(array){
  array.push()
  return array
}

function destructivelyPrependKitten(array, element){
  array.unshift(element)
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

function prependKitten(element, array){
  return [element,...array]
}

function appendKitten(name){
  return [...kittens,name]
}

function removeLastKitten(array){
  return array.slice(0,array.length-1)
}

function removeFirstKitten(array){
  return array.slice(1)
}
