const zeros_in_factorial = (upper) => {
  return zeros_multiples_of_5(upper);
  
  let res = 1,
    zeros = 0;
  for (let i=1 ; i<=upper ; i++) {
    res *= i;
    if (i % 5 == 0) {
      zeros++;
    }
  }
  console.log(`${upper}! = ${res} with ${zeros} zeros`);
}

const zeros_multiples_of_5 = (upper) => {
  let multiples = 0;
  for (let i=5 ; Math.floor(upper/i) > 0 ; i *= 5) {
     //console.log(`${i} times ${(upper/i)}`)
     multiples += Math.floor(upper/i);
  }
  return multiples;
}

let number = 26;
console.log(`${number} has ${zeros_in_factorial(number)} trailing zeroes`);
