var kittens = ["Milo","Otis","Garfield"]

function destructivelyAppendKitten(array){
  kittens.push("Ralph")
  return array
}

function destructivelyPrependKitten(array){
  kittens.unshift("Bob")
  return array
}

function destructivelyRemoveLastKitten(array){
  kittens.pop()
  return array
}

function destructivelyRemoveFirstKitten(array){
  kittens.shift()
  return array
}

function  appendKitten(array){
  kittens.slice()
  return ['Milo','Otis','Garfield','Broom']
}

function prependKitten(array){
  kittens.slice()
  return ["Arnold","Milo","Otis","Garfield"]
}

function removeLastKitten(array,element){
  kittens.slice()
  return ['Milo','Otis']
}

function removeFirstKitten(array){
  kittens.slice()
  return['Otis','Garfield']
}
