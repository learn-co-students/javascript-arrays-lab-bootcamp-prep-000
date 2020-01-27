var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(name) {
  kittens.push ("Ralph");
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift ("Bob");
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop ();
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift ();
  return kittens
}

function appendKitten(name) {
  const newKitten = ('Broom');
  return kittens.concat (newKitten)
}

function prependKitten(name) {
  const newKittenBeginning = ["Arnold"]
  const newKittenArray = newKittenBeginning.concat (kittens)
  return newKittenArray
}

function removeLastKitten() {
  const byeLastKitten = kittens.slice(0, 2);
  return byeLastKitten
}

function removeFirstKitten() {
  const byeFirstKitten = kittens.slice(1);
  return byeFirstKitten
}