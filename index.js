var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here
// Add your functions and code here

function destructivelyAppendKitten(name){
kittens.push(name)
}
function destructivelyPrependKitten(name) {
kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
}


function appendKitten(name) {
 return Array = ['Milo', 'Otis', 'Garfield'].concat(name)
}

function prependKitten(name){
return Array = name.concat([, 'Milo', 'Otis', 'Garfield'])
}

function removeLastKitten(){
return kittens.slice(0, kittens.length - 1)

  }


function removeFirstKitten(){
return kittens.slice(1)
}
