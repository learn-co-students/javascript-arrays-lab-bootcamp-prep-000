const app = "I don't do much."

var kittens = [
    'Milo',            
    'Otis', 
    'Garfield']


function destructivelyAppendKitten(name){
    kittens.push(name)
    return kittens
}

function destructivelyPrependKitten(name){
    kittens.unshift(name)
    return kittens
}

function destructivelyRemoveLastKitten(name){
    kittens.pop(name)
    return kittens
}

function destructivelyRemoveFirstKitten(name){
    kittens.shift(name)
    return kittens
}

function appendKitten(name){
    kittens 
    return [...kittens, name]
    return kittens
    
    //function outerFunction() {
    //var innerVariable = "I'm sort of a secret.";
 
    //return function innerScope() {
    //var inaccessible = "Nothing can touch me.";
 
    //return innerVariable;
  //}
//}
    
}

function prependKitten(name){
    //kittens = [name, ...kittens]
    //return kittens
    kittens 
    return [name, ...kittens]
    return kittens
}

function removeLastKitten(){
    kittens
    //kittens = kittens.slice(2)
    //kittens = kittens.pop() 
    return kittens.slice(0, kittens.length - 1)
    return kittens
}

function removeFirstKitten(name){
    kittens
    return kittens.slice(1)
    return kittens
}
  




