const rps = (x) => {
  const choices = ['rock', 'paper', 'scissors'];
  const results = [];
  const generate = (comb = [], first = 0) => {
    if (comb.length === x) return results.push([...comb]);
    for (let i = first; i < choices.length; i++) {
      comb.push(choices[i]);
      generate(comb, first);
      comb.pop();
    }
  };
  generate();
  return results;
};

console.log(rps(3));
/*
[
  [ 'rock', 'rock', 'rock' ],
  [ 'rock', 'rock', 'paper' ],
  [ 'rock', 'rock', 'scissors' ],
  [ 'rock', 'paper', 'rock' ],
  [ 'rock', 'paper', 'paper' ],
  [ 'rock', 'paper', 'scissors' ],
  [ 'rock', 'scissors', 'rock' ],
  [ 'rock', 'scissors', 'paper' ],
  [ 'rock', 'scissors', 'scissors' ],
  [ 'paper', 'rock', 'rock' ],
  [ 'paper', 'rock', 'paper' ],
  [ 'paper', 'rock', 'scissors' ],
  [ 'paper', 'paper', 'rock' ],
  [ 'paper', 'paper', 'paper' ],
  [ 'paper', 'paper', 'scissors' ],
  [ 'paper', 'scissors', 'rock' ],
  [ 'paper', 'scissors', 'paper' ],
  [ 'paper', 'scissors', 'scissors' ],
  [ 'scissors', 'rock', 'rock' ],
  [ 'scissors', 'rock', 'paper' ],
  [ 'scissors', 'rock', 'scissors' ],
  [ 'scissors', 'paper', 'rock' ],
  [ 'scissors', 'paper', 'paper' ],
  [ 'scissors', 'paper', 'scissors' ],
  [ 'scissors', 'scissors', 'rock' ],
  [ 'scissors', 'scissors', 'paper' ],
  [ 'scissors', 'scissors', 'scissors' ]
]
*/
