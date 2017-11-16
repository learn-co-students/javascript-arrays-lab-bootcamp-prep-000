const app = "I don't do much."

function destructivelyPrependKitten(name) {
      kittens.unshift(name)
      return kittens
}


function destructivelyRemoveLastKitten() {
      kittens.pop()
      return kittens
}

function destructivelyAppendKitten(name) {
    kittens.push(name)
    return kittens
}

function destructivelyRemoveFirstKitten() {
      kittens.shift()
      return kittens
}

function appendKitten(name) {
    var xd =  [...kittens, name]
      return xd
}

function prependKitten(name) {
  var xd =  [name, ...kittens]
    return xd
}






function removeFirstKitten() {
      var xa = kittens;
        xa.shift();

      return xa;
}

function removeLastKitten() {
      var xe = kittens;
        xe.pop();

      return xe;
}
