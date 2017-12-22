const app = "I don't do much."
var kittens = [];

var destructivelyAppendKitten = (n) => kittens.push(n);
var destructivelyPrependKitten = (n) => kittens.unshift(n);
var destructivelyRemoveLastKitten = () => kittens.pop();
var destructivelyRemoveFirstKitten = () => kittens.shift();
var appendKitten = (n) => [...kittens, n];
var prependKitten = (n) => [n, ...kittens];
var removeLastKitten = () => kittens.slice(0, kittens.length - 1);
var removeFirstKitten = () => kittens.slice(1);
