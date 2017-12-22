const app = "I don't do much."

const kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
return kittens.push(name);
}

function destructivelyPrependKitten(name){
return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
kittens.pop();
return kittens;
}

function destructivelyRemoveFirstKitten(){
kittens.shift();
return kittens;
}

function appendKitten(name){
let newKittens = [...kittens, name];
return newKittens;
}

function prependKitten(name){
let newKittens = [name, ...kittens];
return newKittens;
}

function removeLastKitten(){
return kittens.slice(0, -1);
}

function removeFirstKitten(){
return kittens.slice(1);
}
