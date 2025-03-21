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
**4:Todos os campos dos formulários têm uma `<label>` associada**
Sim, todos os formulários tem uma `<label>` associada em um input, pois ajudam na navegação por teclado e leitores de tela. 

**5:São usados `<fieldset>` e `<legend>`para agrupar os vários campos nos formulários**
Há o uso de `<fieldset>` e `<legend>` no formulário, permitindo agrupar vários campos nele. Essas propriedade auxiliam na organização e na leitura de tela pelo usuário, melhorando a acessibilidade. 

**6:O envio dos formulários é feito via input/button e não através de links e JavaScript**
Esse requisito não é atendido, pois o envio de formulários depende do JavaScript, pois foram definidas condições em que, se não atendidas, o formulário não será enviado. Por mais que seja relevante para melhorar a acessibilidade, por conta da construção e lógica da aplicação, não consegui aplicar esse critério, mas espero que op aplicativo possa proporcionar uma experiência agradável ao usuário. 

**7:Os erros nos formulários são indicados em texto e junto do campo que contém o erro**
Esse critério é atendido dentro da aplicação. Quando o usuário não insere valores dentro de algum dos inputs, ao invés de exibir um alert, a mensagem de erro definida como (`<span class="erro">`)é exibida abaixo do campo vazio, permitindo um melhor entendimento ao usuário do erro durante a ação. 

## Uso da cor e elementos que pisca:
**8:Não é usada apenas a cor para transmitir informação**
Essa funcionalidade é atendida dentro da aplicação no momento em que o erro é exibido quando o usuário não insere os valores nos inputs durante o preenchimento do formulário. Ao disparar o erro, um símbolo de alerta é exibido ao lado da mensagem, evitando dependência somente das cores. 

**9:Não há elementos que piscam ou mudam de cores repetidamente**
Nenhum elemento usa animações que possam causar desconforto visual. As animações de mudanças dos botões e seções são sutis e seguem a paleta de cores da aplicação. 

## Navegação:
**10:São fornecidos atalhos para saltar links repetitivos**
Esse critério é atendido dentrod a aplicação, visto que em todas as páginas (exceto login) há a logo da aplicação, e ao clicá-lo, o usuário é redirecionado para a página principal (homepage.html), não necessitando que ele volte todas as páginas acessadas para chegar nela. 


**11:O <title> das páginas é claro, direto e percetível e está intimamente relacionado com o conteúdo da mesma**
Cada página tem um título significativo (`<title>`), ajudando usuários a identificarem em que página estão acessando.  

**12:O site é navegável usando apenas o teclado**
A navegação funciona com `Tab` e `Enter`, além das setas para rolar a tela. O site possui efeito de hover e focus nos elementos adequados, além de outline nos inputs do form. No entanto, foi desativado o outline do efeito :hover dentro da barra de pesquisa, mantendo ainda uma estética dentro da aplicação. 

## Legitimidade:
**13:O conteúdo está estruturado de forma semântica**
Há o uso de cabeçalho (`<h1>`), parágrafos (`<p>`), e listas (`<ul>`), permitindo criar um nível hierárquico nos conteúdos e estruturando os conteúdos adequadamente. 

**14:O idioma da página está indicado no HTML**
O atributo `lang="pt-PT"` está definido corretamente em todas as páginas para auxiliar no idioma da leitura de tela.  

**15:As tabelas têm headings <th> definidos**
O projeto não contém tabelas. Esse critério não se aplica.  

**16:O site funciona com as imagens desativadas&**
 O conteúdo permanece legível sem imagens, pois há o uso de `alt` e `aria-label` nelas e nas áreas mais importantes para leitura.  

**17:O site é legível e navegável com o CSS desativado**
 A estrutura HTML semântica garante que o site continue utilizável sem CSS.  

**18:O site é legível aumentando o texto 2 vezes**
Aumentar a fonte em até duas vezes não quebra o layout, permitindo melhor leitura para usuários com deficiência visual.  
