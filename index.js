const app = "I don't do much."

//var kittens = new array[];

var kittens = ["Milo", "Otis", "Garfield"]
var destructivelyAppendKitten=(element)=>{
  kittens.push(element);
  //return kittens;
}

var destructivelyPrependKitten = (element)=>{
  kittens.unshift(element);
}

var destructivelyRemoveLastKitten = (element)=>{
  kittens.pop();
}

var destructivelyRemoveFirstKitten = (element)=>{
  kittens.shift();
}

var appendKitten = (element)=>{
  return  [...kittens,element];
  //return kittens;
}

var prependKitten = (element)=>{
  return [element,...kittens]
//  return kittens;
}

var removeLastKitten = (element)=>{
  return kittens.slice(0,kittens.length-1);
}

var removeFirstKitten = (element)=>{
  return kittens.slice(1);
  //return kittens;
}
