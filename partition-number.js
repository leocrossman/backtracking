/*
 You are given a positive integer target.

 Return an array of all arrays of ordered (ascending) positive integers that sum up to the target.

 The arrays can be provided in any order.

 Example:

 partitionNumber(2) ->
 [
   [1, 1],
   [2]
 ]

 partitionNumber(3) ->
 [
   [1, 1, 1],
   [1, 2],
   [3]
 ]

 The inner arrays must have ascending numbers, but can be provided in any order.
*/

const partitionNumber = (n) => {
  const results = [];
  const generate = (comb = [], num = 1, target = n) => {
    if (target === 0) return results.push([...comb]);
    if (target < num) return;

    generate([...comb, num], num, target - num);
    generate([...comb], num + 1, target);
  };
  generate();
  return results;
};

console.log(partitionNumber(3));
