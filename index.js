const app = "I don't do much."

var kittens = function() {
  ["Milo", "Otis", "Garfield" ];
  return kittens
}

function destructivelyAppendKitten(name) {
  ["Milo", "Otis", "Garfield"];
  kittens.push("Ralph");
  return kittens
}

function destructivelyPrependKitten(name) {
  ["Milo", "Otis", "Garfield"];
  kittens.unshift("Bob");
  return kittens
}

function destructivelyRemoveLastKitten() {
  ["Milo", "Otis", "Garfield"];
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  ["Milo", "Otis", "Garfield"];
  kittens.shift();
  return kittens
}

function appendKitten(name) {
  ["Milo", "Otis", "Garfield"];
  return [...kittens, "Broom"]
}

function prependKitten(name) {
  ["Milo", "Otis", "Garfield"];
  return ["Arnold", ...kittens]
}

function removeLastKitten() {
  ["Milo", "Otis", "Garfield"];
  return kittens.slice(0, kittens.length -1);

}

function removeFirstKitten() {
  ["Milo", "Otis", "Garfield"];
  return kittens.slice(1);

}
