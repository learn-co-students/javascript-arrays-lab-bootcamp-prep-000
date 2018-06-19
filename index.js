
kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
 return kittens.push(name)
}

function destructivelyPrependKitten  (name) {
  return kittens.unshift(name)
}

function destructivelyRemoveFirstKitten () {
  return kittens.shift()
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}
function appendKitten(name){
  var one = [...kittens, name]
  return one
}
function prependKitten(name){
  var two = [name, ...kittens]
  return two
}

function removeLastKitten (){
  var three = kittens.slice(0, kittens.length-1)
  return three
}

function removeFirstKitten(){
  var four=kittens.slice(1, kittens.length)
  return four
}
