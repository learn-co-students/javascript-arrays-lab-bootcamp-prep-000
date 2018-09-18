const app = "I don't do much."
const kittens =["Milo","Otis","Garfield"]


function destructivelyAppendKitten(name){

  return kittens.push(name)
  
}

function destructivelyPrependKitten(name){

  return kittens.shift(name)
  
}
