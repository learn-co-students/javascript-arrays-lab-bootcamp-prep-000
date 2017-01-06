//const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
 function destructivelyAppendKitten(name){
   kittens.push(name);
   return kittens ;
 }
destructivelyAppendKitten("Ralph");


function destructivelyPrependKitten(name){
kittens.unshift(name);
return kittens ;
}
destructivelyPrependKitten("Bob");

function destructivelyRemoveLastKitten(){
kittens.pop();
return kittens ;
}

function destructivelyRemoveFirstKitten(){
kittens.shift();
return kittens ;
}

function appendKitten(name){
var newArray = [...kittens, name];
return newArray ;
}
appendKitten("Broom");

function prependKitten(name){
var newArray = [name, ...kittens];
return newArray ;
}
prependKitten("Arnold");

function removeLastKitten(){
var change = kittens.slice(0, kittens.length -1);
return change ;
}

function removeFirstKitten(){
var change = kittens.slice(1);
return change;
}
