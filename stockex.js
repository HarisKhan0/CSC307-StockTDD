function createstocks() 
{
  const array = [];
  return array;
}

function addstocks(arr, tkr, num)
{
  arr[tkr] = num;
  return arr;
}

function isEmpty (arra) {
  if (arra.length > 0)
    return false;
  else
    return true;
}

function uniqueTicker(arr) {
  return Object.keys(arr).length;
}

function purchaseStock(arr, tkr, amt) {
  arr[tkr] += amt;
  return arr;
}

function sellStock(arr, tkr, amt) {
  if (amt <= arr[tkr])
  {
    arr[tkr] -= amt;
    return arr;
  }
  else
    throw new Error('Not enough stock to sell that amount!');
}

function existingStocks (arr, tkr) {
  return arr[tkr];
}

function removeUnowned (arr) {
  return Object.entries(arr).reduce((a,[k,v]) => (v ? (a[k]=v, a) : a), {}); //Found online
}

exports.createstocks = createstocks;
exports.addstocks = addstocks;
exports.isEmpty = isEmpty;
exports.uniqueTicker = uniqueTicker;
exports.purchaseStock = purchaseStock;
exports.sellStock = sellStock;
exports.existingStocks = existingStocks;
exports.removeUnowned = removeUnowned;
