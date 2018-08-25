// Add your functions and code here

function destructivelyAppendKitten(name){
  return kittens.push(name);
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

function appendKitten(name){
  return kittens.concat([name]);
}

function prependKitten(name) {
  return [name].concat(kittens);
}

function removeLastKitten(){
  return kittens.slice(0,kittens.length-1);
}

function removeFirstKitten(){
  return kittens.slice(1);
}


// 1) Arrays appendKitten(name) appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged:

//       Error: Expected [] to equal [ 'Milo', 'Otis', 'Garfield', 'Broom' ]
//       + expected - actual

//       -[]
//       +[
//       +  "Milo"
//       +  "Otis"
//       +  "Garfield"
//       +  "Broom"
//       +]

//       at assert (node_modules/expect/lib/assert.js:29:9)
//       at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
//       at Context.<anonymous> (test/index-test.js:45:37)

//   2) Arrays prependKitten(name) prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged:

//       Error: Expected [] to equal [ 'Arnold', 'Milo', 'Otis', 'Garfield' ]
//       + expected - actual

//       -[]
//       +[
//       +  "Arnold"
//       +  "Milo"
//       +  "Otis"
//       +  "Garfield"
//       +]

//       at assert (node_modules/expect/lib/assert.js:29:9)
//       at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
//       at Context.<anonymous> (test/index-test.js:53:39)

//   3) Arrays removeLastKitten() removes the last kitten in the kittens array andreturns a new array, leaving the kittens array unchanged:

//       Error: Expected [ 'Garfield' ] to equal [ 'Milo', 'Otis', 'Garfield' ]
//       + expected - actual

//       [
//       +  "Milo"
//       +  "Otis"
//         "Garfield"
//       ]

//       at assert (node_modules/expect/lib/assert.js:29:9)
//       at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
//       at Context.<anonymous> (test/index-test.js:63:30)

//   4) Arrays removeFirstKitten() removes the first kitten from the kittens arrayand returns a new array, leaving the kittens array unchanged:

//       Error: Expected [ 'Milo' ] to equal [ 'Milo', 'Otis', 'Garfield' ]
//       + expected - actual

//       [
//         "Milo"
//       +  "Otis"
//       +  "Garfield"
//       ]

//       at assert (node_modules/expect/lib/assert.js:29:9)
//       at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
//       at Co
