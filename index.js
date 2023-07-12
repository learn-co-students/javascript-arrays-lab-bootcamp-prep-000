var kittens = ['Milo', 'Otis', 'Garfield']; //define your array here

function destructivelyAppendKitten(Ralp){
kittens.push("Ralph")
}

function destructivelyPrependKitten(Bob){
  kittens.unshift("Bob")
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function appendKitten(Broom){
return [...kittens, "Broom"]
}

function prependKitten(Arnold){
 return ["Arnold", ...kittens];
}

function removeLastKitten(){
return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(){
return kittens.slice(1)
}
