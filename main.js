const readline = require('readline');

function solicitarNumero() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let soma = 0;

  rl.question('Digite um número: ', (numero) => {
    for (let i = 3; i < numero; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        soma += i;
      }
    }

    console.log(`A soma dos múltiplos de 3 e 5 até ${numero} é: ${soma}`);
    rl.close();
  });
}

// Chame a função para testar
solicitarNumero();