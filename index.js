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
 const moreKittens = kittens.concat(name)
 return moreKittens
}
// function prependKitten(name){
//   const moreKittens 
// }
function removeLastKitten(name){
  const moreKittens = kittens.slice(0, kittens.length - 1)
  return moreKittens
}
function removeFirstKitten(name){
  const moreKittens = kittens.slice(1)
  return moreKittens
}
function prependKitten(name) {
  const moreKittens = [name].concat(kittens)
  return moreKittens
}