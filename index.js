var kittens = [] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}


function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
 kittens.shift()
 return kittens
}

function appendKitten(name) {
  const kit = [...kittens]
  kit.push(name)
  return kit
}

function prependKitten(name) {
  const kit = [...kittens]
  kit.unshift(name)
  return kit
}

function removeLastKitten() {
  const kit = [...kittens]
  kit.pop()
  return kit
}

function removeFirstKitten() {
  const kit = [...kittens]
  kit.shift()
  return kit
}




