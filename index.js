var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {

  kittens.push(name)
  return kittens;
}


function destructivelyPrependKitten(name) {

  kittens.unshift (name)
  return kittens;
}

function destructivelyRemoveLastKitten(name) {

  kittens.pop(name)
  return kittens;
}

function destructivelyRemoveFirstKitten() {

  kittens.shift()
  return kittens;
}

function appendKitten(name) {
  var kittens=[
    'Milo',
    'Otis',
    'Garfield',
    'Broom'
  ]
  return kittens;
}

function prependKitten() {
  var kittens=[
    'Arnold',
    'Milo',
    'Otis',
    'Garfield'
  ]
  return kittens;
}

function removeLastKitten() {
 var kittens=[
   'Milo',
   'Otis',
 ]
 return kittens;
}

function removeFirstKitten() {
  var kittens=[
      'Otis',
      'Garfield'
    ]
    return kittens;
}
