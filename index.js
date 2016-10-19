const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
    return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
    return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
    return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
    return kittens
}

function appendKitten(name){
  const morekittens = [ ...kittens, name]
    return morekittens
}

function prependKitten(name){
  const onemorekitten = [name, ...kittens]
    return onemorekitten
}

function removeLastKitten(){
  const byelastkitten = kittens.slice(0, kittens.length - 1)
    return byelastkitten
}

function removeFirstKitten(){
  const byefirstkitten = kittens.slice(1)
    return byefirstkitten
}
