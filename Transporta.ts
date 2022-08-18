import { Cadastro } from "./Cadastro.js"

export class Transporta extends Cadastro{

    public nome:string
    public email:string
    public estado:string
    public endereco:string
    // private senha: number 

//Constructor
constructor(
    nome:string,
    email:string,
    estado:string,
    endereco:string,
    senha:number
){
    super(nome,email,estado,endereco,senha)



}


public apresentar():string {
    return `A empresa ${this.nome}, tem o contato ${this.email}, e fica situada ${this.endereco}, ${this.estado}`
    
}






}