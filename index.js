var kittens = [] //define your array here

// Add your functions and code here


// var kittens = ["Jeff", "Matt"];
// console.log(kittens.concat("Tuna"));
// console.log(kittens.slice(0,1))
// console.log(kittens.splice(0,0,"Howard"))
// console.log(kittens);


var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  
  return kittens.push(name)
}

kittens = ["Milo", "Otis", "Garfield"];

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

kittens = ["Milo", "Otis", "Garfield"];

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

kittens = ["Milo", "Otis", "Garfield"];

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

kittens = ["Milo", "Otis", "Garfield"];

function appendKitten(name){
  return kittens.concat(name)
}

kittens = ["Milo", "Otis", "Garfield"];

function prependKitten(name){
  return [].concat(name, kittens)
}

kittens = ["Milo", "Otis", "Garfield"];

function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
}

kittens = ["Milo", "Otis", "Garfield"];

function removeFirstKitten(){
  return kittens.slice(1)
}









