var kittens = ["Milo","Otis","Garfield"]; //define your array here

// Add your functions and code here

// destructively adding elements to the end .push() and to the beginning .unshift()

function destructivelyAppendKitten(name){
  kittens.push("Ralph");
  return kittens;
  
}
function destructivelyPrependKitten(name){
  kittens.unshift("Bob");
  return kittens;
}

//destructively removing elements from the end .pop() and from the beginning .shift()

function destructivelyRemoveLastKitten(name){
  kittens.pop("Garfield");
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(kittens[0]); //you can remove the element by index number or as yuo did before with the name of the element
  return kittens;
}

//append a kitten to the kittens array and return a new kittens array leaving the kitten array unchanged

function appendKitten(name){
  var kitten= [...kittens,name];
  return kitten;
}

//prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
function prependKitten(name){
  var kitten=[name,...kittens];
  return kitten;
}

//removing indexes from array without changing the existing array
//The slice() method returns the selected elements in an array, as a new array object 
//for example kittens.slice(1,2); it starts from index 1 ( include until index 2 not include);

function removeLastKitten(){
  var kitten= kittens.slice(0, kittens.length-1);
  return kitten;
}

function removeFirstKitten(){
  var kitten=kittens.slice(1);    //if start is omitted it acts like "0". like in this case, i didnt indicate the starting point, just where to stop  (1)
  return kitten;
}
