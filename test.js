var kittens = ["Milo","Otis","Garfield"]

function appendKitten(name) {
  moreKittens = [...kittens, name]
  return moreKittens
}

console.log(appendKitten("Broom"))
console.log(kittens)
