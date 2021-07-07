var kittens = [] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}


function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  // var howLong = kittens.length
  // console.log(howLong)
  // var moreKittens = kittens.splice(2, 0, "name")
  // return moreKittens;
  console.log(kittens)
  var more = [name];
  var moreKittens = kittens.concat(more);
  return moreKittens
  console.log(more)
}

function prependKitten(name) {
//  var moreKittens = kittens.splice(0, 0, "name");
  var moreKittens = [name, ...kittens]
  return moreKittens;
}

function removeFirstKitten() {
  var oneLess = kittens.slice(1);
  return oneLess
}

function removeLastKitten() {
  var oneLess = kittens.slice(0, kittens.length -1);
  return oneLess
}
