const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return kittens
}

function appendKitten(name) {
  var morekittens = [...kittens, name];
  return morekittens
  }
  
function prependKitten(name) {
  var morekittens = [name, ...kittens];
  return morekittens
  }
  
//above are good

  function removeLastKitten(name) {
    const kittens = ["Milo", "Otis", "Garfield"]
    kittens.pop();
    var lessKittens = kittens;
    return lessKittens;
  }
  
    function removeFirstKitten(name) {
   var lessKittens = kittens.slice(1)
    return lessKittens;
  }