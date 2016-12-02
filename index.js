const app = "I don't do much."
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens;
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens;
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens;
}
function appendKitten(name){
  const newkitten =  [...kittens, name]
  return newkitten;
}
function prependKitten(name){
  const newkitten =  [name, ...kittens]
  return newkitten;
}
function removeLastKitten(){
  const newkitten =  kittens.slice(0, kittens.length - 1)
  return newkitten;
}
function removeFirstKitten(){
  const newkitten =  kittens.slice(1)
  return newkitten;
}
