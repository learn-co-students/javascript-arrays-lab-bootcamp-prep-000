const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];


function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var answer = [];
  answer = [...kittens];
  answer.push(name);
  return answer;
}

function prependKitten(name) {
  var answer = [];
  answer = [...kittens];
  answer.unshift(name);
  return answer;
}

function removeLastKitten() {
  var answer = [];
  answer = [...kittens];
  answer.pop();
  return answer;
}

function removeFirstKitten() {
  var answer = [];
  answer = [...kittens];
  answer.shift();
  return answer;
}
