// the definition of kittens
var kittens = [
  'Milo',
  'Otis',
  'Garfield'
];

// my functions, with error handling
function destructivelyAppendKitten(name)
{
  var result = false;
  try
  {
    kittens.push(name);
    result = kittens;
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result;
  }
}

function destructivelyPrependKitten(name)
{
  var result = false;
  try
  {
    kittens.unshift(name);
    result = kittens;
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result;
  }
}

function destructivelyRemoveLastKitten()
{
  var result = false;
  try
  {
    kittens.pop();
    result = kittens;
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result;
  }
}

function destructivelyRemoveFirstKitten()
{
  var result = false;
  try
  {
    kittens.shift();
    result = kittens;
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result;
  }
}

function appendKitten(name)
{
  var result = false;
  try
  {
    result = [...kittens, name];
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result;
  }
}

function prependKitten(name)
{
  var result = false;
  try
  {
    result = [name, ...kittens];
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result;
  }
}

function removeLastKitten()
{
  var result = false;
  try
  {
    result = kittens.slice(0, kittens.length - 1);
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result;
  }
}

function removeFirstKitten()
{
  var result = false;
  try
  {
    result = kittens.slice(1);
  } catch(e)
  {
    console.log('ERROR: ' + e);
  } finally
  {
    return result;
  }
}
