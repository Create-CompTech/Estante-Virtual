  **Instituto Nossa Senhora de Fatima
Informática** 

**goBook**

**São Paulo
2020**

---   

>>**Alice Assis do Nascimento Nº01
Gustavo Furtado Campos Nº16
Lucas de Paula Araújo Lima Nº25
Sabrina Kelly da Silva Santos Nº39
Sthefany Cristovam da Silva Nº40**

**Link Trello:** https://trello.com/invite/b/tgEXejDA/26408dd1ecc0c387c3c4a70d7ea5efe6/tcc

**Link GitHub:** https://github.com/Create-CompTech/Estante-Virtual

**Projeto de Conclusão de curso da turma Informática D**

Trabalho de conclusão de curso apresentado ao curso de informática da instituição Nossa senhora de Fatima.

São Paulo
2020

---
**SUMÁRIO**
[toc]

## 1. INTRODUÇÃO

Este trabalho tem o intuito de provar conhecimentos na área da informática por meio da criação de um sistema web. Nele constará a elaboração completa do sistema, desde a análise até o deploy da aplicação. Nosso sistema é uma estante virtual. Será um site destinado ao usuário final,
sem necessidade da ajuda de terceiros para realizar uma compra. Em nosso backend há uma API em C# usando net e banco de dados relacional MySQL. Nosso frontend está na linguagem html/css, utilizando a biblioteca React que tem como base a linguagem JavaScript.

## 2. ESPECIFICAÇÕES DO NEGÓCIO
goBook é uma biblioteca virtual que lhe traz a possibilidade de realizar a leitura de todos livros existentes em pdf, sendo eles pagos ou gratuitos. Para receber um livro de graça basta realizar feedbacks e através dos pontos acumulados você ganha um livro disponível a sua estante. Com possibilidades de presentear alguém especial para realizar a leitura daquele livro favorito.
## 3. MÓDULOS DO SISTEMA
- Perfil
- Venda
- Ebook
- Capacidades do Administrador

