module.exports = function getZerosCount(number) {
  var res = 0;
  for(var i = 5; i <= number; i*=5)
  {
    res += Math.floor(number / i);
  }
  return res;
  // your implementation
}
