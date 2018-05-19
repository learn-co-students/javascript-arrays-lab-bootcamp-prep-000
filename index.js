const app = "I don't do much."

kittens = ['Milo', 'Otis', 'Garfield'];

//pop(removes last and returns that element)
//push(adds to end and returns array new length)
//shift(removes first and returns that element)
//unshift(adds to beginning and returns array new length)
//slice(removes element by index # and returns copy of array with left over element(s), original not modified)
//splice(remove and adding elements)
//spread operator ...
//  console.log();

function destructivelyAppendKitten(element) {
  kittens.push(element);
}

//console.log(destructivelyAppendKitten(kittens));

function destructivelyPrependKitten(element) {
  //prepend adds to beginning
  kittens.unshift(element);
}

//console.log(destructivelyPrependKitten(kittens));

function destructivelyRemoveLastKitten() {
  kittens.pop();
}
//console.log(destructivelyRemoveLastKitten(kittens));

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}
//console.log(destructivelyRemoveFirstKittens(kittens));

/*
function appendKitten(array, element) {
  return [element, ...array];
}  */
//console.log(appendKitten(kittens, "Beau"));

function appendKitten(element) {
  return [...kittens, element];
}
//console.log(appendKittens(kittens, "Snowball"));


function prependKitten(element) {
  return [element, ...kittens];
}
//console.log(prependKitten(kittens, "Gracie"));

function removeLastKitten() {
  return (kittens.slice(0, kittens.length - 1))
}
//console.log(removeLastKitten(kittens));

function removeFirstKitten() {
 return (kittens.slice(1));
}
//console.log(removeFirstKitten(kittens));
