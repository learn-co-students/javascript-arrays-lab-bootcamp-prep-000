const app = "I don't do much."
function destructivelyAppendKitten(name){
 kittens.push(name);
 return kittens;
}
function destructivelyPrependKitten(name){
 kittens.unshift(name);
 return kittens;
}
function destructivelyRemoveLastKitten(){
 kittens.pop();
 return kittens;
}
function destructivelyRemoveFirstKitten()
{kittens.shift();
 return kittens;
}
function appendKitten(name){
const morekittens = [...kittens,name] 
 return morekittens;
}
function prependKitten(name){
const morekittens = [name,...kittens] 
 return morekittens;
}
function removeLastKitten(name){
  return kittens.slice(0, -1)
}

function removeFirstKitten(){
  return kittens.slice(1);
}