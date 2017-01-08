const app = "I don't do much."
var kittens= ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name);
 return kittens
}

function destructivelyPrependKitten(name) {
kittens.unshift(name);
  return kittens
}
function destructivelyRemoveLastKitten() {
kittens.pop();
return kittens;
}
function destructivelyRemoveFirstKitten(){
kittens.shift();
return kittens;
}
function appendKitten (name) {
  var tab1 = [ ...kittens, name];
  return  tab1;
}
function prependKitten(name) {
  var tab1 = [name, ...kittens];
return tab1;
}
function removeLastKitten() {
var tab1 =  kittens.slice(0, kittens.length-1)
return tab1;

}
function removeFirstKitten() {
  var tab1 =  kittens.slice(1, kittens.length)
  return tab1;
}
