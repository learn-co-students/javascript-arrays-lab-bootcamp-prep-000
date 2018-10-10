var kittens = ['Milo', 'Otis', 'Garfield'];
console.log(kittens)

function destructivelyAppendKitten(name) {
      kittens = ['Milo', 'Otis', 'Garfield'];
      return kittens.push('Ralph')
    }
    
function destructivelyPrependKitten(name) {
    kittens = ['Milo', 'Otis', 'Garfield'];
     return kittens.unshift('Bob')
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
    return kittens.shift()
  }
function appendKitten(name) {
  return kittens.concat('Broom')
}
var prependKitten
function prependKitten(name) {
kittens = ['Milo', 'Otis', 'Garfield'];
prependKitten === kittens.unshift('Arnold')
return
  }
  function removeLastKitten() {
    kittens = ['Milo', 'Otis', 'Garfield'];
    var removeLastKitten = kittens.slice(2)
    console.log(kittens.slice(2));
  }
  
function removeFirstKitten() {
  kittens = ['Milo', 'Otis', 'Garfield'];
  console.log(kittens.slice(0));
}
