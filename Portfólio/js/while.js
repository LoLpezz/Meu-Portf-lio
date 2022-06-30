//While(enquanto) 
/*
var totalFamiliares = parseInt(prompt("Quantidade de familiares"));
var numero = 1;

while(numero <= totalFamiliares){
    var totalIdade = 0;
    var idade = parseInt(prompt("Informe a idade do familiar: "));
    totalIdade = totalIdade + idade;
    numero++;
}

document.write("Fim"); */
var dataLimite = parseInt(prompt('Digite uma data: '));
var anoCopa = 1930;


//anoCopa = anoCopa + 4; //anoCopa passa a receber anoCopa(1930) + 4, que resulta em 1934

//While/Enquanto, sempre vai repetir o que for verdadeiro que esta dentro das chaves
while (anoCopa <= dataLimite) {  //anoCopa(1930) é menor do que 2016? Se sim, então continua 
    alert("Teve copa em " + anoCopa); //O WHILE sempre vai repetir o que esta dentro das chaves, vai repetir ENQUANTO o resultado for verdadeiro
    anoCopa = anoCopa + 4; //Quando for 2017 o codigo para de repetir
}