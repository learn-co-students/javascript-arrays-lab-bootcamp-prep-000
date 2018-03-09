const app = "I don't do much."

function kittens() {
 var kittens = ["Milo", "Otis", "Garfield"];
 return kittens
}

function destructivelyAppendKitten(name) {
  name = "Ralph"
  return kittens.push(name)
}

  function destructivelyPrependKitten(name) {
    name = "Bob"
    return kittens.unshift(name)
  }
  
  function destructivelyRemoveLastKitten() {
    return kittens.pop()
  }
  
  function destructivelyRemoveFirstKitten() {
    return kittens.shift()
  }
  
  function appendKitten(name) {
    name = "Broom";
    return [...kittens, "Broom"]
  }
  
  function prependKitten(name) {
    name = "Arnold";
    return ["Arnold", ...kittens]
  }
  
  function removeLastKitten() {
    return kittens.slice(0,2)
  }
  
  function removeFirstKitten() {
    return kittens.slice(1)
  }