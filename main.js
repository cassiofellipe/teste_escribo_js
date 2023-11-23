function sumNumbersMultiple() {
  
  let inputNumber = input("Favor digite um numero inteiro: ");
  let result = 0;

  for (let i = 3; i < inputNumber; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }

  return console.log(`O valor passado é: ${inputNumber}, o resultado esperado é: ${result}`);
}

sumNumbersMultiple();

// function imprimirValor() {
//   // Obtém a entrada do usuário via prompt
//   var userInput = prompt("Digite um valor:");

//   // Converte a entrada para um número (se possível)
//   var valor = parseFloat(userInput);

//   // Verifica se a conversão foi bem-sucedida
//   if (!isNaN(valor)) {
//       // Imprime o valor
//       console.log("O valor informado é: " + valor);
//   } else {
//       // Se a entrada não pôde ser convertida para um número
//       console.log("Por favor, insira um valor numérico válido.");
//   }
// }

// // Chama a função para imprimir o valor
// imprimirValor();