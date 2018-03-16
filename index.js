const app = "I don't do much."

function destructivelyAppendKitten(elm){
  window.kittens.push(elm)
}

function destructivelyPrependKitten(elm){
  window.kittens.unshift(elm)
}

function destructivelyRemoveLastKitten(){
  window.kittens.pop()
}

function destructivelyRemoveFirstKitten(){
   window.kittens.shift()
}

function appendKitten(elm) {
  return [...window.kittens, elm]
}

function prependKitten(elm) {
  return [elm, ...window.kittens]
}

function removeLastKitten() {
  var arr2 = [...window.kittens]
  arr2.pop()
  return arr2
}

function removeFirstKitten(){
  var arr2 = [...window.kittens]
  arr2.shift()
  return arr2
}