const app = "I don't do much."

function destructivelyAppendKitten(name) {
  var tmp = kittens.push(name)
  return tmp
}

function destructivelyPrependKitten(name) {
  var tmp = kittens.unshift(name)
  return tmp
}

function destructivelyRemoveLastKitten(name) {
  var tmp = kittens.pop()
  return tmp
}

function destructivelyRemoveFirstKitten(name) {
  var tmp = kittens.shift()
  return tmp
}

function appendKitten(name) {
   return [...kittens,name]
}

function prependKitten(name) {
   return [name, ...kittens]
}

function removeLastKitten() {
  return kittens.slice(0,kittens.length-1)
}

function removeFirstKitten() {
  return kittens.slice(1)  
}
