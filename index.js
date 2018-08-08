// Add your functions and code here
// var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name){
  window.kittens.push(name)
  // return kittens
}

function destructivelyPrependKitten(name){
  window.kittens.unshift(name)
}

function destructivelyRemoveFirstKitten(){
 window.kittens.shift() 
}

function appendKitten(name){
  return kittens.concat([name])
}

function prependKitten(name){
  return [name].concat(kittens)
}

function destructivelyRemoveLastKitten(){
  window.kittens.pop()
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length-1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}