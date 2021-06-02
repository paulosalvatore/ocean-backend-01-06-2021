# Backend com NodeJs e Express (Parte 1)

Entenda de uma vez por todas o que é backend e quais são as tecnologias envolvidas nesse pedaço tão importante de um software, responsável pela maior parte do processamento de informações e por proteger a camada de banco de dados da aplicação.

Você entenderá desde os princípios do backend, tendo uma introdução completa sobre o assunto e começará a dar os primeiros passos desenvolvendo uma aplicação em NodeJS, com a linguagem de programação JavaScript.

## Tópicos

- O que exatamente é backend?

- Evolução do Backend

- REST (Verbos de comunicação: GET, POST, PUT, DELETE)

- JSON

- Postman/Thunder Client (Criando/fazendo requisições e organizando em collections)

- JSON Viewer

- JavaScript: do frontend para o backend

- NodeJS

- Package Json

- NPM (Node Package Manager)

- Benchmarking

- Criação do projeto

- Início do desenvolvimento da aplicação CRUD

  - Create, Read (All/Single), Update & Delete
  - Criar, Ler (Tudo ou Individual), Atualizar e Remover

- Node Express

- Body-Parser

## O que exatamente é backend?

- **Servidor com 1 camada**
  - Mainframe, acesso pelo terminal, terminal apenas para envio de comandos.
- **Servidor com 2 camadas**
  - Separação entre Frontend e Backend
  - É possível trabalhar essas 2 camadas na mesma aplicação, inclusive
  - **Frontend:** pegar o dado e exibir de forma bonita
    - **Lógica de apresentação:** uso de linguagem de programação para exibir informações
    - **Linguagens usadas no frontend web:** HTML, CSS e JavaScript
      - **HTML:** linguagem de marcação - estrutura da aplicação
      - **CSS:** linguagem de estilização - estilos - deixa as coisas bonitas
      - **JavaScript:** linguagem de programação - comportamento
        - Linguagem interpretada
        - Executado direto no navegador da web (Google Chrome, Mozilla Firefox, etc)
  - **Backend:** pegar o dado e entregar de forma estruturada para o frontend
    - Fornece dados e informações para que o frontend exiba
    - Processar requisições do Frontend e trabalha com os dados
    - Conversa com o banco de dados (possui dados e senha de acesso)
    - É a única camada que conseguimos proteger 100%
    - É a principal camada de proteção/segurança da nossa aplicação
    - **Lógica de negócios:** uso de linguagem de programação para estruturar e organizar informações
    - **Linguagens de programação usadas no backend:** Praticamente qualquer linguagem de programação consegue realizar essa ação. O único requisito é ter suporte para entender requisições HTTP (Hyper Text Transfer Protocol).
      - **As mais comuns são:** NodeJS (JavaScript), Java/Kotlin, PHP, Python, C#, C++, ...
      - **Frameworks?** NodeJS (Express, Nest, Fastify), Java/Kotlin (Spring), Kotlin (Ktor), PHP (Laravel, CodeIgniter, CakePHP, Yii, ...), Python (Django, Flask), C# (.NET Core), C++ (...)
    - **Biblioteca vs Framework:**
      - **Biblioteca:** alguns arquivos de programação que tentam resolver um problema específico
      - **Framework:** várias bibliotecas organizadas de uma certa maneira para resolver vários problemas relacionados a uma determinada implementação. É muito comum também os frameworks fornecerem um padrão de arquitetura de projetos.
        - **Exemplo com API:** Comunicação HTTP, serialização de dados, transformar objetos nativos em formato JSON, renderização de conteúdo, rotas.
    - **NodeJS é um motor: interpretador!**
      - O NodeJS nos permite rodar códigos JavaScript do lado do backend, e não apenas do lado do Frontend.
      - Alguns recursos mais "atuais" de JavaScript estão disponíveis apenas nas versões mais novas do NodeJS.
    - **Interpretador vs Compilador**
      - **Interpretador:** Recebe um arquivo de código e executa imediatamente.
        - NodeJS é escrito em C++.
        - NodeJS é um software como qualquer outro.
        - O NodeJS é um motor (software) escrito em C++ pra interpretar JavaScript!
      - **Compilador:** Um software que recebe um arquivo de código e converte esse código para um arquivo binário.
      - Esse arquivo binário será executado pelo sistema operacional.
  - Em um servidor de 2 camadas, é possível recebermos das duas formas:
    - **1ª forma:** navegador faz uma requisição HTTP para o servidor (backend recebe, constrói o HTML e devolve o frontend); servidor devolve um arquivo HTML (frontend) já com todo o conteúdo preenchido (quem preenche é o backend); esse HTML é exibido pelo navegador.
    - **2ª forma:** navegador faz uma requisição HTTP para o servidor (frontend); Esse servidor (frontend) devolve um arquivo HTML apenas com a estrutura e um arquivo JavaScript que sabe como preencher essa estrutura; JavaScript (ainda no frontend) faz uma outra requisição HTTP para outro servidor (backend); Esse outro servidor (backend) devolve apenas a estrutura de dados e o JavaScript atualiza o HTML com esses dados.
- **Servidor multicamadas**
  - Mais de um frontend
  - Mais de um backend
  - Quantos servidores eu quiser
  - É como se eu quebrasse o backend em várias aplicações
  - Arquitetura de microsserviços
- **REST, Node, NPM, HTTP, Criar projeto**
- **REST (Verbos de comunicação: GET, POST, PUT, DELETE)**
  - Comunicação HTTP
  - Toda comunicação HTTP possui verbos: GET, POST, PUT, DELETE
    - POST: Criar informação
    - GET: Obter informação
  - REST -> CRUD (Create, Read, Update, Delete):
    - [POST] `/mensagens`: **Create**
    - [GET] `/mensagens`: **Read (All)**
    - [GET] `/mensagens/:id` (Ex: `/mensagens/1`): **Read (Single)**
    - [PUT] `/mensagens/:id` (Ex: `/mensagens/1`): **Update**
    - [DELETE] `/mensagens/:id` (Ex: `/mensagens/1`): **Delete**

