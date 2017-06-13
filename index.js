const app = "I don't do much."


//function Arrays() {
  var kittens = ['Milo', 'Otis', 'Garfield']

//}
///function kittens() {
//var kittens = ["Milo", "Otis", "Garfield"]
//}

function destructivelyAppendKitten(a) {
  kittens.push(a)
  return(kittens)
}

function destructivelyPrependKitten(b) {
  kittens.unshift(b)
  return(kittens)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return(kittens)
}

function destructivelyRemoveFirstKitten()
{kittens.shift()
  return(kittens)
}

function appendKitten(d) {
  return([...kittens, d])
}

function prependKitten(e) {
  return([e, ...kittens])
}

function removeLastKitten() {
  return(kittens.slice(0, kittens.length - 1))
  //return(kittens1)
}

function removeFirstKitten() {
  return(kittens.slice(1))
  //return(kittens2)
}
