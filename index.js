// Add your functions and code here
function destructivelyAppendKitten(kitten){
  return kittens.push(kitten)
}

function destructivelyPrependKitten(kitten){
  return kittens.unshift(kitten)
}


function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}


function appendKitten(kitten){
  return kittens.concat(kitten)
}


function prependKitten(kitten){
  var li = [kitten]
  return li.concat(kittens)
}

function removeLastKitten(){
  return kittens.slice(0,-1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}