/*
The function below allows user to pass a string or number for 2 different values.
The signature for this function is currently broken and allows the user to mix the submission
so they can send a string & and number combined which should not be allowed / throw an error.
Please update the function to only function when 2 strings or 2 integers are passed in
*/

const f = (a: string | number, b: string | number) => {
  if (typeof a === 'string' && typeof b === 'string') {
    return a + ':' + b;
  } else if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  return 'Please input only 2 strings or 2 integers';
};

console.log(f(2, 3)); // 5
console.log(f(1, 'a')); // should be error
console.log(f('a', 2)); // should be error
console.log(f('a', 'b')); // 'a:b'
