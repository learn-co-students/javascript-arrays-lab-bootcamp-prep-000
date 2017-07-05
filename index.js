const app = "I don't do much.";

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
   return kittens.push(name);
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}


function destructivelyRemoveLastKitten(){
return  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

function appendKitten(name){
  var newKittens = [...kittens]
     newKittens.push(name)
    return newKittens
}

function prependKitten(name){
  var newKittens = [...kittens]
   newKittens.unshift(name)
  return newKittens

  kittens.unshift(name);
  var holder = kittens.shift();
  return holder;
}

function removeLastKitten(){
  var newKittens = [...kittens]
   newKittens.pop()
  return newKittens

  var removed = kittens;
  return removed.pop();
}

function removeFirstKitten(){
  var newKittens = [...kittens]
  newKittens.shift()
  return newKittens

  var holder = kittens;
  holder.shift()
  return holder;
}
