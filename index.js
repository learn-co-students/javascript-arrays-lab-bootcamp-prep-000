const app = "I don't do much."

kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten (name){

  return kittens.push(name);
}

function destructivelyPrependKitten (name){
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten (){
  return kittens.pop();
}

function destructivelyRemoveFirstKitten (){
  return kittens.shift();
}

function appendKitten (name){
  var newArray = [...kittens, name];
  return newArray
}

function prependKitten (name){
  var newArray = [name, ...kittens];
  return newArray
}

function removeLastKitten (){
  var newArray = kittens;
  return newArray.slice(0, kittens.length -1)
}

function removeFirstKitten (){
  var newArray = kittens;
  return newArray.slice(1); 

}
