const app = "I don't do much."

function destructivelyAppendKitten(name){
  return kittens.push('Ralph');
}
function destructivelyPrependKitten(name){
  return kittens.unshift('Bob');
}
function destructivelyRemoveLastKitten(name){
  return kittens.pop();
}
function destructivelyRemoveFirstKitten(name){
  return kittens.shift();
}
function appendKitten(name){
  appendKitten = [...kittens, "Broom"]
  return appendKitten;
}
function prependKitten(name){
  prependKitten = ["Arnold", ...kittens]
  return prependKitten;
}
function removeLastKitten(){
  removeLastKitten = kittens.slice(0, kittens.length -1)
  return removeLastKitten;
}
function removeFirstKitten(){
  removeFirstKitten = kittens.slice(1)
  return removeFirstKitten;
}
