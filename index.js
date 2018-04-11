const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
   var desapp = kittens;
   desapp.push(name);
   return desapp;
}

function destructivelyPrependKitten(name){
   var despre = kittens;
   despre.unshift(name);
   return despre;
}
function destructivelyRemoveLastKitten(){
   var desremvlast = kittens;
   desremvlast.pop();
   return desremvlast;
}

function destructivelyRemoveFirstKitten(){
   var desremnfirst = kittens;
   desremnfirst.shift();
   return desremnfirst;
}

function appendKitten(name){
   var appkit = [...kittens, name];
   return appkit;
}

function prependKitten(name){
   var prekit = [name, ...kittens];
   return prekit;
}

function removeLastKitten(){
   var remvlast = kittens.slice(0, kittens.length -1);
   return remvlast;
}

function removeFirstKitten(){
   var remvfirst = kittens.slice(1);
   return remvfirst;
}
