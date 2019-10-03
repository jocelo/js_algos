var a = 15,
  b = 10;

console.log(`first is ${a} then is ${b}`);

if (a>b) {
  a = a - b;
  b = a + b;
  a = b - a;
} else {
  b = b - a;
  a = a + b;
  b = a - b;
}

console.log(`last is ${a} then is ${b}`);