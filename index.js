const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name)

}

function destructivelyPrependKitten(name){
  kittens.unshift(name)

}

function destructivelyRemoveLastKitten(){
  kittens.pop()

}

function destructivelyRemoveFirstKitten(){
  kittens.shift()

}
// kittens = [ 'Milo', 'Otis', 'Garfield']
// destructivelyRemoveFirstKitten()
// // kittens.unshift()
// console.log(kittens)

function appendKitten(name){
  return [...kittens , name]

}

function prependKitten(name){
  return [name, ...kittens]

}

function removeLastKitten(){
  return kittens.slice(0,kittens.length-1)

}

function removeFirstKitten(name){
  return kittens.slice(1)

}
