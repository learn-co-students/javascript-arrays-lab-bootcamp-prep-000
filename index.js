const app = "I don't do much."

function destructivelyAppendKitten(name)
{
  var array = new Array();
  array = kittens.push(name)
  return array
}

function destructivelyRemoveLastKitten()
{
  var array = new Array();
  array = kittens.pop()
  return array
}

function destructivelyPrependKitten(name)
{
  var array = new Array();
  array = kittens.unshift(name)
  return array
}

function destructivelyRemoveFirstKitten()
{
  var array = new Array();
  array = kittens.shift()
  return array
}

function appendKitten(name)
{
  var array = [];//kittens;
  kittens.forEach(function(item)
  {
    array.push(item);
  });
  /*The same:
  for( var i = 0; i < kittens.length; i++ )
  {
    array.push(kitten[i]);
  }*/
  array.push(name);
  return array
}

function prependKitten(name)
{
  var array = [];
  kittens.forEach(function(item)
  {
    array.push(item);
  });
  array.unshift(name)
  return array
}

function removeLastKitten()
{
  var array = [];
  kittens.forEach(function(item)
  {
    array.push(item);
  })
  array.pop()
  return array
}

function removeFirstKitten()
{
  var array = [];
  kittens.forEach(function(item)
  {
    array.push(item);
  })
  array.shift()
  return array
}
