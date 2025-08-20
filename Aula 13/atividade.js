// 1. Classe Pessoa
class Pessoa {
    constructor(nome, idade, endereco, formacao) {
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
        this.formacao = formacao;
    }

    exibirdados() {
        console.log("---- Pessoa ----");
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`Endereço: ${this.endereco}`);
        console.log(`Formação: ${this.formacao}`);
    }
}

// 2. Classe Retângulo
class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea() {
        return this.largura * this.altura;
    }
}

// 3. Classe Conta Bancária
class ContaBancaria {
    constructor(saldoInicial = 0) {
        this.saldo = saldoInicial;
    }

    deposito(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
        } else {
            console.log("Valor inválido para depósito.");
        }
    }

    saque(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
        } else {
            console.log("Saque inválido. Verifique o valor ou o saldo.");
        }
    }
}

// 4. Classe Produto
class Produto {
    constructor(cor, tamanho) {
        this.cor = cor;
        this.tamanho = tamanho;
    }

    mostrarDetalhes() {
        console.log("---- Produto ----");
        console.log(`Cor: ${this.cor}`);
        console.log(`Tamanho: ${this.tamanho}`);
    }
}

// 5. Herança - Animal e Cachorro
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    fazerSom() {
        console.log(`${this.nome} está fazendo um som.`);
    }
}

class Cachorro extends Animal {
    latir() {
        console.log(`${this.nome} está latindo: Au au!`);
    }
}

// 6. Classe Carro
class Carro {
    constructor(modelo) {
        this.modelo = modelo;
    }

    dirigir() {
        console.log(`${this.modelo} está sendo dirigido.`);
    }
}

// 7. Classe Aluno
class Aluno {
    constructor(nome, serie) {
        this.nome = nome;
        this.serie = serie;
    }

    estudar() {
        console.log(`${this.nome} da série ${this.serie} está estudando.`);
    }
}

// ----------------------
// Exemplos de uso
// ----------------------

const pessoa1 = new Pessoa("Ana", 30, "Rua A, 123", "Engenharia");
pessoa1.exibirdados();

const retangulo1 = new Retangulo(5, 10);
console.log("Área do Retângulo:", retangulo1.calcularArea());

const conta1 = new ContaBancaria(100);
conta1.deposito(50);
conta1.saque(30);
conta1.saque(200); // saque inválido

const produto1 = new Produto("Azul", "M");
produto1.mostrarDetalhes();

const dog = new Cachorro("Toby");
dog.fazerSom();
dog.latir();

const carro1 = new Carro("Fiat Uno");
carro1.dirigir();

const aluno1 = new Aluno("Lucas", "7º ano");
aluno1.estudar();


   function auau() {
            // Lista de mensagens possíveis
            const mensagens = [
                "O cachorro disse: AUAU! apenas (obs: ele é um cão de poucas palavras)",
                "O cachorro disse: ROOF ROOF! (obs: ele acha que vc não é merecedor do auau agora)",

            ];

            // Escolhe uma mensagem aleatória
            const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];

            // Mostra a mensagem no alerta
            alert(mensagemAleatoria);
        }