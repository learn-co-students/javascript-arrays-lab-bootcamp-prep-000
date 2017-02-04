const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;

};

var kittens = ['Milo', 'Otis', 'Garfield' ];

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
};

var kittens = ['Milo', 'Otis', 'Garfield' ];

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens;
};

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return kittens;
};

var kittens = ['Milo', 'Otis', 'Garfield'];
var kittens2 = [];
function appendKitten(name) {
  kittens2 = [...kittens, name];
  return kittens2;
};

var kittens = ['Milo', 'Otis', 'Garfield'];
var kittens2 = [];

function prependKitten(name) {
  kittens2 = [name, ...kittens];
  return kittens2;
};

var kittens = ['Milo', 'Otis', 'Garfield'];
var kittens2 = [];

function removeLastKitten(name) {
  kittens2 = kittens.slice(0,2);
  return kittens2;

}

var kittens = ['Milo', 'Otis', 'Garfield'];
var kittens2 = [];

function removeFirstKitten(name) {
  kittens2 = kittens.slice(1);
  return kittens2;
}
