const app = "I don't do much.";



function destructivelyAppendKitten(name) {
    //var newarray;
//    var kittens = ["Milo", "Otis", "Garfield"];
    kittens.push(name);
    return kittens;
  }

function destructivelyPrependKitten(name) {
    kittens.unshift(name);
    return kittens;
}

function destructivelyRemoveLastKitten() {
    kittens.pop();
    return kittens;
}

function destructivelyRemoveFirstKitten(){
    kittens.shift();
    return kittens;
}

function appendKitten(name) {
    var newarray;
    newarray = [...kittens, name];
    return newarray;
}

function prependKitten(name) {
    var newarray;
    newarray = [name, ...kittens];
    return newarray;
}

function removeLastKitten() {
    var newarray;
    newarray = kittens.slice(0,kittens.length -1);
    return newarray;
}

function removeFirstKitten() {
  var newarray;
  newarray = kittens.slice(1);
  return newarray;
}
