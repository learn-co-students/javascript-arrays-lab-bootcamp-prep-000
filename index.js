var kittens = ["Milo", "Otis", "Garfield"] ;//define your array here
  function destructivelyAppendKitten(name) {
    kittens.push(name);
  }
function destructivelyPrependKitten(name) {
  kittens.unshift(name);

}
function destructivelyRemoveLastKitten() {
  kittens.pop();

}
function appendKitten(name) {
return  kittens.concat(name);

}
 function destructivelyRemoveFirstKitten() {
   return kittens.shift();
}
function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten() {
  return kittens.slice(0,kittens.length -1);
}

function removeFirstKitten() {
  return kittens.slice(1)

}
