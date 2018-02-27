const app = "I don't do much."

kittens = ['Milo', 'Otis', 'Garfield']


function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name){
  return kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name){
  return kittens.shift(name)
}

function appendKitten(name){
  const newKittens = [...kittens, name]
  return newKittens
}

function prependKitten(name){
  const newKittens = [name, ...kittens]
  return newKittens
}

function removeLastKitten(){
  var newKittens = kittens.slice(0, kittens.length - 1)
  
  console.log("HERE IS THE ANSWER ", newKittens)
  
  return newKittens
}

function removeFirstKitten(){
  var newKittens = kittens.slice(1)
  return newKittens
}

console.log("HERE IS THE LIST ",kittens)
console.log(removeLastKitten())
console.log(removeFirstKitten())




