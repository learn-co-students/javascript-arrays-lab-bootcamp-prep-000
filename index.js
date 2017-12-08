var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(name) {
  var dappendKitten = kittens.push(name)
  return dappendKitten
}

function destructivelyPrependKitten(name) {
  var dprependKitten = kittens.unshift(name)
  return dprependKitten
}

function destructivelyRemoveLastKitten(name) {
  var dremoveLastKitten = kittens.pop(name)
  return dremoveLastKitten
}

function destructivelyRemoveFirstKitten(name) {
  var dremoveFirstKitten = kittens.shift(name)
  return dremoveFirstKitten
}



function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeFirstKitten(name) {
  return kittens.slice(1)
}

function removeLastKitten(name) {
  return kittens.slice(0, kittens.length - 1)
}

////For some reasons the slice(-1) didn't work on the last function. I also need to figure out when to put one or two parameters in the functions. Maybe reevaluate if the destructive ones need those new variables too...?