## 4. CASO DE USO
### USE CASE PERFIL
![image](https://i.imgur.com/nFDQZRX.png)

**UC-PERFIL.001:** O Usuário e o Administrador deve conseguir realizar o login, e ao fazer isso deve informar seu e-mail e senha previamente cadastrados. O sistema deve proibir a entrada se os dados não constarem no banco de dados, ou se a senha não conferir, e mandar uma mensagem de aviso.
**UC-PERFIL.002:** Um Usuário deve fazer seu próprio cadastro constando seu nome e sobrenome do usuário, número do cartão, validade do cartão, código de segurança e forma de pagamento.
**UC-PERFIL.003:** O Usuário e poderá excluir a própria conta já o Administrador poderá excluir qual conta quiser.
**UC-PERFIL.004:** O Usuário deve ter a possibilidade de modificar sua conta.Caso tenha esquecido sua senha ao tentar logar, poderá modificar sua senha. Ao ativar essa funcionalidade, deverá ser enviado ao email do mesmo um codigo de confirmação e dele terá  a possibilidade de redefinir a senha.
**UC-PERFIL.005:** Um Administrador terá a possibilidade de cadastrar um novo Administrador, contendo nome, RG, CPF, genêro, cargo exercido e data de nascimento.

### USE CASE VENDA
![image](https://i.imgur.com/U32aKfP.png)
**UC-VENDA.001:** Um Usuário terá a possibilidade de realizar pedido do ebook desejado.
**UC-VENDA.002:** Um Usuário poderá selecionar a forma de pagamento, sendo no cartão ou através de pontos, se for selecionada a opção de cartão poderá pagar em débito ou crédito, contendo o código de segurança. Caso seja em total de pontos, será adicionado o livro de acordo com os pontos adequados.
**UC-VENDA.003:** Um Usuário terá a possibilidade de lêr a sinopce e as informações do livro e adicionar ao carrinho, sem compromisso de comprar mas também poderá comprar ou excluir todos de uma vez ou um de cada.
**UC-VENDA.004:** Um Usuário poderá compartilhar seu ebook após a leitura apenas por leitores do goBook via pdf.
**UC-VENDA.005:** Um Usuário poderá cancelar o pedido selecionado.
### USE CASE EBOOK
![image](https://i.imgur.com/ULScomY.png)
**UC-EBOOK.001:** Um Usuário terá a possibilidade de  lêr a sinopce e as informações do livro e se for do seu interesse poderá adicionar aos favoritos.
**UC-EBOOK.002:** Um Usuário após lêr as informações do livro poderá realizar leitura.
**UC-EBOOK.003:** Um Usuário poderá adicionar a estante o livro desejado ou terá a possibilidade de criar a estate contendo nome e gênero da prateleira.
**UC-EBOOK.004:** Um Usuário poderá continuar leitura após ter marcado a ultima pagina a ter sido realizada a leitura. 
**UC-EBOOK.005:** Um Usuário deverá avaliar o ebook de 0 a 5 estrelas contendo seu FeedBack.
**UC-EBOOK.006:** Um Usuário deverá enviar seu FeedBack, avaliando com um leve resumo após término do livro ou ao realizar comprar.
**UC-EBOOK.007:** Um Usuário ganhará pontos a cada FeedBack postado na plataforma e ser avaliado atráves do admin, tendo a possibilidade de comprar um livro apenas por pontos ganhos.
**UC-EBOOK.008:** Um Administrador poderá adicionar um novo ebook contendo nome, descrição,gêneros, número de série,código de barras, idiomas, inserção, foto do ebook, preço, páginas, editora e edição do Ebook escolhido.
**UC-EBOOK.009:** Um Administrador poderá alterar as informações do ebook.
**UC-EBOOK.0010:** Um Administrador poderá excluir o ebook escolhido.
**UC-EBOOK.0011:** Um Administrador poderá lêr o ebook do seu agrado.
### USE CASE CAPACIDADES DO ADMINISTRADOR
![image](https://i.imgur.com/qz1v6hA.png)
**UC-CAPACIDADE DO ADMINISTRADOR.001:** Um Administrador poderá utilizar a barra de pesquisa pelo usuário desejado, para visualizar seu perfil.
**UC-CAPACIDADE DO ADMINISTRADOR.002:** Um Adminin poderá pesquisar as atividades realizadas pelo usuário.
**UC-CAPACIDADE DO ADMINISTRADOR.003:** Um Administrador poderá atualizar novos lançamentos de ebooks na plataforma dos usuários.
**UC-CAPACIDADE DO ADMINISTRADOR.004:** Um Administrador podera aprovar os FeedBack feitos pelos usuários contendo nome livro e autor. Para aqueles que o adminin não estiver de acordo receberá uma notificação de recusassão. 
**UC-CAPACIDADE DO ADMINISTRADOR.005:** Um Administrador poderá cobrar pagamento antes da data de validade e cobrar aqueles com o pagamento atrasado, caso passe uma semana a mais da data marcada a conta será bloqueada até que o pagamento seja efetuado.

## 5. PROTOTIPAÇÃO
#### PROTOTIPO-001.INICIAL
![image](https://i.imgur.com/Xu9MfEd.png) 
**EVENTO:** EV002.CADASTRAR-SE.CLICK
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela fazer assinatura]]. 

 **EVENTO:** EV003.LOGIN.CLICK
 **ENTRADA:** ... 
 **SAÍDA:** Redirecionamento para a [[tela login]]. 
 
 **EVENTO:** EV004.ICON_SEARCH.CLICK 
 **ENTRADA:** Nome do livro, Gênero, Autor. 
 **SAÍDA:** Livros recomendados de acordo com a procura. 
 
 **EVENTO:** EV005.LIVROS_AUTORES_CLICK 
 **ENTRADA:** ... 
 **SAÍDA:** Redirecionamento para a [[tela inicial]].
 
 **EVENTO** EV006.LIVROS_MAIS_VENDIDOS.CLICK
 **ENTRADA:** ... 
 **SAÍDA:** Redirecionamento para [[tela mais vendidos]].

 **EVENTO:** EV007.LIVROS_MAIS_RECOMENDADOS.CLICK 
 **ENTRADA:** ...
 **SAÍDA:** Redirecionamento para a [[tela mais vendidos]].
 
 **EVENTO:** EV008.LER_MAIS.CLICK 
 **ENTRADA:** ... 
 **SAÍDA:** Redirecionamento para a [[tela informações goebook]].
 
 **EVENTO:** EV009.ICON_ANGULO_DUPLO.CLICK 
 **ENTRADA:** ... 
 **SAÍDA:** Visualizar mais livros.

#### PROTOTIPO-002.LOGIN 
![image](https://i.imgur.com/IyoLgvO.png)
**EVENTO:** EV001.ICON_VOLTAR.CLICK 
**ENTRADA:** ...
**SAÍDA:** Redirecionamento para a [[tela inicial]].

**EVENTO:** EV002.CADASTRAR.CLICK
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela de assinatura]].

**EVENTO:** EV003.ESQUECI_SENHA.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela alterar senha]].

**EVENTO:** EV004.LOGIN.CLICK 
**ENTRADA:** Email,Senha. 
**SAÍDA:** Redirecionamento para a [[tela inicial]].
 
#### PROTOTIPO-003.ENVIAR_EMAIL 
![image](https://i.imgur.com/KilgcQa.png)
**EVENTO:** EV001.ENVIAREMAIL.CLICK 
**ENTRADA:** email.
**SAÍDA:** Mensagem de código no email.

**EVENTO:** EV002.ICON_VOLTAR.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela login]].

