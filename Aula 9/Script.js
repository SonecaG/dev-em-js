// 1. Contagem de 1 a 10
function contagemDe1a10() {
    let resultado = '';
    for (let i = 1; i <= 10; i++) {
        resultado += i + '<br>';
    }
    document.getElementById('saida1').innerHTML = resultado;
}

// 2. Números pares de 0 a 20
function numerosPares() {
    let resultado = '';
    for (let i = 0; i <= 20; i += 2) {
        resultado += i + '<br>';
    }
    document.getElementById('saida2').innerHTML = resultado;
}

// 3. Tabuada do 5
function tabuadaDo5() {
    let resultado = '';
    const numero = 5;
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}<br>`;
    }
    document.getElementById('saida3').innerHTML = resultado;
}

// 4. Imprimir elementos de um array
function imprimirArray() {
    let resultado = '';
    const arr = [10, 20, 30, 40, 50];
    for (let i = 0; i < arr.length; i++) {
        resultado += arr[i] + '<br>';
    }
    document.getElementById('saida4').innerHTML = resultado;
}

// 5. Soma de números de 1 a 100
function somaDe1a100() {
    let soma = 0;
    let resultado = '';
    for (let i = 1; i <= 100; i++) {
        soma += i;
    }
    resultado = "Soma de 1 a 100: " + soma;
    document.getElementById('saida5').innerHTML = resultado;
}

// 6. Contagem regressiva de 10 a 1
function contagemRegressiva() {
    let resultado = '';
    let contador = 10;
    while (contador >= 1) {
        resultado += contador + '<br>';
        contador--;
    }
    document.getElementById('saida6').innerHTML = resultado;
}

// 7. Adivinhe o número (1 a 10)
function adivinharNumero() {
    let numeroCorreto = Math.floor(Math.random() * 10) + 1;
    let palpite = parseInt(prompt("Tente adivinhar o número entre 1 e 10:"));
    let resultado = '';

    while (palpite !== numeroCorreto) {
        if (palpite < numeroCorreto) {
            resultado = "Tente um número maior.<br>";
        } else if (palpite > numeroCorreto) {
            resultado = "Tente um número menor.<br>";
        }
        palpite = parseInt(prompt("Tente adivinhar o número entre 1 e 10:"));
    }

    resultado += "Parabéns! Você acertou!";
    document.getElementById('saida7').innerHTML = resultado;
}

// 8. Soma até digitar 0
function somaAteZero() {
    let somaTotal = 0;
    let numero = parseInt(prompt("Digite um número (0 para sair):"));
    let resultado = '';

    while (numero !== 0) {
        somaTotal += numero;
        numero = parseInt(prompt("Digite um número (0 para sair):"));
    }

    resultado = "Soma total: " + somaTotal;
    document.getElementById('saida8').innerHTML = resultado;
}
