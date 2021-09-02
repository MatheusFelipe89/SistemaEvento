/*Prezados Odirlei e Thiago, realizei a atividade dessa maneira com relação a data
pois não encontrei uma forma de colocar a formula. "New date" não estava fazendo sentido, 
no momento em que ia realizar o If e o Elf não correspondia ao texto do console.log.
Desde já agradeço e se puderem ensinar na proxima aula, serei grato.

*/ 
let DataAtual = (01-09-2021)
const DataEvento = (07-09-2021)

if (DataEvento > DataAtual) {
    console.log("Evento Permitido"); }

 else {
     console.log("Cadastro não permitido: Data Inválida")
}

var idadeMinima = 18;

if (idadeMinima >=18 ) {
    console.log("Cadastro permitido: Participante maior que 18 anos")
    
} else { 
    console.log("Idade não permitida")
    
};

let Participantes = [" Gilberto ", " Maria ", " Moisés ", " Ariane ", " Caroline ", " Milena, "]
let Palestrantes = [" Kadoshi ", " Odirlei ", " Thiago ", " Elda "," Matheus "]
console.log(Participantes+Palestrantes)

if (Participantes.length + Palestrantes.length < 100) {
    console.log("Há vaga disponivel")
    
} else {
    console.log("Não há mais vagas disponiveis")
}