#### PROTOTIPO-004.CONFIRMAR_CÓDIGO 
![image](https://i.imgur.com/ezySO9K.png)
**EVENTO:** EV001.CONFIRMAR.CLICK 
**ENTRADA:** Código de segurança.
**SAÍDA:** Mensagem de confirmação e envio do código através do email. Após confirmação, redirecionamento para [[tela inícial]]. 

**EVENTO:** EV002.ICON_VOLTAR.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para [[tela login]].

**EVENTO:** EV003.NÃO_RECEBEU_EMAIL.CLICK
**ENTRADA:** ... 
**SAÍDA:** Reevio de código.

####  PROTOTIPO-005.ALTERAR_SENHA
![image](https://i.imgur.com/jJ0DFMB.png)
**EVENTO:** EV001.CONFIRMARSENHA.CLICK 
**ENTRADA:** Senha, Confirmar nova senha.
**SAÍDA:** Mensagem confirmação e envio de email. Após confirmação, redirecionamento para [[tela inícial]].

**EVENTO:** EV002.ICON_VOLTAR.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para [[tela login]].

#### PROTOTIPO-006.FAZER_ASSINATURA 
![image](https://i.imgur.com/7OAg8St.png)
**EVENTO:** EV001.ASSINAR.CLICK 
**ENTRADA:** Nome do titular, Sobrenome, Número do cartão, Validade do cartão, Código de seguranca, Forma de pagamento. 
**SAÍDA:** Mensagem de confirmação e redirecionamento para a [[tela inicial]].

**EVENTO:** EV002.ICON_VOLTAR.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela login]].

#### PROTOTIPO-007.CADASTRAR-SE 
![image](https://i.imgur.com/J7sB1oW.png)
**EVENTO:** EV001.CONCLUIR.CLICK 
**ENTRADA:** Digite seu nome, Digite seu CPF, Gênero, Data de nascimento. 
**SAÍDA** Redirecionamento para a [[tela inicial]].

**EVENTO:** EV002.CONTINUAR_PARA_ASSINATURA.CLICK
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela fazer assinatura]].

**EVENTO:** EV003.ICON_VOLTAR.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela fazer assinatura]].

####  PROTOTIPO-008.MENU
![image](https://i.imgur.com/tfjP0nQ.png)
**EVENTO:** EV001.LIVROS_AUTORES_CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela inicial]].

**EVENTO:** EV002.LIVROS_MAIS_VENDIDOS.CLICK 
**ENTRADA:** ...
**SAÍDA:** Redirecionamento para [[tela mais vendidos]].

**EVENTO:** EV003.LIVROS_MAIS_RECOMENDADOS.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela mais vendidos]].

**EVENTO:** EV004.LER_MAIS.CLICK 
**ENTRADA:** ...
**SAÍDA:** Redirecionamento para a [[tela sobre o livro]].

**EVENTO:** EV005.ICON_ANGULO_DUPLO.CLICK
**ENTRADA:** ...
**SAÍDA:** Visualizar mais livros.

**EVENTO:** EV006.ICON_SEARCH.CLICK 
**ENTRADA:** Nome do livro, Gênero,Autor.
**SAÍDA:** Livros recomendados de acordo com a procura.

**EVENTO:** EV007.ICON_ALIGN.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redireciodo para menu goBook.

**EVENTO:** EV008.PERFIL.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela perfil]].

**EVENTO:** EV09.MENSAGENS.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para mensagens recebidas.

**EVENTO:** EV010.MINHAS_ESTANTES.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela minhas estantes]].

**EVENTO:** EV011.MEU_CARRINHO.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela meu carrinho]].

**EVENTO:** EV012.NOVIDADES.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela novidades ebook]].

**ENTRADA:** EV013.PONTOS.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela pagamento]].

#### PROTOTIPO-009.MAIS_VENDIDOS 
![image](https://i.imgur.com/I8syXXt.png)
**EVENTO:** EV001.LIVROS_AUTORES_CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela inicial]].

**EVENTO:** EV002.LIVROS_MAIS_VENDIDOS.CLICK
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para [[tela mais vendidos]].

**EVENTO:** EV003.LIVROS_MAIS_RECOMENDADOS.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela mais vendidos]].

**EVENTO:** EV004.ICON_SEARCH.CLICK 
**ENTRADA:** Nome do livro, Gênero,Autor. 
**SAÍDA:** Livros recomendados mais vendidos de acordo com a procura.

**EVENTO:** EV005.ICON_BELL.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionado para notificações de sugestões de livros mais vendidos.

**EVENTO:** EV006.ICON_ALIGN.CLICK
**ENTRADA:** ... 
**SAÍDA:** Redirecionado para menu goBook.

