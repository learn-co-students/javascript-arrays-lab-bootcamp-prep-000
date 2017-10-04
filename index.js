const app = "I don't do much.";

var kittens = ["Milo", "Otis", "Garfield"];

/* 
1. Declare a function named destructivelyAppendKitten.
2. Function accepts parameter named name, whose value is string.
3. When call function, return name to end of array.
*/
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

/* 
1. Declare a function named destructivelyPrependKitten(name).
2. Function accepts parameter named name, whose value is string.
3. When call function, return name to front of array.
*/
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

/* 
1. Declare a function named destructivelyRemoveLastKitten.
2. When call function, return array without last element.
*/
function destructivelyRemoveLastKitten() {
kittens.pop();
return kittens;
}

/* 
1. Declare a function named destructivelyRemoveFirstKitten.
2. When call function, return array without first element.
*/
function destructivelyRemoveFirstKitten() {
kittens.shift();
return kittens;
}

/* 
1. Declare a function named appendKitten.
2. Function accepts parameter named name, whose value is string.
3. When call function, return array with name added to the end of array.
*/
function appendKitten(name){
  var newArray = [...kittens, name];
  return newArray;
}

/* 
1. Declare a function named prependKitten.
2. Function accepts parameter named name, whose value is string.
3. When call function, return array with name added to the front of array.
*/
function prependKitten(name){
  var newArray = [name, ...kittens];
  return newArray;
}

/* 
1. Declare a function named RemoveLastKitten.
2. When call function, return new array without last element.
*/
function removeLastKitten(){
  var newArray = kittens.slice(0, kittens.length -1);
  return newArray;
}

/* 
1. Declare a function named RemoveFirstKitten.
2. When call function, return new array without first element.
*/
function removeFirstKitten(){
  var newArray = kittens.slice(1);
  return newArray;
}
