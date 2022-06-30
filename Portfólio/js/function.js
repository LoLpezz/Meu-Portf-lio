/*function touchImg(){
    var userName = prompt('Qual é o seu nome?', 'Coloque seu nome aqui.');

    if (userName) {
        alert('Prazer em conhecer você,' + userName + ".");
    }
}*/


//Convertendo texto para numero 

var vencedores = parseInt(prompt("Qual é o numero de vencedores?"));//O parseInt tem que receber algo para tranformar em numero, no caso é o promt com o texto.
var empates = parseInt(prompt("Qual é o numero de empates?"));

var ponto = vencedores *3 + empates; 

alert("Os pontos do seu time é " + ponto);


//Conferir a cituação do time no ano atual
var timePontos = 29;

if (timePontos > 30){
    alert("Seu time está melhor do que o ano passado.");
}if (timePontos < 30){
    alert("Seu time está pior do que o ano passado.");
}if (timePontos == 30){
    alert("Seu time está igual a o ano passado.");
}


//O if recebe o resultado dessa operação, só vai exibir a mensagem caso o resultado sejá maior, menor ou igual a 30 ou o valor escolhido