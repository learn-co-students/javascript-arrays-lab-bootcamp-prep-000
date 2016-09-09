const app = "I don't do much."

function kittens (){
kittens = ["Milo", "Otis", "Garfield"];
kittens
}

function destructivelyAppendKitten(name) {
kittens.push(`${name}`);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(`${name}`);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var name = [...kittens, `${name}`]
  return name
}

function prependKitten(name) {
  var name = [`${name}`, ...kittens]
  return name
}

function removeLastKitten() {
 var name = kittens.slice(0, kittens.length-1);
  return name;
}

function removeFirstKitten() {
  var name = kittens.slice(1);
  return name 
}
