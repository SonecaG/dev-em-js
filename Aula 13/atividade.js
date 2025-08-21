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




















        












// // 1:  Classe Pessoa Básica -atributos  -  nome, idade, endereco, formacao


// class Pessoa {
//       constructor(){
//       this.nome = 'Carlos';
//       this.idade = 25;
//       this.formacao = 'ADS';

//       }

//       display(){
//         console.log(this.nome, this.idade, this.formacao)
//       }

// }

// const nova_pessoa =  new Pessoa()


// // 2: Classe Retângulo - atributos -  largura e altura

// class Retangulo{
//       constructor(){
//       this.largura =  20;
//       this.altura = 150 
       


//       }
     
//       display(){
//         console.log(this.altura, this.altura)
//       }


// }


// novo_retangulo = new Retangulo()



// // 3: Classe Conta Bancária , métodos - saque, deposito



// class ContaBancaria{
//       constructor(saldo){
//        this.saldo = saldo
//       }
      
//       display(){

//         console.log(' Saldo  -  R$', this.saldo)
//       }

//       saque(valor_){
//        let calculo = this.saldo - valor_
//        return calculo
//       }
      
//        deposito(valor_){
//        let calculo = this.saldo + valor_
//        return calculo
//       }

// }


// let conta = new ContaBancaria(1000)

// conta.display()
// let v_saque  =  parseFloat(prompt('Digite o valor do saque'))
// console.log('Valor em conta R$', conta.saque(v_saque))
// let v_dep  =  parseFloat(prompt('Digite o valor do deposito'))
// console.log('Valor em conta R$', conta.deposito(v_dep))






// // 4: Classe Produto - attributos -  cor, tamanho


// class Produto{
//     constructor(){

//      this.cor  = 'red';
//      this.tamanho =  65;

//     }




// }




// 5: Classe Carro -  método dirigir


// class Carro{
//     constructor(velocidade){
//     this.velocidade = velocidade
//     }
    
//      dirigir(){
//      let acel = [40,50,60,70,80,90,100,150]   
//      if (this.velocidade == 0){
//         for (let x = 0; acel.length; x++){
//             this.velocidade = this.velocidade + acel
//             console.log(this.velocidade)
//      }
     
//     }
//    }
// }

// let carro =  new  Carro(0) 
// carro.dirigir()



// 6: Classe Aluno -  atributos - nome, serie - método estudar()

// class Aluno{
// 
//       constructor(){
//            this.nome = 'Pedro';
//            this.serie = '8ª série'
//    
//       }
//       estudar(metodologia){
//       if (metodologia == 'em grupo' || metodologia == 'escrever com caneta'|| metodologia == 'criar resumo'  ){
//         console.log('Basta estudar apenas 1h dia')
//       }else{
//          console.log('estudar ao menos 2h o dia ')
//       }  
//     } 
// }
// 
// 
// let aluno  = new Aluno()
// aluno.estudar('em grupo')