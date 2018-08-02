function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  let newArray = [];
  for (let i = 0; i < kittens.length; i++) {
    newArray.push(kittens[i]);
  }
  newArray.push(name);
  return newArray;
}

function prependKitten(name) {
  let newArray = [];
  for (let i = 0; i < kittens.length; i++) {
    newArray.push(kittens[i]);
  }
  newArray.unshift(name);
  return newArray;
}

function removeLastKitten() {
  let newArray = [];
  for (let i = 0; i < kittens.length; i++) {
    newArray.push(kittens[i]);
  }
  newArray.pop();
  return newArray;
}

function removeFirstKitten() {
  let newArray = [];
  for (let i = 0; i < kittens.length; i++) {
    newArray.push(kittens[i]);
  }
  newArray.shift();
  return newArray;
}