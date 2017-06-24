const app = "I don't do much."

function kittens(){
  var kittens = ["Milo", "Otis", "Garfield"]
};
function destructivelyAppendKitten(){
  kittens.push("Ralph");
};

function destructivelyPrependKitten(){
  kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
};

function destructivelyRemoveFirstKitten(){
  kittens.shift();
};

function appendKitten(name){
  var newArr = [...kittens, name];
  return newArr;
};

function prependKitten(name){
  var preArr = [name, ...kittens];
  return preArr;
};

function removeLastKitten(){
  var myArr = kittens.slice(0, kittens.length-1);
  return myArr;
}

function removeFirstKitten(){
  var cArr = kittens.slice(1, kittens.length);
  return cArr;
};
