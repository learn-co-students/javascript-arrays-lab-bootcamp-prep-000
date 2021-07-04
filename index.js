var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens.push("Ralph")
}

function destructivelyPrependKitten(){
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
  let newKitten = (name)
  return kittens.concat(newKitten)
}

function prependKitten(name){
  let newKitten = [(name)];
  return newKitten.concat(kittens)
}

function removeLastKitten(){
  let newKitten = kittens.slice(0);
  return newKitten.pop()
}


function removeLastKitten(){
  let newList = kittens.slice()
  newList.pop();
  return newList
}

function removeFirstKitten(){
  let newList = kittens.slice()
  newList.shift();
  return newList
}