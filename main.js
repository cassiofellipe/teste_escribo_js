function sumNumbersMultiple(num) {
  let result = 0;

  for (let i = 3; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }

  return result;
}

// Exemplos de uso:
console.log(sumNumbersMultiple(10));
console.log(sumNumbersMultiple(11));