#### PROTOTIPO-010.PERFIL 
![image](https://i.imgur.com/MSTVVyu.png)
**EVENTO:** EV001.ICON_VOLTAR.CLICK
**ENTRADA:** ...
**SAÍDA:** Redirecionamento para a [[tela menu]].

**EVENTO:** EV002.ICON_ALIGN.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionado para menu goBook.

**EVENTO:** EV003.ICON_LIGAÇÃO 
**ENTRADA:** Alterar email, Alterar senha, Alterar perfil. 
**SAÍDA:** Redirecionamento para a alteração de fatores.

#### PROTOTIPO-011.ALTERAR_PERFIL 
![image](https://i.imgur.com/kfwJqns.png)
**EVENTO:** EV001.ICON_VOLTAR.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela menu]].

**EVENTO:** EV002.ICON_ALIGN.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionado para menu goBook.

**EVENTO:**  EV003.ICON_LIGAÇÃO 
**ENTRADA:** Alterar email, Alterar senha, Alterar perfil. 
**SAÍDA:** Redirecionamento para a alteração de fatores. 

**EVENTO:** EV004.PERFIL.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela perfil]].

**EVENTO:** EV05.MENSAGENS.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela mensagens]].

**EVENTO:** EV006.MINHAS_ESTANTES.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela minhas estantes]].

**EVENTO:** EV007.MEU_CARRINHO.CLICK
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela meu carrinho]].

**EVENTO:** EV008.NOVIDADES.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela novidades ebook]].

**ENTRADA:** EV009.PONTOS.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela pagamento]].

#### PROTOTIPO-012.MINHAS_PRATELEIRAS 
![image](https://i.imgur.com/3F4Qr03.png)
**EVENTO:** EV001.ICON_VOLTAR.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela menu]].

**EVENTO:** EV002.ICON_ALIGN.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionado para menu goBook.

**EVENTO:** EV003.ADICIONAR_NOVA_PRATELEIRA.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para criação de prateleira.

**EVENTO:** EV004.LER_MAIS.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela sobre o livro]].

**EVENTO:** EV005.ICON_ANGULO_DUPLO.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Visualizar mais livros.

**EVENTO:** EV006. PERSONALIZAR.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Personalizar prateleiras.

#### PROTOTIPO-013.ADICIONAR_NOVA_PRATELEIRA
![image](https://i.imgur.com/QDzikgm.png)
**EVENTO:** EV001.CRIAR.CLICK 
**ENTRADA:** Nome da prateleira, Gênero da prateleira. 
**SAÍDA:** Nova prateleira.

**EVENTO:** EV002.CANCELAR.CLICK
**ENTRADA:** Nome da prateleira, Gênero da prateleira. 
**SAÍDA:** Cancelar informações de uma nova prateleira.

#### PROTOTIPO-014.MINHAS_ESTANTES
![image](https://i.imgur.com/YNW17ji.png)
**EVENTO:** EV001.ICON_VOLTAR.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela menu]]. 

**EVENTO:** EV002.ICON_ALIGN.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionado para menu goBook.

**EVENTO:** EV003.LER_MAIS.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela sobre o livro]].

**EVENTO:** EV004.ICON_ANGULO_DUPLO.CLICK
**ENTRADA:** ... 
**SAÍDA:** Visualizar mais livros.

**EVENTO:** EV004.PERFIL.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela perfil]].

**EVENTO:** EV05.MENSAGENS.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela mensagens]].

**EVENTO:** EV006.MINHAS_ESTANTES.CLICK 
**ENTRADA:** ...
**SAÍDA:** Redirecionamento para a [[tela minhas estantes]].

**EVENTO:** EV007.MEU_CARRINHO.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela meu carrinho]].

**EVENTO:** EV008.NOVIDADES.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela novidades ebook]].

**ENTRADA:** EV009.PONTOS.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela pagamento]].

**EVENTO:** EV010. PERSONALIZAR.CLICK
**ENTRADA:** ... 
**SAÍDA:** Personalizar estantes.

#### PROTOTIPO-015.MEU_CARRINHO
![image](https://i.imgur.com/EhZv30D.png)
**EVENTO:** EV001.ICON_ALIGN.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionado para menu goBook.

**EVENTO:** EV002.COMPRAR_TODOS.CLICK 
**ENTRADA:** Seleciona todos.
**SAÍDA:** Redirecionado para a [[tela carrinho comprar]].

**EVENTO:** EV003.EXCLUIR_DO_CARRINHO.CLICK 
**ENTRADA:** Seleciona quais excluir. 
**SAÍDA:** Redirecionado para a [[tela carrinho comprar]].

**EVENTO:** EV004. FINALIZAR_COMPRA.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionado para a [[tela carrinho comprar]].

#### PROTOTIPO-016.MENU_CARRINHO
![image](https://i.imgur.com/WYfOSwz.png)
**EVENTO:** EV001.ICON_ALIGN.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionado para menu goBook.

**EVENTO:** EV002.FINALIZAR_COMPRA.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionado para a [[tela carrinho comprar]].

**EVENTO:** EV003.PERFIL.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela perfil]].

