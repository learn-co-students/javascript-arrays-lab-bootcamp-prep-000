//define your array here
var kittens = ['Milo', 'Otis', 'Garfield'];
// Add your functions and code here
function destructivelyAppendKitten(name){
 kittens.push(name);
 return kittens;
}
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyPrependKitten(name){
 kittens.unshift(name);
 return kittens;
}
function destructivelyRemoveLastKitten(){
 kittens.pop(name);
 return kittens;
}

function destructivelyRemoveFirstKitten(){
 kittens.shift();
 return kittens;
}
function appendKitten(name){
 return [...kittens, name];
}
function prependKitten(name){
 return [name, ...kittens];
}
function removeLastKitten(){
 return kittens.slice(0, kittens.length - 1);
}
function removeFirstKitten(){
 return kittens.slice(1);
}
