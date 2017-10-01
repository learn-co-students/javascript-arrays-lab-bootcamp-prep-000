const app = "I don't do much.";
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
};
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
};
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
};
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
};

function appendKitten(name){
  var arrayKitten=kittens.slice(0);
  arrayKitten.push(name);
  return arrayKitten;
};
function prependKitten(name){
  var arrayKitten=kittens.slice(0);
  arrayKitten.unshift(name);
  return arrayKitten;
};
function removeLastKitten(){
  var arrayKitten=kittens.slice(0);
  arrayKitten.pop();
  return arrayKitten;
};
function removeFirstKitten(){
  var arrayKitten=kittens.slice(0);
  arrayKitten.shift();
  return arrayKitten;
};
