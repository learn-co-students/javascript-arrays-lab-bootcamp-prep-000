var kittens = ["Milo","Otis","Garfield"] //define your array here
var name="Bob";
var newArray;
// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
  
}
function destructivelyPrependKitten(name){
  
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  var n= kittens.length-1;
  kittens.splice(n);
  return kittens;
  
}
function destructivelyRemoveFirstKitten(name){
 kittens.shift(); 
 return kittens;
}





function removeFirstKitten(){
  newArray= kittens.slice(1);
  return newArray;
}
function removeLastKitten(){
  var n= kittens.length-1;
  newArray= kittens.slice(0,n);
  return newArray;
}
function appendKitten(name){
newArray = [...kittens,name];
return newArray;

}
function prependKitten(name){
 newArray= [name,...kittens];
 return newArray
}

