export class Pedidos {
    //Constructor
    constructor(codigo, peso, envio, destino, precoFrete, qtdPacote) {
        this.codigo = codigo;
        this.peso = peso;
        this.envio = envio;
        this.destino = destino;
        this.precoFrete = precoFrete;
        this.qtdPacote = qtdPacote;
    }
    //Métodos 
    apresentar() {
        return ` O pedido referente ao codigo ${this.codigo} tem peso ${this.peso}, e foi enviado para o destino ${this.destino}.`;
    }
    calcularFrete() {
        return this.precoFrete * this.qtdPacote;
    }
    getCodigo() {
        return this.codigo;
    }
    set setCodigo(codigo) {
        this.codigo = codigo;
    }
}
