var loginCadastrado = "alura";
var senhaCadastrada = "alura321";

var loginInformado = prompt("Informe seu login: ");
var senhaInformada = prompt("Informe sua senha: ");

var maximoTentativas = 3;
var tentativasAtual = 1;

while(tentativasAtual <= maximoTentativas){
    var loginInformado = prompt("Informe seu login: ");
    var senhaInformada = prompt("Informe sua senha: ");
    
if( loginCadastrado == loginInformado && senhaCadastrada == senhaInformada ) {

    alert("Bem-vindo ao sistema " + loginInformado);
    tentativasAtual = maximoTentativas;
} else {

    if (tentativasAtual = 3){
        alert("Numero permitido de tentativas ultrapassado")
    } else {
        alert("Login inválido. Tente novamente");
    }
}
    tentativasAtual = tentativasAtual + 1
}