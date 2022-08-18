import { Cadastro } from "./Cadastro.js";
export class Transporta extends Cadastro {
    // private senha: number 
    //Constructor
    constructor(nome, email, estado, endereco, senha) {
        super(nome, email, estado, endereco, senha);
    }
    apresentar() {
        return `A empresa ${this.nome}, tem o contato ${this.email}, e fica situada ${this.endereco}, ${this.estado}`;
    }
}
