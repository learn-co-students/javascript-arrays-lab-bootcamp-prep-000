const app = "I don't do much."

var kittens = ["Milo",
                "Otis",
                "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  kittens = [...kittens, name];
  return kittens;
}
/* appends a kitten to the kittens array and return
s a new array, leaving the kittens array unchanged:

      Error: Expected [ 'Milo', 'Otis', 'Garfield', 'Broom' ] to equal [ 'Milo'
, 'Otis', 'Garfield' ]
      + expected - actual

       [
         "Milo"
         "Otis"
         "Garfield"
      -  "Broom"
    ]                   */
function prependKitten(name) {
  return kittens = [name,...kittens];
}
/* prepends a kitten to the kittens array and retu
rns a new array, leaving the kittens array unchanged:

      Error: Expected [ 'Arnold', 'Milo', 'Otis', 'Garfield' ] to equal [ 'Milo
', 'Otis', 'Garfield' ]
      + expected - actual

       [
      -  "Arnold"
         "Milo"
         "Otis"
         "Garfield"
       ]                        */

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten() {
  kittens = kittens.slice(1);
  return kittens;
}
/* removes the first kitten from the kittens array
 and returns a new array, leaving the kittens array unchanged:

      Error: Expected [ 'Otis', 'Garfield' ] to equal [ 'Milo', 'Otis', 'Garfie
ld' ]
      + expected - actual

       [
      +  "Milo"
         "Otis"
         "Garfield"
       ]     */
