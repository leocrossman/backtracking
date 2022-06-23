/*
Let's say you flipped a coin multiple times, resulting in a given number of heads and tails. Return an array of strings representing all possible histories given those numbers of heads and tails. The strings can be in any order.

 Example:

 htPermutations(2, 1) ->
 [
   'HHT',
   'HTH'
   'THH'
 ]

 htPermutations(0, 3) ->
 [
   'TTT'
 ]

*/
const htPermutations = (numHead, numTail) => {
  const results = [];
  const generate = (comb = '', h = numHead, t = numTail) => {
    if (h === 0 && t === 0) return results.push(comb);
    if (h > 0) generate(comb + 'H', h - 1, t);
    if (t > 0) generate(comb + 'T', h, t - 1);
  };
  generate();
  return results;
};

console.log(htPermutations(2, 1));
console.log(htPermutations(0, 3));
