/*
Given an array of distinct integers, return all possible subsets.

Note: The solution set must not contain duplicate subsets. Order does not matter.

Example:

Input: [1,7,4]
Output:
[
 [ 1, 7, 4 ],
 [ 1, 7 ],
 [ 1, 4 ],
 [ 1 ],
 [ 7, 4 ],
 [ 7 ],
 [ 4 ],
 []
]
*/

const getAllSubsets = (nums) => {
  const results = [];
  let k;
  const generate = (comb = [], first = 0) => {
    if (comb.length === k) return results.push([...comb]);
    for (let i = first; i < nums.length; i++) {
      comb.push(nums[i]);
      generate(comb, i + 1);
      comb.pop();
    }
  };
  for (k = 0; k <= nums.length; k++) {
    generate();
  }
  return results;
};

const nums = [1, 7, 4];
console.log(getAllSubsets(nums));

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/*


Time Complexity:
 O(n * 2^n) - 2^n to generate all subsets (2^n since each element is either absent or present)
							in each recursive call, we are copying the combination into the output list which takes n time.


Space Complexity:
 O(n) - we use n space to store the current subset/combination on the callstack. this combination is modified in-place while backtracking.
Note that for space complexity, we do not count space that is only used for the purpose of returning the output. We are using n * 2^n space
to store the output, so we ignore this and only consider the additional space used to store each combination/the depth of the callstack.
Each combination's space is of size n, and at any given time in the backtracking process, the callstack has at most n function calls on it.
Thus O(n + n) -> O(2n) -> O(n) space

*/
