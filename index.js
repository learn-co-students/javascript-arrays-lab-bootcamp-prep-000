const app = "I don't do much."


var kittens = ["Milo", "Otis", "Garfield"];
var name = name;
var myKittens = kittens;

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens };

function destructivelyPrependKitten(name)  {
  kittens.unshift(name)
  return kittens };

  function destructivelyRemoveFirstKitten() {
    kittens.shift();
    return kittens  }

    function destructivelyRemoveLastKitten() {
      kittens.pop();
      return kittens}

function appendKitten(name) {
  return [...kittens, name] }

  function prependKitten(name) {
    return [name, ...kittens] }


    function removeFirstKitten() {
        myKittens = kittens;
        return myKittens.slice(1)  }

    function removeLastKitten() {
      myKittens = kittens;
      return myKittens.slice(0, myKittens.length - 1)   }

//
