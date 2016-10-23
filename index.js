var kittens = ["Milo" , "Otis" , "Garfield" ];

function destructivelyAppendKitten (name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten (name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten (name) {
  var len = kittens.length;
  kittens.pop(len-1);
  return kittens;
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(0);
  return kittens;
}

function appendKitten (name) {
  var newKittenArray = [...kittens, name];
  return newKittenArray;
}

function prependKitten (name) {
  var newKittenArray2 = [name,...kittens];
  return newKittenArray2;
}

function removeLastKitten() {
  var len2 = kittens.length;
  var newKittenArray3 = [...kittens];
  newKittenArray3.pop(len2-1);
  return newKittenArray3;
}

function removeFirstKitten() {
  var newKittenArray4 = [...kittens];
  newKittenArray4.shift();
  return newKittenArray4
}
