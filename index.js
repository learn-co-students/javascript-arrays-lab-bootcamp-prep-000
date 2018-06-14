const app = "I don't do much."

kittens = ['Milo', 'Otis', 'Garfield']
destructivelyAppendKitten(name){
  return kittens.push(name)
}
destructivelyPrependKitten(name){
  return kittens.unshift(name)
}
destructivelyRemoveLastKitten(){
   kittens.pop();
   return kittens;
}
destructivelyRemoveFirstKitten(){
   kittens.shift();
   return kittens;
}
appendKitten(name){
  return [...kittens, "name"]
}
prependKitten(name){
  return ["name",...kittens]
}
removeLastKitten(){
return kittens.slice(-1)  
}
removeFirstKitten(){
  return kittens.slice(1)
}






