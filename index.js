var kittens = [] //define your array here

// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield'];
function kittens(){
  var kittens = ['Milo', 'Otis', 'Garfield'];
}
function destructivelyAppendKitten(name){
  return kittens.splice(kittens.length,0,name)
  //return mm;
}
function destructivelyPrependKitten(name){
  return kittens.splice(0,0,name);
}
function destructivelyRemoveLastKitten(){
  return kittens.splice(kittens.length-1,1)
}
function destructivelyRemoveFirstKitten(){
 return kittens.splice(0,1); 
}
function appendKitten(name){
  var newk = kittens.concat(name);
  return newk;
}
function prependKitten(name){
  var newk = [name].concat(kittens);
  return newk;
}
function removeLastKitten(){
 var newk = kittens.slice(0, kittens.length-1);
 return newk;
}
function removeFirstKitten(){
  var newk = kittens.slice(1)
  return newk;
}