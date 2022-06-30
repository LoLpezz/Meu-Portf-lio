function calculaImc (altura, peso){
    return peso / (altura * altura); //Deve colocar os parenteses para o Javascript dar prioridade na hora do calculo
}

var nome = prompt('Digite seu nome: ');
var alturaPessoa = prompt('Digite sua altura: ');
var pesoPessoa = prompt('Digite seu peso: ');

var imc = calculaImc (alturaPessoa, pesoPessoa);

alert(nome + ", o seu IMC é " + imc);

if (imc < 18.5){
    alert("Cuidade, você está abaixo da média.");
}if(imc > 35){
    alert("Você está acima da média.");
}if(imc >= 18.5 && imc <= 35){ //As duas condições são verdadeiras, e o resultado é verdadeiro
        alert('Você está dentro da média')
}