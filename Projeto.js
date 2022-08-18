import { Cliente } from "./Cliente";
import { Pedidos } from "./Pedidos";
import { Transporta } from "./Transporta";

alert("Professor, não consegui enviar a atividade no dia que foi feito pois minha internet falhou1")
let clienteTeste = new Cliente("Bruno", "brunorobertopds@gmail.com", "SC", "Avenida Urubici", "035.359.138-85");
console.log(clienteTeste.nome);
console.log(clienteTeste.email);
console.log(clienteTeste.estado);
console.log(clienteTeste.endereco);
console.log(clienteTeste.cpf);
let transportadora = new Transporta("Tsystem", "Tsystem@gmail.com", "sc", "rua x", 123123);
console.log(transportadora.nome);
console.log(transportadora.email);
console.log(transportadora.estado);
console.log(transportadora.endereco);
//console.log(transportadora.senha); Atributo privado
let pacote = new Pedidos(["123", "123"], [], [""], ["Urubici"], 2.25, 2);
console.log(pacote.codigo);
console.log(pacote.peso);
console.log(pacote.envio);
console.log(pacote.destino);
console.log(pacote.precoFrete);
console.log(pacote.qtdPacote);
console.log(pacote.setCodigo);
console.warn("Exercício realizado em aula 16/08");
console.warn("Por motivos de força maior (Falha na internet!), fiz o commit um pouco após o prazo da aula");
