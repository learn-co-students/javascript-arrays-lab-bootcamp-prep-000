var kittens= ["Milo", "Otis", "Garfield"]

console.log(kittens);

function destructivelyAppendKitten(name){
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.push(name)
  console.log(kittens)
}

function destructivelyPrependKitten(name){
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.unshift(name)
  console.log(kittens)
}

function destructivelyRemoveLastKitten(){
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.pop()
  console.log(kittens)
}

function destructivelyRemoveFirstKitten(){
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.shift()
  console.log(kittens)
}


function appendKitten(name){
  var newKittens = [...kittens]
  newKittens.push(name)
  return newKittens
}

function prependKitten(name){
  var newKittens = [...kittens]
  newKittens.unshift(name)
  return newKittens

}

function removeLastKitten(){
  var newKittens = [...kittens]
  newKittens.pop()
  return newKittens

}

function removeFirstKitten(){
  var newKittens = [...kittens]
  newKittens.shift()
  return newKittens

}
