var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
};

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
};

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
};

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
};

function appendKitten(name) {
  var otherKittens = [];
  kittens.forEach(function(el) {
    otherKittens.push(el);
  });
  otherKittens.push(name);
  return otherKittens;
};

function prependKitten(name) {
  var otherKittens = [];
  otherKittens.unshift(name);
  kittens.forEach(function(el) {
    otherKittens.push(el);
  });
  return otherKittens;
};

function removeLastKitten() {
  var filterOffLast = function(el, index, array) {
    if(index !== (array.length - 1)) {
      return el;
    }
  };
  var otherKittens = kittens.filter(filterOffLast);
  return otherKittens;
};

function removeFirstKitten() {
  var filterOffFirst = function(el, index, array) {
    if(index !== 0){
      return el;
    }
  };
  var otherKittens = kittens.filter(filterOffFirst);
  return kittens.filter(filterOffFirst);
};
