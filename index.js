var kittens = ['Milo', 'Otis', 'Garfield'] 

// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push(name)
}
function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}
function destructivelyRemoveLastKitten(name){
  return kittens.pop()
}
function destructivelyRemoveFirstKitten(name){
  return kittens.shift()
}
function appendKitten(name){
 return kittens.slice(0, kittens.length - 1)
}