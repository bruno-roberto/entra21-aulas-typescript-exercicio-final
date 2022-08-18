import { Cadastro } from "./Cadastro.js";

export class Cliente extends Cadastro{

    public nome:string
    public email: string
    public estado: string
    public endereco: string
    public cpf: string

    constructor(
        nome:string,
        email:string,
        estado:string,
        endereco:string,
        cpf:string,
    ){
        super(nome ,email, estado, endereco, 123123)
        this.cpf = cpf

    }

    //Método

    public apresentar ():string{
        return `Cliente de nome ${this.nome}, email ${this.email}, cpf ${this.cpf}. O endereço ${this.endereco}, ${this.estado}`
    }

}

