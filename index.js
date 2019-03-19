var kittens = ['Milo','Otis','Garfield'] //define your array here

// Add your functions and code here

var appendKitten = (name) => [...kittens,name];
var prependKitten = (name) => [name,...kittens];
var removeFirstKitten = () => kittens.slice(1);
var removeLastKitten = () => kittens.slice(0,kittens.length-1);

var destructivelyAppendKitten = (name) => kittens.push(name);
var destructivelyPrependKitten = (name) => kittens.unshift(name);
var destructivelyRemoveFirstKitten = () => kittens.shift();
var destructivelyRemoveLastKitten = () => kittens.pop();