**EVENTO:** EV04.MENSAGENS.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela mensagens]].

**EVENTO:** EV005.MINHAS_ESTANTES.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela minhas estantes]].

**EVENTO:** EV006.MEU_CARRINHO.CLICK 
**ENTRADA:** ...
**SAÍDA:** Redirecionamento para a [[tela meu carrinho]].

**EVENTO:** EV007.NOVIDADES.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela novidades ebook]].

**ENTRADA:** EV008.PONTOS.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela pagamento]].

#### PROTOTIPO-017.CARRINHO_COMPRAR
![image](https://i.imgur.com/Q3OtvsT.png)
**EVENTO:** EV001.ICON_VOLTAR.CLICK
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela meu carrinho]].

**EVENTO:** EV002.FORMA_DE_PAGAMENTO.CLICK
**ENTRADA:** Cartão, Pontos.
**SAÍDA:** Redirecionamento para a [[tela pagamento]].

**EVENTO:** EV003.EXCLUIR.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionada para a [[tela confirmar exclusão]].

#### PROTOTIPO-018.CARRINHO_EXCLUIR
![image](https://i.imgur.com/9pIBNWC.png)
**EVENTO:** EV001.ICON_ALIGN.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionado para menu goBook.

**EVENTO:** EV002.COMPRAR_TODOS.CLICK 
**ENTRADA:** Seleciona todos.
**SAÍDA:** Redirecionado para a [[tela carrinho comprar]].

**EVENTO:** EV003.EXCLUIR_DO_CARRINHO.CLICK 
**ENTRADA:** Seleciona quais excluir. 
**SAÍDA:** Redirecionado para a [[tela carrinho comprar]].

**EVENTO:** ICON_SELECIONAR_EXCLUSÃO 
**ENTRADA:** ...
**SAÍDA:** Redirecionamento para a [[tela confirmar exclusão]].

#### PROTOTIPO-019.CONFIRMAR_EXCLUSÃO
![image](https://i.imgur.com/xhCADlN.png)
**EVENTO:** EV001.SIM.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Excluir ebook do carrinho.

**EVENTO:** EV002.NAO.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela meu carrinho]].

#### PROTOTIPO-020.SOBRE_LIVRO
![image](https://i.imgur.com/7DUQJbI.png)
**EVENTO:** EV001.LIVROS_AUTORES_CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela inicial]].

**EVENTO:** EV002.LIVROS_MAIS_VENDIDOS.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para [[tela mais vendidos]].

**EVENTO:** EV003.LIVROS_MAIS_RECOMENDADOS.CLICK
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela mais vendidos]].

**EVENTO:** EV004.ICON_SEARCH.CLICK 
**ENTRADA:** Nome do livro, Gênero, Autor.
**SAÍDA:** Livros recomendados mais vendidos de acordo com a procura.

**EVENTO:** EV005.ICON_BELL.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionado para notificações de sugestões de livros.

**EVENTO:** EV006.ICON_ALIGN.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionado para menu goBook.

**EVENTO:** EV007.LER.CLICK 
**ENTRADA:** ... 
**SAÍDA** Redirecionamento para a [[tela ler ebook]]. 

**EVENTO:** EV008.ADICIONAR_A_ESTANTE.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela adicionar a estante]].

**EVENTO:** EV009.ADICIONAR_AO_CARRINHO.CLICK
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela meu carrinho]].

**EVENTO:** EV010.COMPRAR.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela pagamento]].

**EVENTO:** EV011.DAR_FEEDBACK.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela feedback]].

#### PROTOTIPO-021.ADICIONAR_ESTANTES
![image](https://i.imgur.com/NmMszw3.png)
**EVENTO:** EV001.ADICIONAR_A_ESTA_ESTANTE.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Livro adicionado a estante.

**EVENTO:** EV002.ICON.SAIR.CLICK
**ENTRADA:** ...
**SAÍDA** Redirecionamento para a [[tela sobre o livro]].

#### PROTOTIPO-022.FEEDBACK
![image](https://i.imgur.com/2AVBDWL.png)
**EVENTO:** EV001.ENVIAR.CLICK 
**ENTRADA:** Escreva aqui seu FeedBack, Avaliação. 
**SAÍDA:** Redirecionado para a [[tela sobre o livro]].

**EVENTO:** EV002.CANCELAR.CLICK 
**ENTRADA:** Escreva aqui seu FeedBack, Avaliação. 
**SAÍDA:** Cancelar informações de envio do FeedBack.

#### PROTOTIPO-023.PAGAMENTO
![image](https://i.imgur.com/0j3ojRG.png)
**EVENTO:** EV001.ICON_VOLTAR.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela menu]].

**EVENTO:** EV002.FORMA_DE_PAGAMENTO.CLICK 
**ENTRADA:** Cartão, Pontos.
**SAÍDA:** Redirecionamento para a [[tela pagamento cartão]].


#### PROTOTIPO-024.PAGAMENTO_CARTÃO
![image](https://i.imgur.com/uHOIP8v.png)
**EVENTO:** EV001.FINALIZAR_COMPRA.CLICK 
**ENTRADA:** Código de segurança, Forma de pagamento. 
**SAÍDA:** Mensagem confirmação.

**EVENTO:** EV002.ICON_VOLTAR.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela pagamento]].

