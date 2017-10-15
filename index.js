const app = "I don't do much."
function destructivelyAppendKitten(name){
  kittens.push(name)
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
}
function appendKitten(name){
  const moreCats = [...kittens, "Broom"]
  return moreCats
}
function prependKitten(name){
  const moreCats2 = ["Arnold", ...kittens]
  return moreCats2
}
function removeLastKitten(){
  var cats = kittens.slice(0, kittens.length - 1)
  return cats
}
function removeFirstKitten(){
  var cat2 = kittens.slice(-2)
  return cat2
}
