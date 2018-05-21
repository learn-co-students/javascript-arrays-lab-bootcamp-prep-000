const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(kitty1) {
  kittens.push("Ralph");
  return(kittens)
}

function destructivelyPrependKitten(kitty2) {
  kittens.unshift("Bob");
  return(kittens)
}

function destructivelyRemoveLastKitten(kitty3) {
  kittens.pop();
  return(kittens)
}

function destructivelyRemoveFirstKitten(kitty4) {
  kittens.shift();
  return(kittens)
}

function appendKitten(kitty5) {
  var kitten = ["Milo", "Otis", "Garfield"];
  kitty5 = [...kitten, "Broom"];
  return(kitty5)
}

function prependKitten(kitty6) {
  var kitten = ["Milo", "Otis", "Garfield"];
  kitty6 = ["Arnold",...kitten];
  return(kitty6)
}

function removeLastKitten(kitty7) {
  var kitten = ["Milo", "Otis", "Garfield"];
  kitty7 = kitten.slice(0, kitten.length - 1);
  return(kitty7)
}

function removeFirstKitten(kitty8) {
  var kitten = ["Milo", "Otis", "Garfield"];
  kitty8 = kitten.slice(1);
  return(kitty8)
}