# Portal do entregador

Projeto feito desde 2019, anteriormente, via google sites <a href="https://sites.google.com/view/contatos-ifood" target="_blank">aqui</a>. em 2022 foquei mais nos estudos de front end e comecei a pôr em prática, esse projeto foi feito para estudos e fixação de conteúdos.

Novo site pode ser acessado <a href='https://portaldoentregador.com.br/'>aqui</a> ou: https://portaldoentregador.com.br/
## Tecnologias utilizadas: 

<div style="display: inline-block">

  <img width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
  <img width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
  <img width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
  <img width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" />
  <img width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
  <img width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />           
          
</div>
<br>
        
  <ul>
    <li>HTML</li>
    <li>CSS3</li>
    <li>Tailwindcss</li>
    <li>AngularJS</li>
    <li>JavaScript</li>
    <li>TypeScript</li>
  </ul>

## APIs Utilizadas:

<ul>
  <li>Open-Meteo <a href="https://open-meteo.com/en">Acesso aqui</a></li>
  <li>IQAIR Air quality API <a href="https://www.iqair.com/commercial/air-quality-monitors/airvisual-platform/api">Acesso aqui</a></li>
</ul>

## Ícones e fontes:

<ul>
  <li>Google Fontes <a href="https://fonts.google.com/icons">Acesso aqui</a></li>
  <li>IconiFy <a href="https://icon-sets.iconify.design/material-symbols/">Acesso aqui</a></li>
  <li>flaticon <a href="https://www.flaticon.com/icon-fonts-most-downloaded">Acesso aqui</a></li>
</ul>

# Objetivo do site:

O site foi criado inicialmente enquanto eu era entregador para ser uma Agenda de contatos úteis para os entregadores de fácil acesso e compartilhamento, de início ele era hospedado e gerenciado pela plataforma <a href="https://sites.google.com/new">GOOGLE SITES</a>. O modelo do site antigo ainda está no ar e pode ser acessado por <a href="https://sites.google.com/view/contatos-ifood">Aqui</a>!

Em função de estudos, iniciei o desenvolvimento da migração de plataformas e decidi ser mais que uma agenda de contatos!

# O site

## Página 1 Contatos

Na tela inicial podemos encontrar o cabeçalho (presente em todas as outras telas) com um botão que leva ao grupo dos entregadores de araraquara.
Logo abaixo, encontramos os cartões de separação dos contatos.

Os contatos estão separados em:

<ul>
  <li>Arrumar celular e acessórios</li>
  <li>Borracheiro</li>
  <li>Costureira</li>
  <li>Arrumar rodas</li>
  <li>Guincho</li>
  <li>Lojas</li>
</ul>

![image](https://user-images.githubusercontent.com/78885438/204788897-b3de05dd-5d11-45c4-a182-40eecd68fde4.png)

Em todos os contatos temos um botão de ações localizado logo após o nome do contato

![image](https://user-images.githubusercontent.com/78885438/204790343-38acd131-3928-4574-87da-378b99709166.png)

Quando pressionado mostra algumas funcionalidades, dentro delas:

<ul>
  <li>WhatsApp</li>
  <li>Telefone</li>
  <li>Endereço</li>
  <li>Reportar</li>
</ul>

![image](https://user-images.githubusercontent.com/78885438/204790686-21582411-837a-473c-9c06-8ad5af2f71f9.png)

Dentre as opções, a única que não aparece em todos os contatos é a de endereço, que só aparece nos contatos que possuem endereço.

## Botão Whatsapp:

![Botão Wathsapp](https://user-images.githubusercontent.com/78885438/204802827-ad7400e9-4d76-4ced-8470-5a36aad14cf2.gif)

## Botão Telefone:

![Botao Telefone (1)](https://user-images.githubusercontent.com/78885438/204807620-8d066a9f-dcb9-46f4-91d5-db7df893a8b0.gif)

## Botão Endereço:

![Botao mapa](https://user-images.githubusercontent.com/78885438/204807824-05b87225-e6e1-41a7-97ad-470b5541cc3e.gif)

## Botão Reportar

![Botão reportar(1)](https://user-images.githubusercontent.com/78885438/204808236-e9438eb7-6697-4f48-98aa-1feb7eaa8a12.gif)

## Botão Adicionar 

* Por enquanto o número é tratado como uma string, futuramente vai ser tratado como número e terá uma máscara para número de telefone!

![Botão new (1)](https://user-images.githubusercontent.com/78885438/204813797-b73cabfb-1780-4523-8c01-8dce414388a4.gif)

# Página 2 Downloads

Essa tela existe pois, uma requisição recorrente dos entregadores é encontrar versões anteriores do app do Ifood entregador, pois em diversas atualizações vem com bugs que atrapalham o serviço dos entregadores.

* Ultilizo um iframe do site <a href="https://br.aptoide.com/">Aptoide</a>.
* Tentei procurar alguma API pública para implementar mas não encontrei nada, então a solução foi usar um Iframe incorporando todo o site do Aptoide na minha aplicação.

![Screen_Recording_20221130_105654_Chrome](https://user-images.githubusercontent.com/78885438/204822210-e371110e-a9fa-4ee8-a5c0-60475af70c06.gif)

# Página 3 Informações:

Nessa tela eu coloquei dados e informações sobre o desenvolvedor do site, no caso, eu.

<ul>
  <li>Whatsapp</li>
  <li>Instagran</li>
  <li>Linkedin</li>
  <li>GitHub<li>
  <li>E-mail</li>
</ul>

Possui também uma parte dedicada a doação, para quem, se quiser, doar e ajudar a manter o site, por enquanto está rodando no gh pages, mas futuramente terá um domínio próprio!

![pagina info](https://user-images.githubusercontent.com/78885438/204837924-fed7beca-c414-4f95-bdd6-00ede8d132d2.gif)

# Página 4 Previsão do tempo.

Página posta para auxiliar os entregadores com o clima atual, usando a localização atual como base.
<ul>
  <li>Objetivo principal da página era aprender sobre o consumo e tratamento de API's</li>
</ul>

![Screen_Recording_20221130_122854_Chrome](https://user-images.githubusercontent.com/78885438/204839718-c685c408-dd3b-474f-ba11-d62063038013.gif)

Possui tratamento de tipos de clima:

![image](https://user-images.githubusercontent.com/78885438/204841662-677ffc38-8805-4d94-a7f1-a254b0423bc8.png)

Possui tratamento de temperatura:

<ul>
  <li>Azul <= 20</li>
  <li>Preto de 21 a < 28</li>
  <li>Vermelho > 28</li>
</ul>

![image](https://user-images.githubusercontent.com/78885438/204840708-e1d08148-1d83-4034-9511-230fd1d880fa.png)

# Lembrete:

Site ainda está sendo desenvolvido, Terá várias alterações ainda!

Atualizado dia: <i>25/05/23</i>
