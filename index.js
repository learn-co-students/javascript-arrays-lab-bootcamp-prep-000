const app = "I don't do much."
window.kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendKitten(name){
  window.kittens.push(`${name}`);
  return window.kittens;
}
window.kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyPrependKitten(name){
  window.kittens.unshift(`${name}`);
  return window.kittens;
}
window.kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyRemoveLastKitten(name){
  window.kittens.pop(`${name}`);
  return window.kittens;
}
window.kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyRemoveFirstKitten(name){
  window.kittens.shift();
  return window.kittens;
}
window.kittens = ['Milo', 'Otis', 'Garfield'];
function appendKitten(name){
  return [...window.kittens, `${name}`];
}
window.kittens = ['Milo', 'Otis', 'Garfield'];
function prependKitten(name){
  return [`${name}`, ...window.kittens];
}
window.kittens = ['Milo', 'Otis', 'Garfield'];
function removeLastKitten(name){
 return window.kittens.slice(0, window.kittens.length -1);

}
window.kittens = ['Milo', 'Otis', 'Garfield'];
function removeFirstKitten(name){
  return window.kittens.slice(1);
}
