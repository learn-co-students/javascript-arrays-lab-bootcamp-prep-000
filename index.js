var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here

function destructivelyAppendKitten(array) {
  kittens.push("Ralph");
  console.log(kittens);
}

function destructivelyPrependKitten(prepend) {
  kittens.unshift("Bob");
  console.log(kittens);
}

function destructivelyRemoveLastKitten(remove) {
  kittens.pop();
  console.log(kittens);
}

function destructivelyRemoveFirstKitten(removefirst) {
  kittens.shift();
  console.log(kittens);
}

function appendKitten(concat) {
  var concat1 = ["Broom"];
  var newArray = kittens.concat(concat1);
  return(newArray);
}

function prependKitten(concat) {
  var concat1 = ["Arnold"];
  return(concat1.concat(kittens));
}

function removeLastKitten(slice) {
  return(kittens.slice(-0, -1));
}

function removeFirstKitten(slice) {
  return(kittens.slice(1));
}