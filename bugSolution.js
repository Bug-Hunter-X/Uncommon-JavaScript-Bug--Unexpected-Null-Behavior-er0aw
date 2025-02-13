function foo(a, b) {
  a = a === null ? 0 : a; // Use 0 if a is null 
  b = b === null ? 0 : b; // Use 0 if b is null
  return a + b;
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
console.log(foo(null,null)); // Output 0