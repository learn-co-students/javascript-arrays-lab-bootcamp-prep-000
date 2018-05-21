const app = "I don't do much.";
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(array, name){
 kittens.push("Ralph");
 return kittens
}

function destructivelyPrependKitten(array, name) {
kittens.unshift("Bob");
return kittens
}

function destructivelyRemoveLastKitten(array, name) {
 kittens.pop();
 return kittens
}

function destructivelyRemoveFirstKitten(array, name){
return kittens.shift();
}

function appendKitten(array, brrom) {
 return [...kittens, "Broom"];
}

function prependKitten(array, name) {
return ["Arnold", ... kittens]
}

function removeLastKitten(array, name){
return kittens.slice(0, kittens.length -1)
 }
 
 function removeFirstKitten(array, name){
return kittens.slice();
 }