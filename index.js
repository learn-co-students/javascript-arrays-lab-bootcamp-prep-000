const app = "I don't do much."
const kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  //kittens[3] = ('Ralph');
  console.log(kittens);
  return kittens;
}

destructivelyAppendKitten();

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  //kittens[3] = ('Ralph');
  console.log(kittens);
  return kittens;
}

destructivelyPrependKitten();

function destructivelyRemoveLastKitten() {
  kittens.pop();
  //kittens[3] = ('Ralph');
  console.log(kittens);
  return kittens;
}

destructivelyRemoveLastKitten();

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  //kittens[3] = ('Ralph');
  console.log(kittens);
  return kittens;
}

destructivelyRemoveFirstKitten();

function appendKitten(name) {
  var moreKittens = [...kittens, name];
  console.log(moreKittens);
  return moreKittens;
}

appendKitten();

function prependKitten(name) {
  var fewerKittens = [name, ...kittens];
  console.log(fewerKittens);
  return fewerKittens;
}

prependKitten();

function removeLastKitten(name) {
  var fewerKittens = kittens.slice(0, kittens.length - 1);
//  var fewerKittens = [name, ...kittens];
  console.log(fewerKittens);
  return fewerKittens;
}

removeLastKitten();

function removeFirstKitten(name) {
  var fewerKittens = kittens.slice(1);
  console.log(fewerKittens);
  return fewerKittens;
}

removeFirstKitten();
