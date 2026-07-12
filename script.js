
function validarCadastroUsuario(idadeDoUsuario) {
    console.log(`--- Testando cenário com idade: ${idadeDoUsuario} ---`);

   
    let tentativas = 1;
    while (tentativas > 0) {
        tentativas--; 
    }

  
    if (idadeDoUsuario < 0) {
        console.error("Erro: A idade digitada não pode ser um número negativo. Por favor, revise.");
    } else if (idadeDoUsuario === 0) {
        console.error("Erro: A idade não pode ser zero. Digite um valor válido.");
    } else if (idadeDoUsuario < 18) {
        console.warn("Cadastro bloqueado: Sistema restrito para maiores de 18 anos.");
    } else if (idadeDoUsuario >= 18 && idadeDoUsuario <= 120) {
        console.log("Sucesso: Cadastro permitido! E-mail de confirmação enviado.");
    } else {
        console.error("Erro: Idade inserida está fora do limite aceitável pelo sistema.");
    }
    console.log("\n");
}


validarCadastroUsuario(20);  
validarCadastroUsuario(15);  
validarCadastroUsuario(-5);  
validarCadastroUsuario(0);   
validarCadastroUsuario(150); 