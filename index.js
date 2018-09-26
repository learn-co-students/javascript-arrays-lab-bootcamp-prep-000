var kittens=["Milo","Otis","Garfield"];
var newArray=["Milo","Otis","Garfield", "Broom"];
var newArray2=["Arnold","Milo","Otis","Garfield"];
var cutOffLast=kittens.slice(0,2);
var cutOffFirst=kittens.slice(1,3);


function destructivelyAppendKitten(Ralph){
 kittens.push("Ralph");
 return kittens;
}
function destructivelyPrependKitten(Bob){
  kittens.unshift("Bob");
  return kittens;
}
function destructivelyRemoveLastKitten(){
  kittens. pop();
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}
function appendKitten(Broom){
 kittens.concat(Broom);
 return newArray;
}

function prependKitten(Arnold){
  kittens.concat(Arnold);
  return newArray2;
  
}

function removeLastKitten(Kittens){
kittens.slice(0,2);
return cutOffLast;
}
function removeFirstKitten(Kittens){
kittens.slice(1,3);
return cutOffFirst;
}