var kittens = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
    return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(name) {
  var kittens2 = kittens
  return kittens2.concat(name)
}

function prependKitten(name){
  var kittens2 = [name]
  return kittens2.concat(kittens)
}

function removeLastKitten(){
  var kittens2 = kittens
  return kittens2.slice(0,kittens2.length-1)

}

function removeFirstKitten(){
  var kittens2=kittens
  return kittens2.slice(1)
}
