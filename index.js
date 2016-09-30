const app = "I don't do much."


var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
kittens.push(name);
return kittens;
}

function destructivelyPrependKitten(name) {
kittens.unshift(name);
return kittens;
}
function destructivelyRemoveLastKitten() {
return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
return kittens.shift();
}

function appendKitten(name) {
const moreKittens = [...kittens, name];
return moreKittens;
}

function prependKitten(name) {
const preKittens = [name, ...kittens]
return preKittens;
}

function removeLastKitten() {
const lessKittens = kittens.slice(0, kittens.length - 1);
return lessKittens;
}

function removeFirstKitten() {
const evenLessKittens = kittens.slice(1);
return evenLessKittens;
}
