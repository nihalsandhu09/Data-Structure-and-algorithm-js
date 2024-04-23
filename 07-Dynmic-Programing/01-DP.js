function fibonacci(n) {
    let fib = [];
    fib[0] = 0;
    fib[1] = 1;
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
  }
  
  console.log(fibonacci(5)); // Output: 5
  console.log(fibonacci(10)); // Output: 55
  console.log(fibonacci(15)); // Output: 610
  