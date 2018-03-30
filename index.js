const app = "I don't do much."


function kittens(){
  //how come during the tests, the other functions are able to access this variable even though it is not global?
   var kittens = ["Milo", "Otis", "Garfield"]
   return kittens
}

function destructivelyAppendKitten(name){
  //for some reason when I said kittens = kittens.push(name) this didn't work.
  kittens.push(name);
  return kittens
  
}

function destructivelyPrependKitten(name){

  kittens.unshift(name);
  return kittens
  
}

function destructivelyRemoveLastKitten(){

  kittens.pop();
  return kittens
  
}

function destructivelyRemoveFirstKitten(){

  kittens.shift();
  return kittens
  
}

function appendKitten(name){
 
  return [...kittens, name]
  
}

function prependKitten(name){
 
  return  [name, ...kittens]
  
}

function removeLastKitten(){
  
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}