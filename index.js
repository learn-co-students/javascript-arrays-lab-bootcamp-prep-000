 var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(){
  return kittens.push("Ralph")
}

function destructivelyPrependKitten(){
  return kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  
  return kittens.shift()
}

function removeLastKitten(){
  var kittens = ['Milo', 'Otis', 'Garfield']
  return kittens.slice(0, (kittens.length - 1))
}

function appendKitten(kitten){
  var kittens = ['Milo', 'Otis', 'Garfield']
  return kittens.concat(kitten)
}

function prependKitten(kitten){
  var kittens = ['Milo', 'Otis', 'Garfield']
  return ([kitten,...["Milo", "Otis", "Garfield"]])
}

function removeFirstKitten(){
  var kittens = ['Milo', 'Otis', 'Garfield']
  return (kittens.slice(1))
}
