class Salario{
      constructor(carga, salario){
       this.carga = carga;
       this.salario = salario;      

      }
     
      hora_colaborador(){
      let cal = this.salario / this.carga
      return cal 
      }

      extra_colaborador(ho_colab){
      let cal =  ho_colab * 1.5
      return cal
      }
      
    quant_extra(quantidade, ho_colab){
       return quantidade * ho_colab   
    }
    
    salario_total(salario, quant_extra){

        return salario +  quant_extra

    }

}

let salario   =  new Salario(220,2000)
let hora_colaborador = salario.hora_colaborador()
console.log('Valor hora R$', salario.hora_colaborador())
console.log('Extra R$', salario.extra_colaborador(hora_colaborador))
let quantidade_h =  10
console.log('Quantidade de hora extra', quantidade_h)
let extra  =  salario.extra_colaborador(hora_colaborador)
console.log('Valor extra R$', salario.quant_extra(quantidade_h,extra))
let _extra_t = salario.quant_extra(quantidade_h,extra)
console.log('Total Salario R$', salario.salario_total(2000,_extra_t))


class Produto{
     constructor(nome, preco){
      this.nome = nome;
      this.preco = preco
     }
}


class Carrinho{
     constructor(){
      this.carrinho = []
    }

    adicionar_produto(produto){
    this.carrinho.push(produto)
     console.log('produto', produto.nome, 'Adicionado')
    }
    
    remover_produto(nome){
    this.carrinho =  this.carrinho.filter((p) => p.nome !== nome) 
    console.log('produto', nome, 'removido')    
    // console.log(this.carrinho)
    // this.mostrar_carrinho()
    return this.carrinho

    }

    mostrar_carrinho(){
     console.log('Carrinho' )
     this.carrinho.forEach(p => console.log(p.nome, '$', p.preco));

    }

    total(){
      const total   = this.carrinho.reduce((soma, p) => soma +  p.preco, 0)
      const total2 =  this.carrinho[0]
      console.log('$', total)
    }



}


const carrinho =  new Carrinho()
const prod1 =  new Produto('Camiseta',10.5)
const prod2 =  new Produto('meia', 5.0)



carrinho.adicionar_produto(prod1)
carrinho.adicionar_produto(prod2)
carrinho.remover_produto(prod2)
// let car =  remover_produto(prod2)
carrinho.mostrar_carrinho()
carrinho.total()


