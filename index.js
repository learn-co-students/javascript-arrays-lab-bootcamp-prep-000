const app = "I don't do much."

function kittens(){
  var kittens = ["Milo", "Otis", "Garfield"]
  return kittens;
}

function destructivelyAppendKitten(name){
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift("Bob")
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
 var broom = [...kittens,"Broom"]
  return broom;
}

function prependKitten(name){
  var arnold = ["Arnold",...kittens]
  return arnold;
}

function removeLastKitten(){
  var last =  kittens.splice(0,2)
  return last;
}
