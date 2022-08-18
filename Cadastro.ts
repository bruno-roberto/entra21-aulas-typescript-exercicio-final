export class Cadastro{

    public nome:string
    public email:string
    public estado:string
    public endereco:string
    private senha:number
   
constructor(
    nome:string,
    email:string,
    estado:string,
    endereco:string,
    senha:number){

    this.nome=nome,
    this.email = email,
    this.estado=estado,
    this.endereco=endereco
    this.senha=senha
}


}