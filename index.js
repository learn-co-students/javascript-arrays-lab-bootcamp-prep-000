var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
const destructivelyAppendKitten = (name) => kittens.push(name);
const destructivelyPrependKitten = (name) => kittens.unshift(name);
const destructivelyRemoveLastKitten = () => kittens.pop();
const destructivelyRemoveFirstKitten = () => kittens.shift();
const appendKitten = (name) => kittens.concat(name); 
const prependKitten = (name) => [name, ...kittens];
const removeLastKitten = () => kittens.slice(0, kittens.length -1);
const removeFirstKitten = () => kittens.slice(1);