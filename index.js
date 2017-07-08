const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift(1);
}

function appendKitten(name) {
   return [...kittens,name];
}

function prependKitten(name) {
  return [name,...kittens];
}

function removeLastKitten() {
  var ans = [...kittens];
  ans.pop();
  return ans;
}

function removeFirstKitten() {
  var ans = [...kittens];
  ans.shift(1);
  return ans;
}
