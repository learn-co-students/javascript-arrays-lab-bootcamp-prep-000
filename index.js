const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name){
  kittens.push(name);
}
destructivelyAppendKitten("Ralph");
console.log(kittens);

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}
destructivelyPrependKitten("Bob");
console.log(kittens);

function destructivelyRemoveLastKitten(){
  kittens.pop();
}
destructivelyRemoveLastKitten();
console.log(kittens);

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}
destructivelyRemoveFirstKitten();
console.log(kittens);

function appendKitten(name){
  var okittens = [...kittens, name];
  return okittens;
}
console.log(appendKitten("Gom"));
console.log(kittens);

function prependKitten(name){
  var okittens = [name, ...kittens];
  return okittens;
}
console.log(prependKitten("Gom"));
console.log(kittens);

function removeLastKitten(){
  var okittens = kittens.slice(0, kittens.length-1);
  return okittens;
}
console.log(removeLastKitten());
console.log(kittens);

function removeFirstKitten(){
  var okittens = kittens.slice(1);
  return okittens;
}



