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
    return xa.slice(1);

}

function removeLastKitten() {
    var de = kittens
    return de.slice(0, de.length - 1)


  }
