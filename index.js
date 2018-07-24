function kittens(){
  var kittens = ["Milo", "Otis", "Garfield"]
}

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

function appendKitten(name){
  var moreKittens1 = [...kittens, name]
  return moreKittens1
}



function prependKitten(name){
  var moreKittens2 = [name, ...kittens]
  return moreKittens2
}
   
   
function removeLastKitten(){
  var moreKittens3 = kittens.slice(0,kittens.length-1);
  return moreKittens3

}

function removeFirstKitten(){
 return kittens.slice(1,3)
}