#### PROTOTIPO-025.PAGAMENTO_PONTOS
![image](https://i.imgur.com/5b9OLlw.png)
**EVENTO:** EV001.FINALIZAR_COMPRA 
**ENTRADA:** ... 
**SAÍDA:** Mensagem confirmação.

**EVENTO:** EV002.ICON_VOLTAR.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela pagamento]].
 
#### PROTOTIPO-026.NOVIDADES_EBOOK
![image](https://i.imgur.com/8Susp8R.png)
**EVENTO:** EV001.MAIS_INFORMAÇÕES.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela sobre o livro]].

**EVENTO:** EV002.LER_EBOOK.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela ler ebook]].

**EVENTO:** EV003.ADICIONAR_AO_CARRINHO.CLICK
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela meu carrinho]].

**EVENTO:** EV004.AVALIAÇÃO.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela feedback]].

**EVENTO:** EV005.ICON_ALIGN.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionado para menu goBook.

#### PROTOTIPO-027.LER_EBOOK
![image](https://i.imgur.com/6ZjufaR.png)
**EVENTO:** EV001.ICON_ANGULO_DUPLO.CLICK
**ENTRADA:** Mais páginas.
**SAÍDA:** Visualizar mais paginas.

#### PROTOTIPO-028.MENU_ADMINISTRADOR
![image](https://i.imgur.com/JOxQPYz.png)
**EVENTO:** EV001.ICON_ALIGN.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionado para menu goBook.

**EVENTO:** EV002.GERENCIAR_EBOOKS.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela gerenciar ebooks]].

**EVENTO:** EV003.CLASSIFICAR_FEEDBACKS.CLICK
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela classificar feedbacks]].

**EVENTO:** EV004.ADICIONAR_ADMIN.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela adicionar administrador]].

#### PROTOTIPO-029.ADICIONAR_EBOOKS
![image](https://i.imgur.com/ejMUMCV.png)
**EVENTO:** EV001.ICON_ALIGN.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionado para menu goBook.

**EVENTO:** EV002.ADICIONAR.CLICK 
**ENTRADA:** Nome eBook, Descrição, Foto eBook, Preço, Páginas, Editora, Edição, Gêneros, Gênero Forte, Número de Série, Código de barras, Idioma, Idioma Original, Inserção. 
**SAÍDA:** Novo eBook criado e enviado a novidades de usuários.

**EVENTO:** EV003.CANCELAR.CLICK 
**ENTRADA:** Nome eBook, Descrição, Foto eBook, Preço, Páginas, Editora, Edição, Gêneros, Gênero Forte, Número de Série, Código de barras, Idioma, Idioma Original, Inserção. 
**SAÍDA:** Cancelar informações adicionadas a um novo ebook. 

**EVENTO:** EV004.ALTERAR_EBOOK.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela alterar ebook]].

**EVENTO:** EV005.EXCLUIR_EBOOK.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela excluir ebook]].

#### PROTOTIPO-030.GERENCIAR_EBOOKS
![image](https://i.imgur.com/sAPW2X4.png)
**EVENTO:** EV001.ICON_ALIGN.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionado para menu goBook.

**EVENTO:** EV002.ADICIONAR_EBOOK.CLICK
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela adicionar ebook]].

**EVENTO:** EV003.EXCLUIR_EBOOK.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela excluir ebook]].

**EVENTO:** EV004.ALTERAR_INFORMAÇÕES.CLICK
**ENTRADA:** ...
**SAÍDA:** Redirecionamento para a [[tela alterar ebook]].

**EVENTO:** EV004.ICON_SEARCH.CLICK 
**ENTRADA:** Nome do livro, Gênero, Autor. 
**SAÍDA:** Ebook de acordo com a procura.

#### PROTOTIPO-031.ALTERAR_EBOOK
![image](https://i.imgur.com/7eemSjw.png)
**EVENTO:** EV001.ICON_ALIGN.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionado para menu goBook.

**EVENTO:** EV002.ICON_SEARCH.CLICK
**ENTRADA:** Nome do livro, Gênero, Autor.
**SAÍDA:** Ebook de acordo com a procura.

**EVENTO:** EV003.ADICIONAR_EBOOK.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela adicionar ebook]].

**EVENTO:** EV004.EXCLUIR_EBOOK.CLICK 
**ENTRADA:** ...
**SAÍDA:** Redirecionamento para a [[tela excluir ebook]].

