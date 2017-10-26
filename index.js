const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(array, kitten) {


return array.push(kitten);

}


function destructivelyRemoveFirstKitten() {

  kittens = kittens.slice(1);


}


function destructivelyAppendKitten(name) {

  kittens.push(name);
}


function destructivelyPrependKitten(name) {

  kittens.unshift(name);

}


function destructivelyRemoveLastKitten() {

  return kittens.pop();
}


function appendKitten(name) {

 return [...kittens, name];
}


function prependKitten(name) {

  return [name, ...kittens];
}

function removeLastKitten() {

  return kittens.slice(0, kittens.length-1);
}


function removeFirstKitten() {

  return kittens.slice(1, kittens.length);
}
