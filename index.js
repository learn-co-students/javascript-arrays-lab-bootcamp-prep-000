const app = "I don't do much."

var kittens =['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
    kittens.push('Ralph');
}
function destructivelyPrependKitten(name){
    kittens.unshift(name);
}
function destructivelyRemoveLastKitten(){
    kittens.pop();
}
function destructivelyRemoveFirstKitten(){
    kittens.shift();
}
function appendKitten(name){
    var kitten = kittens;
    kitten = [...kittens, name];
    return kitten;
}
function prependKitten(name){
    var kitten = kittens;
    kitten= [name, ...kittens];
    return kitten;
}
function removeLastKitten(){
    var kitten = [...kittens];
    kitten.pop();
    return kitten;

}
function removeFirstKitten(){
    var kitten = [...kittens];
    kitten.shift();
    return kitten;

}
