var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
  return kittens.push(name);
  }
function destructivelyPrependKitten(name){
  return kittens.unshift(name);
  }
function destructivelyRemoveLastKitten(){
  return kittens.pop();
  }
function destructivelyRemoveFirstKitten(){
  return kittens.shift();
  }
function appendKitten(name){
  var appKit = [...kittens, name];
  return appKit;
  }
function prependKitten(name){
  var prepKit = [name, ...kittens];
  return prepKit;
  }
function removeLastKitten(){
  return kittens.slice(0, kittens.length -1);
  }
function removeFirstKitten(){
  return kittens.slice(-2);
  }