**EVENTO:** EV005.ALTERAR.CLICK 
**ENTRADA:** Nome eBook, descrição, foto ebook, preço, páginas, editora, edição, código de barras, idioma, idioma original, inserção. 
**SAÍDA:** Alteração de ebook na plataforma.

**EVENTO:** EV006.CANCELAR.CLICK 
**ENTRADA:** Nome eBook, Descrição, Foto eBook, Preço, Páginas, Editora, Edição, Código de barras, Idioma, Idioma Original, Inserção.
**SAÍDA:** Cancelar informações adicionadas a alteração de ebook na plataforma.

#### PROTOTIPO-032.EXCLUIR_EBOOK
![image](https://i.imgur.com/649aWTq.png)
**EVENTO:** EV001.ICON_ALIGN.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionado para menu goBook.

**EVENTO:** EV002.ADICIONAR_EBOOK.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela adicionar ebook]].

**EVENTO:** EV003.ALTERAR_EBOOK.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela alterar ebook]].

**EVENTO:** EV004.ALTERAR_INFORMAÇÕES.CLICK
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela alterar ebook]].

**EVENTO:** EV004.ICON_SEARCH.CLICK 
**ENTRADA:** Nome do livro, Gênero, Autor.
**SAÍDA:** Ebook de acordo com a procura.

#### PROTOTIPO-033.FINALIZAR_EXCLUSÃO
![image](https://i.imgur.com/wpPn4re.png)
**EVENTO:** EV001.SIM.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Excluir eBook do carrinho.

**EVENTO:** EV002.NAO.CLICK
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela excluir ebook]].

