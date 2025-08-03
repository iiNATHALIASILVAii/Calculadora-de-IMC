// Entrada de dados
function calcularIMC() {
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;
  let resultado = document.getElementById("resultadoTexto");

  // Conversão de entrada
  peso = parseFloat(peso);
  altura = parseFloat(altura);

  // Validação de entrada
  if (isNaN(peso) || isNaN(altura)) {
    document.getElementById("resultado").textContent =
      "Por favor, insira valores numéricos válidos.";
    return;
  }
  if (peso === "" || altura === "") {
    document.getElementById("resultado").textContent =
      "Todos os campos devem ser preenchidos.";
    return;
  }

  // Processamento
  let imc = peso / (altura * altura);
  let classificacao = "";

  // Saida
  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc <= 24.9) {
    classificacao = "com peso normal";
  } else if (imc <= 29.9) {
    classificacao = "com sobrepeso";
  } else if (imc >= 30) {
    classificacao = "com obesidade";
  } else {
    classificacao = "Com obsesidade grave";
  }
  resultado.textContent =
    "Seu IMC é: " + imc.toFixed(2) + " - Você está " + classificacao;

  //botão de limpar
  document.getElementById("limpar").addEventListener("click", function () {
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("resultadoTexto").textContent = "";
  });
}
