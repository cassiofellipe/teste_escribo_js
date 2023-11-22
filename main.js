function somatorioMultiplos3e5(numero) {
    let somatorio = 0;
  
    for (let i = 3; i < numero; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        somatorio += i;
      }
    }
  
    return somatorio;
  }
  
  // Exemplos de uso:
  console.log(somatorioMultiplos3e5(10));  // Deve retornar 23
  console.log(somatorioMultiplos3e5(11));  // Deve retornar 33

  