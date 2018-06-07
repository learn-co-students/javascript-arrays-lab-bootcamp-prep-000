const app = "I don't do much.";

function destructivelyAppendKitten (Ralph){
return (kittens.push(Ralph));
}

function destructivelyPrependKitten(Bob){
return (kittens.unshift(Bob));
}

function destructivelyRemoveLastKitten(){
return (kittens.pop());
}

function destructivelyRemoveFirstKitten(){
return (kittens.shift());
}

function appendKitten(broom){
return [...kittens, broom];
}

function prependKitten(max){
return [max, ...kittens];
}

function removeFirstKitten(){
return kittens.slice(1)
}

function removeLastKitten(){
return kittens.slice(0, kittens.length-1)
}