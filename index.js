const app = "I don't do much."

function Arrays(){
  var kittens = ["Milo", "Otis", "Garfield"]
}

function destructivelyAppendKitten(name){
 Arrays();
return kittens.push(name)
}

function destructivelyPrependKitten(name){
  Arrays();
  return kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
  Arrays();
  return kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  Arrays();
  return kittens.shift()
}
function appendKitten(name){
  Arrays();
  return [...kittens, name]
}  
function prependKitten(name){
  Arrays();
return [name, ...kittens]
}
function removeLastKitten(){
  Arrays();
  return kittens.slice(0, kittens.length -1)
}
function removeFirstKitten(){
  Arrays();
  return kittens.slice(1)
}
