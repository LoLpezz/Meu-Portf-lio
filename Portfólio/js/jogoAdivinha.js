var numeroPensado = Math.round(Math.random() * 10);
var tentativa = parseInt(prompt("Tente adivinhar o numero: "));//O promt vai ler o numero que vai ser digitado, vai ser converdito pelo parseInt porque é uma string e vai ser um numero

if (tentativa == numeroPensado){
    alert("Você acertou.");
}else{
    alert("Você errou, o numero é " + numeroPensado);
}