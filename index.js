const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name){
  return kittens.unshift();
}
function destructivelyAppendKitten(name){
    return kittens.push();
}
function  destructivelyRemoveLastKitten(name){
    return kittens.pop();
}
function destructivelyRemoveFirstKitten(name){
    return kittens.shift();
}
funtion prependKitten(name){
   return [kittens,...name]
}
