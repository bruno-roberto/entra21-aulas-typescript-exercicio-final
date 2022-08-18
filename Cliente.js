import { Cadastro } from "./Cadastro.js";
export class Cliente extends Cadastro {
    constructor(nome, email, estado, endereco, cpf) {
        super(nome, email, estado, endereco, 123123);
        this.cpf = cpf;
    }
    //Método
    apresentar() {
        return `Cliente de nome ${this.nome}, email ${this.email}, cpf ${this.cpf}. O endereço ${this.endereco}, ${this.estado}`;
    }
}
