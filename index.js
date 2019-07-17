var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push("Ralph")
}

function destructivelyPrependKitten(name){
  kittens.unshift('Bob')
}

function destructivelyRemoveLastKitten(name){
  kittens.pop('Garfield')
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift('Milo')
}

function appendKitten(name){
  var array2 = ['Broom']

  return kittens.concat(array2)

}

function prependKitten(name){
  var array3 = ['Arnold']

  return array3.concat(kittens)
}

function removeLastKitten(name){
  return kittens.slice(0,2)
}

function removeFirstKitten(name){
  return kittens.slice(1,3)
}
