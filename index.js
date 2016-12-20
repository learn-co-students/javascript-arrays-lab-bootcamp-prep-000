const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function kittens (){
  var kittens = ["Milo", "Otis", "Garfield"];
  return kittens;
}


function destructivelyAppendKitten(name){
  var a = kittens;
  a.push(name);
  return a;
}

function destructivelyPrependKitten(name){
  var a = kittens;
  a.unshift(name);
  return a;
}

function destructivelyRemoveLastKitten(){
  var a = kittens;
  a.pop();
  return a;
}

function destructivelyRemoveFirstKitten(){
  var a = kittens;
  a.shift();
  return a;
}

function appendKitten(name){
var a = kittens;
a = [...a, name];
return a;
}

function prependKitten(name){
var a = kittens;
a = [name, ...a];
return a;
}

function removeLastKitten(){
var a = kittens;
a = a.slice(0,a.length-1);
return a;
}

function removeFirstKitten(){
var a = kittens;
a = a.slice(1);
return a;
}
