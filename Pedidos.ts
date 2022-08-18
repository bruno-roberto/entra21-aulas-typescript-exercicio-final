export class Pedidos{
//Atributos
public codigo:Array<string>
public peso:Array<number>
public envio:Array<string>
public destino:Array<string>
public precoFrete: number
public qtdPacote: number



//Constructor

constructor(
    codigo:Array<string>,
    peso:Array<number>,
    envio:Array<string>,
    destino:Array<string>,
    precoFrete: number,
    qtdPacote: number
){
    this.codigo = codigo
    this.peso = peso
    this.envio = envio
    this.destino = destino
    this.precoFrete = precoFrete
    this.qtdPacote = qtdPacote


}
//Métodos 

public apresentar():string {
return ` O pedido referente ao codigo ${this.codigo} tem peso ${this.peso}, e foi enviado para o destino ${this.destino}.`
}

public calcularFrete():number{
    return this.precoFrete * this.qtdPacote
}


public getCodigo():Array<string>{
    return this.codigo;
}

public set setCodigo(codigo : Array<string>){
    this.codigo = codigo;
}





}