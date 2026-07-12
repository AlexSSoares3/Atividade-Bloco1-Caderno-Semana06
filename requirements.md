# Requisitos

## Regras de Negócio (RN)
* **RN1:** Permitir cadastro apenas de maiores de 18 anos. (Sistema / Administrador)
* **RN2:** Aplicar desconto de 10% em compras acima de R$ 200. (Sistema / Cliente)
* **RN3:** Bloquear conta após 3 tentativas erradas de senha. (Sistema / Segurança)

## Requisitos Funcionais (RF)
* **RF1:** Cadastrar novos usuários com nome, e-mail e senha. (Usuário / Cliente)
* **RF2:** Enviar e-mail de confirmação pós-cadastro. (Sistema de E-mail)
* **RF3:** Emitir relatório mensal de vendas em PDF. (Gerente / Administrador)

## Requisitos Não Funcionais (RNF)
* **RNF1:** Carregar qualquer página em menos de 2 segundos. (Desenvolvedor / Usuário)
* **RNF2:** Criptografar as senhas no banco de dados. (Admin de Banco de Dados / Dev)