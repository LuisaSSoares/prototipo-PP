# Artivista - Documentação do Protótipo

## Objetivo: 
O projeto **Artivista** visa aproximar o artista independente do seu público, facilitando o acesso à suas obras, promovendo a interação e auxiliando na difusão cultural através da tecnologia. Além disso, a plataforma busca ampliar a inclusão de pessoas mais vulneráveis a esse acesso.

## Tecnologias utilizadas: 
HTML5, CSS3 e JavaScript Vanilla

## Funcionalidades implementadas(funcionáveis dentro do primeiro protótipo): 
**Login de Usuários:** permite que os usuários insiram seu e-mail e senha para acessar a plataforma, mas caso não tenham se registrado, poderão fazer um cadastro ou utilizar sua conta do Google. Após concluir a etapa, os usuários tem acesso a página principal (homepage).

**Navegação e Seções separadas conforme classificação artística:**
A página principal (homepage) exibe diferentes seções conforme sua classificação artística. Ao clicar em determinada seção, o usuário é redirecionado ao feed específico.

**Personalização de interface**
Dentro do feed, há a alteração do ícone conforme a seção escolhida. Além disso, há o uso de sessionStorage para as configurações de navegação dentro das seções. 


# Acessibilidade 

## Elementos Visuais:
**1:Todas as imagens têm um texto alternativo (alt)**
Na aplicação, todas as imagens possuem um texto alternativo (alt), visto que o projeto visa ampliar a acessibilidade para deficientes visuais, logo, com esse critério sendo atendido, essas pessoas podem usar leitores de tela que dependem desse recurso para ter acesso a descrição das imagens. 

**2:Os itens não textuais têm uma versão alternativa em texto**
Sim, itens como ícones, botões e áreas possuem uma descrição alternativa em texto. Para isso, foi utilizado 'aria-label' para rotular áreas, informações relevantes e o espaço em que será enviado as imagens e vídeos das postagens, além de 'aria-hidden' para esconder elementos que não precisam ser lidos. Esse critério é importante na aplicação para o controle e manuseamento do leitor de tela, para que leia destaques importantes para o compreendimento do sistema e evitar que elementos decorativos sejam lidos, proporcionando uma melhor experiência aos usuário com deficiência visual.

**3:Não são usadas imagens que contêm blocos de texto**
Não há o uso de imagens com blocos de textos, visto que dificulta a leitura pelo leitor de tela e o rastreamento por buscadores. O site exibe todos os textos de forma nativa no HTML, proporcionando uma aplicação mais leve e estruturada. 

## Formulários:
**4:Todos os campos dos formulários têm uma <label> associada**
Sim, todos os formulários tem uma <label> associada em um input, pois ajudam na navegação por teclado e leitores de tela. 

**5:São usados <fieldset> e <legend> para agrupar os vários campos nos formulários**

**6:O envio dos formulários é feito via input/button e não através de links e JavaScript**

**7:Os erros nos formulários são indicados em texto e junto do campo que contém o erro**

## Uso da cor e elementos que pisca,:
**8:Não é usada apenas a cor para transmitir informação**

**9:Não há elementos que piscam ou mudam de cores repetidamente**

## Navegação:
**10:São fornecidos atalhos para saltar links repetitivos**

**11:O <title> das páginas é claro, direto e percetível e está intimamente relacionado com o conteúdo da mesma**

**12:O site é navegável usando apenas o teclado**

## Legitimidade:
**13:O conteúdo está estruturado de forma semântica**

**14:O idioma da página está indicado no HTML**

**15:As tabelas têm headings <th> definidos**

**16:O site funciona com as imagens desativadas&**

**17:O site é legível e navegável com o CSS desativado**

**18:O site é legível aumentando o texto 2 vezes**