const app = "I don't do much."


function destructivelyAppendKitten(name){

  kittens.push(name)

}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}


function destructivelyRemoveLastKitten(){

  kittens.pop()
}

function destructivelyRemoveFirstKitten(){

  kittens.shift()
}

function appendKitten(name){

  var morekittens = [...kittens, name]
  return morekittens
}

function prependKitten(name){

  var morekittens = [name, ...kittens]
  return morekittens
}

function removeLastKitten(){

//  var arraylength = kittens.length
  var lesskittens = kittens.slice(0, kittens.length-1)
  return lesskittens
}

function removeFirstKitten(){

  var lesskittens = kittens.slice(1)
  return lesskittens
}
