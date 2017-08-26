const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
    kittens.push(name);
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
    var newarray = [...kittens, name];
    return newarray;
}

function prependKitten(name){
    var newarray = [name, ...kittens];
    return newarray;
}

function removeLastKitten(){
   var newarray = kittens.slice(0,kittens.length - 1);
   return newarray;
}

function removeFirstKitten(){
  var newarray = kittens.slice(1);
  return newarray;
}
