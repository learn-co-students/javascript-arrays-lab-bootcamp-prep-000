// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]
//1 
function destructivelyAppendKitten(name){
  kittens.push(name);
  return(kittens);
}
//2 
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return(kittens);
}
//3 
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return(kittens);
}
//4 
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return(kittens);
}
//5
function appendKitten(name){
  return(kittens.concat(name))
}
//6 
function prependKitten(name){
  var newcat1 = [name]
  return(newcat1.concat(kittens))
}
//7
function removeLastKitten(){
  return(kittens.slice(0,2))
}
//8 
function removeFirstKitten(){
  return(kittens.slice(1))
}