#### PROTOTIPO-034.CLASSIFICAR_FEEDBACKS
![image](https://i.imgur.com/0lj5aRj.png)
**EVENTO:** EV001.ICON_ALIGN.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionado para menu goBook.

**EVENTO:** EV002.VER_MAIS.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionamento para a [[tela aprovar feedbacks]].

**EVENTO:** EV003.ICON_CARET_DOWN.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Visualizar mais FeedBacks pendentes.

**EVENTO:** EV004.ICON_SEARCH.CLICK 
**ENTRADA:** Nome, Autor, Livro, FeedBack por número.
**SAÍDA:** Feedbacks de acordo com a procura.

#### PROTOTIPO-035.APROVAR_FEEDBACK
![image](https://i.imgur.com/ZrKMBn6.png)
**EVENTO:** EV001.ICON_ALIGN.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Redirecionado para menu goBook.

**EVENTO:** EV002.APROVAR.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Notificação de aprovação do FeedBack enviada no email para usuário.

**EVENTO:** EV003.RECUSAR.CLICK 
**ENTRADA:** ... 
**SAÍDA:** Notificação de recusação do FeedBack enviada no email para usuário. 

#### PROTOTIPO-36.ADICIONAR_ADMINISTRADOR
![image](https://i.imgur.com/cMWwCMw.png)
**EVENTO:** EV001.ICON_ALIGN.CLICK
**ENTRADA:** ... 
**SAÍDA:** Redirecionado para menu goBook.

**EVENTO:** EV002.CADASTRAR_ADMIN.CLICK 
**ENTRADA:** Nome, RG, CPF, Gênero, Cargo, Data de nascimento. 
**SAÍDA:** Redirecionamento para a [[tela menu administrador]].

## 6. MODELO ENTIDADE-RELACIONAMENTO

### DIAGRAMA
![image](https://i.imgur.com/iw1v60b.png)
### DETALHAÇÃO DO DIAGRAMA
**TB_LOGIN:** Guarda as informações de login tanto admin como usuários.
**TB_CONTRELE_ADMIN:** Guarda informações de controle dos admin.
**TB_USUARIO:** Guarda os dados salvos dos usuários.
**TB_ADMIN:** Guarda os dados salvos dos admin.
**TB_ENDERECO:** Guarda as informações de endereço tanto admin como usuarios.
**TB_FEEDBACK:** Guarda os Feedbacks feitos atraves dos usuários.
**TB_CLIENTE:** Guarda as informações dos clientes, aqueles que irão usufruir da biblioteca virtual.
**TB_GERERO_FAV_CLIENTE:** Guarda os gêneros favoritos atraves do usuário.
**TB_GENERO:** Guarda as informações dos gêneros liberados dos devidos livros.
**TB_GENERO_EBOOK:** Guarda os gêneros do ebook selecionados atraves dos usuários.
**TB_EBOOK:** Guarda as informações dos livros salvos no ebook.
**TB_ESTANTE:** Guarda as informações sobre os livros salvos na estante.
**TB_PRATELEIRA:** Guarda as informações sobre os livros salvos na prateleira.
**TB_PRATELEIRA_ITEM:** Guarda as informações sobre os intens de uma prateleira.
**TB_AUTOR:** Guarda as informações sobre o autor.
**TB_PGTO_AUTOR:** Guarda as informações relizadas de um pagamento do autor.
**TB_CARTAO:** Guarda as informações sobre o cartão cadastrados.
**TB_PGTO_ASSINATURA:** Guarda as informações de um pagamento da assinatura relizada.
**TB_VENDA:** Guarda informações da venda realizada através de um usuário.
**TB_VENDA_ITEM:** Guarda informações sobre os itens de uma venda. 
**TB_PRESENTE:** Guarda as informações de presente de livro para outro usuário.

## 7. MAPEAMENTO DAS ROTAS


### Controllers
#### - BuscarImagem

    Rota Buscar foto
    - Recebe: caminho imagem
    - Imagem: Imagem
    
#### - ConsultarEbooks
    Rota: EbooksPorGenero
    - Recebe: -
    - Retorna: modelo de response "EbookResponse"
    
    Rota: PesquisaEbookAutor
    - Recebe: nome do autor/ebook
    - Retorna: modelo de response "EbookResponse"
    
    Rota: EbooksCliente
    - Recebe: id de login do cliente
    - Retorna: modelo de response "EbookResponse"
    
    Rota: ConsultarGeneros
    - Recebe: -
    - Retorna: modelo de response "GenerosResponse"
    
    Rota: ConsultarAutores
    - Recebe: -
    - Retorna: modelo de response "AutorResponse"
    
#### - GerenciarCliente 

    Rota: Cadastrar
    - Rebece: modelo request CadastrarCliente
    - Retorna: modelo response "MensagemResponse"
    
    Rota: Consultar
    - Rebece: id de login
    - Retorna: modelo response "ClienteResponse"
    
    Rota: Alterar
    - Rebece: modelo request "CadastrarCliente" e id de login
    - Retorna: modelo response "MensagemResponse"
    
    Rota: Deletar
    - Rebece: id de login
    - Retorna: modelo response "MensagemResponse"
    
#### - GerenciarEbooks

    Rota: CadastrarEbook
    - Recebe: modelo request "EbookRequest"
    - Retorna: modelo response "EbookResponse" 
    
#### - Login

    Rota: Login
    - Recebe: modelo request "LoginRequest"
    - Retorna: modelo response "LoginResponse"

    
#### - RecuperarSenha

    Rota: AlterarSenha
    - Recebe: modelo request "AlterarSenhaRequest"
    - Retorna: modelo response "MensagemResponse"
    
    Rota: VerificarEmail
    - Recebe: email do destinatário
    - Retorna: modelo response "MensagemResponse"
    

### Modelos

#### Request


- AlterarSenhaRequest
    
        public int IdLogin { get; set; }
        public string novaSenha { get; set; }

- CadastrarCliente
    public string email { get; set; }
        public string senha { get; set; }
        public string nome { get; set; }
        public string cpf { get; set; }
        public string genero { get; set; }
        public bool? assinante { get; set; }
        public DateTime nascimento { get; set; }
        public IFormFile img { get; set; }
- EbookRequest
    public string nome { get; set; }
        public IFormFile img { get; set; }
        public int autor { get; set; }
        public string sinopse { get; set; }
        public decimal? valor { get; set; }
        public int? qtPaginas { get; set; }
        public string editora { get; set; }
        public string edicao { get; set; }
        public string lingua { get; set; }
        public string linguaOriginal { get; set; }
        public int generoPrincipal { get; set; }
        public List<int> outrosGeneros { get; set; }
        
- LoginRequest

    public string email { get; set; }
    public string senha { get; set; }
    
- VerificarEmailRequest
    public string destinatario { get; set; }
        public string assunto { get; set; }
        public string conteudo { get; set; }
        
#### Response

- AutorResponse
    public int id { get; set; }
        public string autor { get; set; }
    
- ClienteResponse
    
- public string nome { get; set; }
        public string img { get; set; }
        public DateTime? nascimento { get; set; }
        public string cpf { get; set; }
        public string genero { get; set; }
        public bool? assinante { get; set; }
        public int? pontos { get; set; }
        public string email { get; set; }
    
- EbookResponse
public int id { get; set; }
        public string nome { get; set; }
        public string autor { get; set; }
        public string ebook { get; set; }
        public string sinopse { get; set; }
        public decimal? valor { get; set; }
        public int? qtPaginas { get; set; }
        public string editora { get; set; }
        public string edicao { get; set;}
        public string isbn { get; set; }
        public string lingua { get; set; }
        public string linguaOriginal { get; set; }
        public string generoPrincipal { get; set; }
        public List<string> outrosGeneros { get; set; }
    
- ErroResponse
        public string erro { get; set; }
        public int codigo { get; set; } 
        
- GenerosResponse
        public int id { get; set; }
        public string genero { get; set; }
        
- LoginResponse
public int LoginID { get; set; }
        public string Nome { get; set; }
        public string Perfil { get; set; }


- MensagemResponse
public string msg { get; set; }
    
