const app = "I don't do much."
function destructivelyAppendKitten(name){
kittens.push(name);
return kittens;
}

function destructivelyPrependKitten(name){
kittens.unshift(name);
return kittens;
}

function destructivelyRemoveLastKitten(){
kittens.pop();
return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  var moreKittens=[...kittens]
  moreKittens.push(name)
  return moreKittens

}

function prependKitten(name){
var moreKittens=[...kittens]
moreKittens.unshift(name);
return moreKittens;
}

function removeLastKitten(){
  var lessKittens=[...kittens]
  lessKittens.pop();
  return lessKittens;
}

function removeFirstKitten(){
  var lessKittens=[...kittens]
  lessKittens.shift();
  return lessKittens;
}
