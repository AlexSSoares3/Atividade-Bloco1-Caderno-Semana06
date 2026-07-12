let idadeDoUsuario = 20;

while (idadeDoUsuario < 0) {
    console.log("Idade inválida. Digite novamente.");

    break;
    
}

if (idadeDoUsuario >= 18) {
    console.log("cadastro permitido");
} else {
    console.log("cadastro bloqueado: menor de 18 anos");
}