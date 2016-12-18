const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

const kittensConst = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  kittens = [...kittens, name];

}

function destructivelyPrependKitten(name) {
  kittens = [name, ...kittens];

}

function destructivelyRemoveLastKitten(name) {
  kittens = kittens.splice(0,kittens.length-1);
}

function destructivelyRemoveFirstKitten(name) {
  kittens = kittens.slice(1);
}

function appendKitten(name) {
  const kittensNew = [...kittens, name];
  return kittensNew;
}

function prependKitten(name) {
  const kittensNew = [name, ...kittens];
  return kittensNew;
}

function removeLastKitten(name) {
  const kittensNew = kittensConst.splice(0,kittensConst.length-1);
  return kittensNew;
}

function removeFirstKitten(name) {
  const kittensNew = kittens.slice(1);
  return kittensNew;
}
