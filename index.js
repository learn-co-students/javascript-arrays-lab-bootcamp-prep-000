var kittens = [] //define your array here

// Add your functions and code here
var kittens = ['Milo','Otis','Garfield'];

function destructivelyAppendKitten(name){
   kittens.push(name);
  console.log(kittens);
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  console.log(kittens);
}
  
function destructivelyRemoveLastKitten(){
  kittens.pop();
  console.log(kittens);
}
function destructivelyRemoveFirstKitten(){
  var pos = 0, n = 1;
  kittens.splice(pos, n)
  console.log(kittens);
}
function appendKitten(name) {
console.log([...kittens,name]);
return [...kittens,name];
}
function prependKitten(name) {
  console.log([name, ...kittens]);
  return [name,...kittens];
}
function removeLastKitten() {
  console.log(kittens);
  console.log(kittens.slice(0,2))
  return kittens.slice(0,2);
  
}
function removeFirstKitten(){
  console.log(kittens);
  console.log(kittens.slice(1,3));
  return kittens.slice(1,3);
}