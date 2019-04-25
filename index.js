var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  var name = "Ralph"
  return kittens.push(name)
};

function destructivelyPrependKitten(name) {
  var name = "Bob"
  return kittens.unshift(name)
};

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
};

function appendKitten(name) {
  var name = "Broom"
  return kittens.concat(name)
};

function prependKitten(name) {
  var name = "Arnold"
  var newKittens = [name, ...kittens]
  return newKittens
  };

  function removeLastKitten() {
    var newKittens = kittens.slice(0, kittens.length - 1)
    return newKittens
  };

  function removeFirstKitten() {
    var newKittens = kittens.slice(1)
    return newKittens    
  };
