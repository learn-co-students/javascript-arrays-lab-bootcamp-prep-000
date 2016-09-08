const app = "I don't do much."


var destructivelyAppendKitten = function(name){
    return kittens.push(name);
}

var destructivelyPrependKitten = function(name) {
  return kittens.unshift(name);
}

var destructivelyRemoveLastKitten = function() {
  return kittens.pop();
}

var destructivelyRemoveFirstKitten = function() {
  return kittens.shift();
}

var appendKitten = function(name) {
   return [...kittens, name];
}

var prependKitten = function(name) {
  return [name, ...kittens];
}

var removeLastKitten = function() {
  return  kittens.slice(0, kittens.length - 1);
}

var removeFirstKitten = function() {
  var app = [];
  app =  kittens.slice(1);
  return app;
}
