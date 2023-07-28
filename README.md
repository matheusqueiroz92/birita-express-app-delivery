# Birita Express App Delivery

Este é um projeto de uma aplicação de delivery de bebidas escrito em JavaScript utilizando NodeJS. Esta aplicação dispõe de uma estrutura completa de back-end utilizando MySQL e Sequelize, e front-end utilizando React.

## Boas vindas ao repositório do projeto <b><i>Birita Express App de Delivery</i></b>

Colaboradores para desenvolvimento deste projeto: 
- Matheus Queiroz
- Robson Narcizo
- Douglas Fernandes
- Davi Gentil
- Guilherme Pavinato
- Israel Pereira

A partir deste repositório você vai encontrar os detalhes do desenvolvimento e estruturação deste projeto.

Nessa aplicação foram desenvolvidos o back-end e o front-end, sendo feito a integração entre ambos, criando assim uma plataforma de delivery de bebidas.

---

## Pré-requisitos

Antes de começar a utilizar este projeto, certifique-se de que você tenha instalado em sua máquina:

- Node.js (versão 16 ou superior);
- NPM (gerenciador de pacotes do Node.js)

## Como utilizar
1. Faça um clone desse repositório
  - Use o comando: `git clone git@github.com:matheusqueiroz92/birita-express-app-delivery`.

2. Entre na pasta do repositório que você acabou de clonar
  - Use o comando: `cd birita-express-delivery`.

3. Instale as depedências do projeto
  - Use o comando: `npm install`.

<details>
  <summary>
    <strong>🪛 Scripts relevantes do <code>package.json</code> principal</strong>
  </summary><br>

  **Observação:** nesse projeto, foi utilizado o gerenciador de processos `pm2`.

  **São os scripts da raiz do projeto (`./package.json`) e não das aplicações individuais `./front-end/package.json` e `./back-end/package.json`**:

- `start`: Limpa as portas `3000` e `3001` e simula a inicialização no avaliador. Também prepara o campo rodando o `Sequelize` para restaurar o **banco de dados de testes** (final `-test`) e sobe a aplicação com `pm2` em modo `fork` (uma instância para cada aplicação). Nesse modo, as alterações não são assistidas;
  - *uso (na raiz do projeto): `npm start`*

- `stop`: Para e deleta as aplicações rodando no `pm2`;
  - *uso (na raiz do projeto): `npm stop`*

- `dev`: Limpa as portas `3000` e `3001` e sobe a aplicação com `pm2` em modo `fork` (uma instância pra cada aplicação). Nesse modo, as atualizações são assistidas (modo `watch`);
  - *uso (na raiz do projeto): `npm run dev`*

- `dev:prestart`: A partir da raiz, esse comando faz o processo de instalação de dependências (`npm i`) nos dois projetos (`./front-end` e `./back-end`) e roda o `Sequelize` no `./back-end` (lembrar de configurar o `.env` no mesmo);
  - *uso (na raiz do projeto): `npm run dev:prestart`*

- `db:reset`: Roda os scripts do `Sequelize` restaurando o **banco de dados de desenvolvimento** (final `-dev`). Utilize esse script caso ocorra algum problema no seu banco local;
  - *uso (na raiz do projeto): `npm run db:reset`*

- `db:reset:debug`: Roda os scripts do `Sequelize` restaurando o **banco de dados de desenvolvimento** (final `-dev`). Utilize esse script caso ocorra algum problema no seu banco local. Esse comando também é capaz de retornar informações detalhadas de erros (quando ocorrerem no processo);
  - *uso (na raiz do projeto): `npm run db:reset:debug`*

- `test <nomes-dos-arquivos>`: Roda todos os testes (ou uma parte deles caso `<nomes-dos-arquivos>` seja definido) utilizando o **banco de dados de testes** (final `-test`);
  - *uso (na raiz do projeto): `npm test`, `npm test 01login 02register` ou ainda `npm run test 01 02`*

- `test:dev <nomes-dos-arquivos>`: Roda todos os testes (ou uma parte deles caso `<nomes-dos-arquivos>` seja definido) utilizando o **banco de dados de desenvolvimento** (final `-dev`);
  - *uso (na raiz do projeto): `npm run test:dev`, `npm run test:dev 01login 02register` ou ainda `npm test:dev 01 02`*;

- `test:dev:open <nomes-dos-arquivos>`: Roda todos os testes (ou uma parte deles caso `<nomes-dos-arquivos>` seja definido) utilizando o **banco de dados de desenvolvimento** (final `-dev`), exemplo `npm test:dev:open 01login 02register` ou ainda `npm test:dev:open 01 02`. Esse teste deve abrir uma janela mostrando o comportamento das páginas;
  - *uso (na raiz do projeto): `npm run test:dev:open`, `npm run test:dev:open 01login 02register` ou ainda `npm test:dev:open 01 02`*;

- `test:dev:report "<nomes-dos-arquivos>"`: Roda todos os testes (ou uma parte deles caso `"<nomes-dos-arquivos>"` seja definido) utilizando o **banco de dados de desenvolvimento** (final `-dev`). Esse teste devolve um output em texto com o resultado de todos os testes. Os `logs` são gerados em `./__tests__/reports`.
  - *uso (na raiz do projeto): `npm run test:dev:report`, `npm run test:dev:report "01login 02register"` ou ainda `npm run test:dev:report "01 02"`*;

</details>


<details>
  <summary>
    <strong>🎛 Linter</strong>
  </summary><br>

## ESLint

  Para fazer a análise estática do código neste projeto, vamos utilizar o linter [ESLint](https://eslint.org/). Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível e de fácil manutenção!

  ➡️ Este projeto já vem com as dependências relacionadas ao _linter_ configuradas nos arquivos `package.json` nos seguintes caminhos:
    - `birita-express-app-delivery/back-end/package.json`
    - `birita-express-app-delivery/front-end/package.json`

  ➡️ Para poder rodar o `ESLint` basta:

- Executar o comando `npm install` dentro do projeto, de forma individual, ou seja, execute esse comando dentro da pasta `back-end` e também na pasta `front-end`;

- Depois execute o comando `npm run lint` dentro de cada uma dessas pastas, assim você verifica as particularidades individualmente;

- Se a análise do `ESLint` encontrar problemas no seu código, eles serão mostrados no seu terminal.
- Se não houver problema no seu código, nada será impresso no seu terminal.

- Você pode também instalar o plugin do `ESLint` no `VSCode`. Para isso, bastar ir em extensions e baixar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
  
  👀 **De olho na dica**: abra separadamente cada pasta do projeto (`back-end` e `front-end` em VSCodes separados, para tirar proveito do `ESLint` individual de cada projeto).

  ⚠️ **Importante**: Devido ao fato de as configurações das regras do `ESLint` dos projetos de front e back serem diferentes, é preciso executar o `ESLint` em cada projeto.

## StyleLint

  ➡️ Usaremos também o [StyleLint](https://stylelint.io/) para fazer a análise estática do seu código, especialmente em Front-end.

  ➡️ Para poder rodar o `StyleLint` em um projeto basta:

- Executar o comando `npm install` dentro do projeto de front-end;

- Depois execute o comando `npm run lint:styles`;

- Se a análise do `StyleLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal;
- Se não houver problema no seu código, nada será impresso no seu terminal.

  ➡️ Caso ainda fique alguma dúvida, você pode consultar nosso conteúdo sobre [`ESLint`](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/3b1546b5-f7bc-40f7-a674-77b16c408756/lesson/0c9e8c0e-24c3-4526-ba6b-60d95913e022)

  ⚠️ **Importante**: o Stylelint é aplicável apenas no front-end.

  > ⚠️ **Importante**: Pull Requests com issues de Linter não serão avaliadas. Atente-se para resolvê-las antes de finalizar o desenvolvimento.

</details>


<details>
  <summary>
    <strong>🏦 Banco de dados e Sequelize</strong>
  </summary><br>

## Banco de dados

  Para o banco de dados, foi utilizado o ORM `Sequelize`, que fará interface com o `MySQL`. Para isso, atente-se às seguintes orientações:

- Utilize para referência de criação de `migrations` e `seeders` o arquivo `./db.example.sql`;
- O [Diagrama de ER](./assets/readme/erdr.png) também pode ajudar a "visualizar" o banco de dados;
- A estrutura do banco de dados deve ser respeitada.

## Sequelize

  ⚠️ **A configuração do sequelize pode ser considerado o requisito zero do projeto**, dado que a maior parte dos testes dependem da estrutura de alguma tabela para realização de testes, **portanto, deve ser feita primeiro**.

  ⚠️ Antes de iniciar a aplicação, garanta que o Sequelize rode corretamente no `./back-end` (pela raiz do projeto, o comando `npm run db:reset` será de grande ajuda, pois serve para restaurar o banco de dados `-dev`). O avaliador vai executar funções do sequelize para garantir a estrutura do banco de dados.

  O projeto provê uma estrutura inicializada do ORM (em `./back-end/src/database`). 
  
  Foram desenvolvidas as **migrations** e **seeders** corretamente, seguindo o modelo em `./db.example.sql`.

- Esse projeto fornece por padrão o arquivo `.sequelizerc` em `.back-end` para configurações do padrão de pastas no Sequelize.

- **Opcionalmente no desenvolvimento local, você pode alterar o valor `EVAL_ALWAYS_RESTORE_DEV_DB` do arquivo `.env` em `./back-end` para `false`**, o que persistirá os dados dos testes locais durante os mesmos. Essa opção pode gerar implicações para a performance e confiabilidade do teste local, já que o avaliador pode se comportar mal caso haja uma quantidade grande de registros para avaliar. Caso ocorra algum problema, utilize o comando `npm run db:reset` ou `npm run db:reset:debug` (para encontrar erros) pela raiz do projeto para restaurar o banco, ou altere de volta a opção `EVAL_ALWAYS_RESTORE_DEV_DB` para `true`.

</details>

<details>
  <summary>
    <strong>🏗️ Preparando o campo e iniciando o projeto</strong>
  </summary><br>

- ⚠️ O projeto só instala as dependências com a versão 16 do `node` para evitar conflitos de versão, caso não tenha essa versão instalada você pode usar o [`nvm`](https://github.com/nvm-sh/nvm#installing-and-updating) para fazer o gerenciamento de versões.


- ⚠️ **Para testes locais, é fundamental configurar o arquivo de variáveis de ambiente `.env` (de `environment`) dentro da pasta `./back-end`** (ele é o único `.env` no projeto), conforme exemplo em `.env.example`, na mesma pasta. Esse arquivo servirá de referência para o avaliador e caso não exista, o avaliador vai utilizar valores `default` para o processo (O que pode estourar erro no teste local, caso suas configurações não sejam as mesmas).

- ⚠️ **Nesse projeto, existe a necessidade de manter e subir para o repositório o arquivo `jwt.evaluation.key`, que também deve estar em `./back-end`**. Esse arquivo deve conter única e exclusivamente a chave utilizada para criptografia com JWT, que também vai ser testado pelo avaliador. Nesse sentido, esse arquivo pode ser lido por sua aplicação na hora de trabalhar com `tokens`.

- ⚠️ **Inicie o projeto pela raiz, utilizando o comando `npm i`**. Após isso, é possível fazer a instalação de ambos os aplicativos (back e front) através da raiz do projeto, utilizando o comando `npm run dev:prestart` (esse comando também restaurará o banco de dados, caso o `.env` esteja configurado corretamente).

</details>

<details>
  <summary>
    <strong>👷 Estruturação do projeto</strong>
  </summary><br>

  Para facilitar o entendimento, podemos dividir a aplicação em **4 fluxos principais**, **uma validação de status entre cliente e pessoa vendedora** e **cobertura de testes (`front-end` e `back-end`)**:

- **Fluxo Comum** que compreende:
  - (1) Tela de Login (`01login.test`);
  - (2) Tela de Registro (`02register.test`).

- **Fluxo do Cliente** que compreende: :
  - (3) Tela de Produtos (`03customer_products.test`);
  - (4) Tela de Checkout (`04customer_checkout.test`);
  - (5) Tela de Pedidos (`05customer_orders.test`);
  - (6) Tela de Detalhes do Pedido (`06customer_order_details.test`).

- **Fluxo da Pessoa Vendedora** que compreende:
  - (7) Tela de Pedidos (`07seller_orders.test`);
  - (8) Tela de Detalhes/Controle do Pedido (`08seller_order_details.test`).

- **Validação do Status do Pedido** que compreende:
  - (9) Teste de status (`09customer_seller_status_sync.test`);

- **Fluxo da Pessoa Administradora** que compreende:
  - (10) Tela de gerenciamento de usuários (`11admin_manage_users.test`).

- **Testes da aplicação** que compreende:
  - (11) Testes de cobertura (`12coverage_tests.test`).

- ⚠️ **Importante** ⚠️: a tela de login deve ser capaz de direcionar para a tela principal de cada pessoa usuária, sendo as páginas:
  - Do cliente: `/customer/products`,
  - Da pessoa vendedora:  `/seller/orders`,
  - Da pessoa administradora: `/admin/manage`

</details>

<details>
  <summary>
    <strong>🎨 Construção do Front-end e Componentização</strong>
  </summary><br>

## Construção do Front-end

- Para servir arquivos estáticos como imagens no back-end, foi utilizado o seguinte path:`./back-end/public`;
- ⚠️**Importante**: o banco de imagens pode ser [baixado aqui](./assets/images.zip);

## Componentização

  O **protótipo** possui um conjunto de **componentes** React para que seja possível fazer o maior reaproveitamento possível de cada estrutura.

</details>

<details>
  <summary>
    <strong>🤲 Escrevendo seus testes</strong>
  </summary>
  
- ⚠️ O projeto avaliará separadamente a cobertura de testes da aplicação _front-end_ e da aplicação _back-end_, ou seja, é necessário implementar os arquivos de testes de cada parte da aplicação, tanto _front-end_ quanto _back-end_.
- Esse projeto não avalia o tipo de teste implementado, ou seja, se é _teste unitário_ ou _teste de integração_. Ambos se aplicam ao projeto, e fica a critério de cada grupo ou indivíduo decidir qual tipo de teste aplicar, inclusive podendo usar os dois complementarmente. Portanto os testes avaliativos apenas medirão a cobertura (_coverage_) por quantidade de linhas e porcentagem.
  
</details>
  
<details>
  <summary>
    <strong>⚠️ Upload de arquivos</strong>
  </summary>

- Caso necessite realizar upload de algum arquivo/imagem, pode utilizar a ferramenta/tecnologia de sua preferência, ressaltamos aqui:
  - [Express Static](https://expressjs.com/pt-br/starter/static-files.html), uma ferramenta simples e prática, já integrada ao express para servir arquivos estáticos.
  - Multer, uma ferramenta mais completa sobre a qual temos um conteúdo na parte de [Real Life Engineer](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/2b8cf38c-5587-4e1d-9778-9083ed02d3f2/lesson/2300b1ee-d7d9-40f1-8d0d-67c4b3cd725b).

</details>

<details>
  <summary>
    <strong>🔄 Persistência no LocalStorage</strong>
  </summary>
  
  - Para persistir informações como produtos no carrinho, foi utilizado o [context](https://reactjs.org/docs/context.html), onde foi criado um hook customizado para isolar a lógica de persistência do restante do seu código, como é sugerido [nesse artigo](https://jdudzik.medium.com/persistent-data-with-react-hooks-and-context-api-3f3f18ce947). Você pode encontrar diferentes sugestões e estratégias pesquisando por algo como: `react context persist`.
  
</details>

<br>


## O projeto foi desenvolvido em requisitos apresentados a seguir:

<br>

### `01 Desenvolvimento da tela de Login`

Todos os testes desse arquivo:

- Verificarão se o banco de dados contém as pessoas usuárias padrão (conforme referência em `db.example.sql`);
- Farão a navegação para a página principal em `localhost:3000/login`.

---

#### 1 - Cria uma tela de login que deve ser acessível pelos endpoints / e /login no navegador

**Observações técnicas**

- Garante que a aplicação possui acesso a uma rota `/login`;
- Garante que a rota padrão (`/`) deve fazer redirecionamento para rota `/login`.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador navegará para o endereço do host utilizando o endpoint `/`;
- O avaliador verificará o redirecionamento para página `/login`;
- O avaliador navegará para o endereço do host utilizando o endpoint `/login`.


</details>

---

#### 2 - Crie os elementos da tela de login com os data-testids disponíveis no protótipo

**Observações técnicas**

- Se oriente pela seguinte tela do protótipo: [`Comum / Login`](#construcao-do-front-end-e-componentizacao);

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador buscará pelos elementos fundamentais aos demais testes.

</details>

---

#### 3 - Desenvolva a tela de login de maneira que ela impossibilite o login com dados mal formatados

**Observações técnicas**

- A senha recebe qualquer tipo de caractere;
- Aqui, os critérios para considerar dados de login **mal formatados** são:
  - Email incompleto, fora de um padrão comum como: `<email>@<domínioPrincipal>.<domínioGenérico>`;
  - Senha com número de caracteres menor que `6`.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador testará 3 situações aleatórias diferentes (uma para cada validação) de maneira isolada, sendo uma delas válida;
- O avaliador testará seu formulário com as 3 situações de maneira sequencial;
- O avaliador não vai executar o login pelo botão de login, ele validará se o botão ficará habilitado ou não, a depender dos critérios durante o input dos dados;
- É esperado que haja a validação dos dados durante a escrita dos mesmos.

</details>

---

#### 4 - Desenvolva a tela de login de maneira que ela impossibilite o login com dados inexistentes no banco de dados

**Observações técnicas**

- Sua página deve ser capaz de alertar a pessoa usuária de que aquele login é inválido após sua tentativa, já que apesar de formatado corretamente, os dados não existem no banco de dados.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador tentará fazer login através do botão de login, com dados aleatórios válidos;
- O avaliador espera que haja uma requisição `POST` para API, que retorne o status `404 - Not found`;
- O avaliador deve identificar que o endereço da página não foi alterado;
- O avaliador espera que apareça na tela um elemento, antes oculto, com uma mensagem de erro qualquer.
  - Elemento: `common_login__element-invalid-email`

</details>

---

#### 5 - Desenvolva a tela de login de maneira que ela possibilite fazer o login com dados válidos e existentes no banco de dados

**Observações técnicas**

Sua página deve ser capaz de utilizar os dados do cliente previstos em `db.example.sql`:

- Note que, a senha armazenada no banco é uma [`hash md5`](https://pt.wikipedia.org/wiki/MD5), cuja tradução também está comentada no arquivo;
- Sua API deve ser capaz de traduzir uma senha comum para uma `hash md5`, comparando-a e validando-a com a do banco de dados;
- É possível utilizar bibliotecas de terceiros como a [`md5`](https://www.npmjs.com/package/md5) ou a nativa [`crypto`](https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options), para conversão de valores para `md5`.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador tentará fazer a ação de login com dados válidos. **Esse teste pressupõe a validade de anteriores**;
  - O avaliador utilizará o e-mail `zebirita@email.com` e senha `$#zebirita#$` para fazer o login;

</details>

---

### `02 Desenvolvimento da tela de Registro`

Todos os testes desse arquivo:

- Farão a navegação para a página principal em `localhost:3000/login`;
- Farão a navegação para a página de registro através do `Botão de registro`;

---

#### 6 - Crie uma tela de registro que deve ser acessível via endpoint /register no navegador e pelo botão de registro na tela de login

**Observações técnicas**

- Aqui deve-se garantir que a aplicação possui acesso a uma rota `/register`;
- Também deve ser possível acessar a tela de registro clicando no botão de cadastro via tela de `login`.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador navegará para o endereço do host utilizando o endpoint `/register`;
- O avaliador tentará, pela tela de login, acessar a página de registro clicando no `Botão de cadastro`.

</details>

---

#### 7 - Crie os elementos da tela de registro com os data-testids disponíveis no protótipo

**Observações técnicas**

- Se oriente pela seguinte tela do protótipo: [`Comum / Cadastro`](#construcao-do-front-end-e-componentizacao);

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador buscará pelos elementos fundamentais aos demais testes.

</details>

---

#### 8 - Desenvolva a tela de registro de maneira que ela impossibilite o cadastro com dados mal formatados

**Observações técnicas**

- A senha recebe qualquer tipo de caractere;
- Aqui, os critérios para considerar os dados mal formatados são:
  - Nome completo com número de caracteres menor que `12`.
  - Email incompleto, fora de um padrão comum: `<email>@<domínioPrincipal>.<domínioGenérico>`;
  - Senha com número de caracteres menor que `6`.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador testará 4 situações aleatórias diferentes (uma para cada validação) de maneira isolada, sendo uma delas válida;
- O avaliador testará seu formulário com as 4 situações de maneira sequencial;
- O avaliador não vai executar o registro pelo botão de registro. Ele validará se o botão ficará habilitado ou não, a depender dos critérios durante o input dos dados;
- É esperado que haja a validação dos dados durante a escrita dos mesmos.

</details>

---

#### 9 - Desenvolva a tela de registro de maneira que ela possibilite cadastrar com dados válidos

**Observações técnicas**

Sua página deve ser capaz de cadastrar pessoas usuárias com dados válidos:

- Note que a senha deve ser armazenada no banco como uma [`hash md5`](https://pt.wikipedia.org/wiki/MD5). A tradução deve ocorrer na API;
- É possível utilizar bibliotecas de terceiros como a [`md5`](https://www.npmjs.com/package/md5) ou a nativa [`crypto`](https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options), para conversão de valores para `md5`.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador tentará fazer a ação de cadastro com dados aleatórios válidos, validando-os posteriormente no banco de dados;
- O avaliador espera que haja uma requisição `POST` para API ao clicar no `Botão de registro`, que retorne o status `201 - Created`;
- O avaliador espera acessar uma página `localhost:3000/customer/products` como padrão para o usuário do tipo cliente;
- Não é necessário ter a página pronta, mas a rota no front deve estar acessível para que o avaliador a identifique.

</details>

---

#### 10 - Desenvolva a tela de registro de maneira que ela impossibilite o cadastro de um usuário já existente

**Observações técnicas**

- Sua página deve impedir o cadastro de pessoas com o mesmo Nome ou E-mail.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador tentará realizar o fluxo de cadastro anterior duas vezes, com um dado gerado aleatoriamente.
- Na primeira vez o avaliador espera que haja uma requisição `POST` para API ao clicar no `Botão de registro`, que retorne o status `201 - Created`;
- Na segunda vez o avaliador espera que haja uma requisição `POST` para API ao clicar no `Botão de registro`, que retorne o status `409 - Conflict`;
- O avaliador espera que apareça na tela um elemento, antes oculto, com uma mensagem de erro qualquer.
  - Elemento: `common_register__element-invalid_register`;

</details>

---

## `Fluxo do Cliente`

O fluxo do cliente deve garantir que seja possível **navegar e escolher produtos**, **adicionar produtos ao carrinho**, **fazer checkout (gerar uma nova venda)**, **consultar pedidos** e **acessar detalhes do mesmo**.

---

### `03 Desenvolvimento da tela de Produtos do Cliente`

Todos os testes desse arquivo:

- Farão o fluxo de login com o cliente "Zé Birita" (o login é sempre validado nos testes);
- Esse fluxo deve dar acesso a uma página padrão de produtos em `localhost:3000/customer/products`;
- Verificarão no banco de dados, se consta a lista de produtos padrão, conforme a tabela `products` do modelo em `db.example.sql`.

---

#### 11 - Crie uma tela de produtos do cliente contendo uma barra de navegação - navbar -, que servirá também para demais telas das pessoas usuárias

**Observações técnicas**

- Se oriente pela seguinte tela do protótipo: [`Cliente / Produtos`](#construcao-do-front-end-e-componentizacao);

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

  O avaliador **buscará pelos elementos** fundamentais aos demais testes:

- Elemento genérico que seja um item de menu para página de produtos;
- Elemento genérico que seja um item de menu para página de pedidos;
- Elemento genérico para o nome da pessoa usuária;
- Elemento genérico que seja um item de menu para o logout.

</details>

---

#### 12 - Desenvolva a tela de produtos do cliente criando os demais elementos com os data-testids disponíveis no protótipo

**Observações técnicas**

- Se oriente pela seguinte tela do protótipo: [`Cliente / Produtos`](#construcao-do-front-end-e-componentizacao);
- Deve-se construir um total de `11` cards, cada um correspondente a um item da tabela produtos, conforme a tabela `products` do modelo em `db.example.sql`.
- Os `data-testid` desses itens devem terminar com o id de cada produto, exemplo:
  - `customer_products__element-card-price-1`; `customer_products__element-card-price-2`; ...; `customer_products__element-card-price-11`.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

  **O avaliador buscará pelos elementos relacionados a todos os cards de produtos:**

- Elemento genérico do nome/título do produto;
- Elemento genérico do preço do produto;
- Imagem do produto;
- Botão para adicionar quantidade de itens;
- Botão para remover quantidade de itens;
- Input de quantidade de itens.

</details>

---

#### 13 - Desenvolva a tela de produtos do cliente de forma que ela pressuponha dados válidos da pessoa usuária armazenados no localStorage

**Observações técnicas**

- **Após o login (e durante a navegação), deve-se manter os dados da pessoa usuária no `localStorage`, conforme o modelo:**

```js script
{
  name: "Nome Da Pessoa Usuária",
  email: "email@dominio.com",
  role: "customer",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTm9tZSBEYSBQZXNzb2EgVXN1w6FyaWEiLCJlbWFpbCI6ImVtYWlsQGRvbWluaW8uY29tIiwicm9sZSI6ImN1c3RvbWVyIn0.s5cmiyY16yViCXkHuzWekxkMeYBi75eT8uJnSbfadNE"
}
```

- **Sua página também deve ser capaz de deslogar a pessoa usuária que não possuir um `token` válido no `localStorage`**
  - Note que aqui, é necessário que sua API seja capaz de gerar um `token` [`JWT`](https://jwt.io/), com base na chave em `./back-end/jwt.evaluation.key` após um login válido.
  - Também será validado se esses dados são descartados ao logout.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador testará se o `local storage` contém os dados da pessoa usuária após o login;
- O avaliador testará se o nome da pessoa, contido no `local storage`, também está na navbar;
- O avaliador testará se o `local storage` contém um `token` válido;
- O avaliador testará se o logout descarta os dados do `local storage` da pessoa usuária.

</details>

---

#### 14 - Desenvolva a tela de produtos do cliente de forma que os cards de todos os produtos pré-cadastrados contenham os valores corretos

**Observações técnicas**

- Há um total de `11` cards, cada um correspondente a um item da tabela produtos, conforme a tabela `products` do modelo em `db.example.sql`;
- Os dados desses produtos devem condizer com os dados do banco de dados;
- Nesse requisito, deve-se garantir que as imagens dos produtos estejam disponíveis para acesso direto via rota estática na sua API.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador testará se os dados de cada card condizem com os dados do banco de dados.
- O avaliador testará se é possível fazer uma requisição para os endereços das imagens de cada produto.

</details>

---

#### 15 - Desenvolva a tela de produtos do cliente de forma que o preço total esteja correto após a adição de itens aleatórios

**Observações técnicas**

- **Cada card deve possibilitar a adição, remoção ou definição manual da quantidade de itens de cada produto**
  - Esses itens devem compor um "carrinho de compras", que deve ser persistente no fluxo do cliente até o momento do checkout (quando o carrinho se torna uma venda concretizada);

👀**De olho nas dicas:**

- Considere utilizar o `localStorage` como forma de armazenar uma entidade `carrinho`;
- Considere a utilização de um contexto específico para acessar e manipular esses dados (tirando essa competência dos componentes filho). Esse contexto não deve ser geral, ou seja, não deve ser acessado por outras páginas fora do escopo do cliente.
- Para facilitar o processo, considere o carrinho como um 'modelo' de uma entidade banco de dados, mas programado no front-end (por ser temporário). Esses dados não devem persistir ao logout.
- O valor total do pedido é a soma dos resultados das quantidades de cada item, multiplicada pelo preço unitário dos mesmos.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador vai utilizar um recorte aleatório de produtos para fazer o pedido (esses dados são imprimidos durante o teste);
- Para cada item da lista gerada:
  - O avaliador testará se a adição do item (`Botão de adição`) adiciona ao `input` da quantidade;
  - O avaliador testará se após a adição do item, a ação de remoção (`Botão de remoção`) do dobro da quantidade manterá o `input` da quantidade em `0` (não gerando valores negativos);
  - O avaliador testará se é possível fazer a alteração manual `input` da quantidade;
  - O avaliador testará o fluxo completo de adição de itens, validando o valor total de produtos.

</details>

---

#### 16 - Desenvolva a tela de produtos do cliente de forma que haja um botão de carrinho que redirecionará para a tela de checkout caso itens sejam adicionados

**Observações técnicas**

- Sua página deve garantir que alterações no carrinho também mudem o valor total da venda:
 👀**De olho na dica:** tire proveito do **contexto específico** mencionado anteriormente para realizar a lógica e fornecer o resultado do cálculo.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador testará a existência de um botão de carrinho com um valor total válido e que seja capaz de nos direcionar à tela de checkout.
  - O avaliador espera acessar uma página `localhost:3000/customer/checkout` após o clique no botão do carrinho;
  - Não é necessário ter a página pronta, mas a rota no front deve estar acessível para que o avaliador a identifique.

</details>

---

### `04 Desenvolvimento da tela de Checkout do Cliente`

Todos os testes desse arquivo:

- Vão utilizar uma amostragem de produtos do banco de dados (impresso na tela durante o teste);
- Vão gerar um novo pedido com o preço total presumido e dados aleatórios para utilização nos testes (impresso na tela durante o teste);
- Vão fazer login com o cliente "Zé Birita";
- Vão validar o valor total dos produtos adicionados na tela de produtos;
- Vão navegar para a tela de checkout através do botão do carrinho de compras;
- O endereço da página deve ser `localhost:3000/customer/checkout`.

---

#### 17 - Crie uma tela de checkout do cliente com elementos com os data-testids disponíveis no protótipo

**Observações técnicas**

- Se oriente pela seguinte tela do protótipo: [`Comum / Checkout`](#construcao-do-front-end-e-componentizacao);
- A quantidade de itens no checkout deve corresponder à quantidade de itens no recorte aleatório de produtos utilizados no teste;
- Aqui, a referência de identificação dos campos das linhas da tabela deve ser o índice (`index`) da matriz (`array`) dos produtos no carrinho de compras. Por exemplo:
  - `element-order-table-name-0`; `element-order-table-name-1`; ...; `element-order-table-name-x`.
- O `value` das `options` do `select` das pessoas vendedoras deve ser o `id` da pessoa vendedora.
  - Essa instrução será utilizada na validação do requisito 20.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador testará os data-testids referentes aos itens do carrinho e demais elementos.

</details>

---

#### 18 - Desenvolva a tela de checkout do cliente de forma a possuir os dados corretos do carrinho e preço total

**Observações técnicas**

- Os dados propostos no recorte aleatório de produtos (itens e preço total) no teste devem condizer com os dados contidos no carrinho durante o checkout.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador testará se os itens contidos na venda correspondem aos itens do checkout

</details>

---

#### 19 - Desenvolva a tela de checkout do cliente de forma que seja possível remover itens do carrinho

**Observações técnicas**

- O cliente deve ser capaz de remover itens do carrinho pela tela de checkout, alterando o valor total da venda.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador tentará realizar a remoção de itens validando-os na tabela.
  - O avaliador vai deletar uma quantidade aleatória de itens do carrinho (esses dados são impressos no teste).

</details>

---

#### 20 - Desenvolva a tela de checkout do cliente de forma a nos redirecionar para a tela de detalhes do pedido após a finalização do mesmo

**Observações técnicas**

- Não se preocupe aqui em ter a tela de detalhes do pedido pronta: o que deve estar garantido, é que é possível ter acesso a uma rota `localhost:3000/customer/orders/<id>` no front, onde o `id` é retornado da requisição da venda;
- Ao final do pedido (ao clicar no 'Botão de finalização do pedido'), a tela de checkout deve disparar uma requisição para a API, inserindo a venda e retornando o `id` da mesma, para utilização no redirecionamento.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador verificará se ao final do checkout é disparado uma request `POST` com uma autorização (`token`) válida, que retorne status `201 - Created`;
- O avaliador verificará se após isso o endereço da url contém o `id` do pedido criado. Por exemplo, se o `id` gerado for `3`, então: `localhost:3000/customer/orders/3`.
- O avaliador selecionará a `pessoa vendedora` pelo `id` como informado no [requisito 17](#17---crie-uma-tela-de-checkout-do-cliente-com-elementos-com-os-data-testids-disponíveis-no-protótipo)

</details>

---

#### 21 - Desenvolva a tela de checkout do cliente de forma a gerar uma nova venda na tabela sales, assim como relações em sales_products, ao finalizar o pedido

**Observações técnicas**

**Os status de um pedido podem ser:**
      - `Pendente`;
      - `Preparando`;
      - `Em Trânsito`;
      - `Entregue`.

- O "status" padrão de cada pedido deve ser `Pendente`;

- Deve-se garantir que a requisição para API se encarregue de criar uma venda, e na mesma requisição, relacionar essa venda com os produtos do carrinho:
  - Aqui possuímos uma relação de `N:N` (muitos para muitos) onde se relacionam as tabelas: `sales` < 1:N > `sales_products` < N:1 > `products`.

- Os testes farão a inserção da venda via checkout e após isso farão a validação desses dados no banco de dados.

- Atente-se que, no [protótipo](#construcao-do-front-end-e-componentizacao), a tela `Cliente / Detalhes do Pedido` possui a data do pedido:
  - A data deve ser inserida automaticamente durante o processo de inserção da venda após o checkout;
  - O banco de dados está configurado para o [`fuso horário Zulu (Z)`](https://pt.wikipedia.org/wiki/Fuso_hor%C3%A1rio#Meridianos) (`timezone: 'Z'` em `./back-end/database/config/config.js`), que é alinhado com o `UTC+0`;
    - Saiba mais sobre o [`UTC` (Tempo universal coordenado)](https://pt.wikipedia.org/wiki/Tempo_Universal_Coordenado);
    - Isso é necessário para evitar conflitos de horário na hora da leitura e escrita da informação no banco de dados.
  - É possível utilizar bibliotecas externas para manipulação de datas como o [`Moment.js`](https://momentjs.com/), ou mesmo utilizar o objeto [`Date`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date) para normatizar horários na hora da leitura ou escrita no formato `UTC`.
 👀**De olho na dica:** é possível utilizar o Sequelize para definir um valor padrão para um campo durante a criação do seu modelo. Valores padrão podem incluir a [data atual](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html).

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador testará se, após realizado o checkout, as alterações constarão no banco de dados.

</details>

---

### `05 Desenvolvimento da tela de Pedidos do Cliente`

Todos os testes desse arquivo:

- Vão utilizar uma amostragem de produtos do banco de dados (impresso na tela durante o teste);
- Vão fazer login com o cliente "Zé Birita";
- Vão gerar um novo pedido com o preço total presumido e dados aleatórios para utilização nos testes (impresso na tela durante o teste);
- Vão fazer o checkout desse novo pedido;
- Vão acessar a `HomePage` do usuário, navegando para a tela de login (que deve fazer o redirecionamento). Lembrando que, ao acessar a tela de login com um usuário já logado, deve-se fazer o direcionamento para a página padrão do mesmo;
- Vão navegar para a tela de produtos através do menu de navegação (saindo da tela de detalhes do pedido);
- Vão navegar para a tela de pedidos do cliente através do menu de navegação;
- Vão coletar os dados de vendas da tabela `sales` referentes ao usuário (id `3`);
- O endereço da página deve ser `localhost:3000/customer/orders`.

---

#### 22 - Crie uma tela de pedidos do cliente com elementos a partir dos data-testids disponíveis no protótipo

**Observações técnicas**

- Se oriente pela seguinte tela do protótipo: [`Comum / Meus Pedidos`](#construcao-do-front-end-e-componentizacao);
- Os `data-testid` desses itens devem terminar com o `id` de cada venda no banco. Por exemplo:
  - `customer_products__element-order-date-1`; `customer_products__element-order-date-2`; ...; `customer_products__element-order-date-x`.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador vai testar se existem `data-testids` para os dez primeiros itens contidos na tabela 'sales';
  ⚠️**Importante**: o avaliador oficial vai testar somente uma venda, mas caso você opte por usar o parâmetro de ambiente `EVAL_ALWAYS_RESTORE_DEV_DB=false` no back-end, localmente o teste fará avaliação de até dez vendas.

</details>

---

#### 23 - Desenvolva a tela de pedidos do cliente de forma a conter a lista de pedidos do mesmo com os dados corretos

**Observações técnicas**

- Garanta que os dados dos itens de cada card condizem com as vendas registradas na tabela `sales` (vendas);

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador vai testar se os dados associados aos `data-testids` dos dez primeiros itens coincidem com os do banco de dados.
   ⚠️**Importante**: o avaliador oficial vai testar somente uma venda, mas caso você opte por usar o parâmetro de ambiente `EVAL_ALWAYS_RESTORE_DEV_DB=false` no back-end, localmente o teste fará avaliação de até dez vendas.

</details>

---

#### 24 - Desenvolva a tela de pedidos do cliente de forma a dar acesso à tela de detalhes de um pedido ao clicar no card do mesmo

**Observações técnicas**

- Não se preocupe aqui em ter a tela de detalhes do pedido pronta: o que deve estar garantido é que é possível ter acesso a uma rota `localhost:3000/customer/orders/<id>` no front;
- Aqui, o acesso a cada item deve ser possível pelos cards na tela de pedidos;

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador acessará a tela de detalhes do último pedido pela tela de pedidos, após o checkout do mesmo. Por exemplo:
  - Se o pedido gerado for o de `id` `5`, o avaliador espera acessar o endereço `localhost:3000/customer/orders/5` via aquele card,

</details>

---

### `06 Desenvolvimento da tela de Detalhes do Pedido do Cliente`

Todos os testes desse arquivo:

- Vão utilizar uma amostragem de produtos do banco de dados (impresso na tela durante o teste);
- Vão fazer login com o cliente "Zé Birita";
- Vão gerar um novo pedido com o preço total presumido e dados aleatórios para utilização nos testes (impresso na tela durante o teste);
- Vão fazer o checkout desse novo pedido, o que deve redirecionar para tela de detalhes daquele pedido;
- O endereço da página deve ser `localhost:3000/customer/orders/<idVenda>`.

---

#### 25 - Crie uma tela de detalhes do pedido do cliente com elementos a partir dos data-testids disponíveis no protótipo

**Observações técnicas**

- Se oriente pela seguinte tela do protótipo: [`Comum / Detalhes do Pedido`](#construcao-do-front-end-e-componentizacao);

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador testará os `data-testids` referentes aos itens da venda e demais elementos.

</details>

---

#### 26 - Desenvolva a tela de detalhes do pedido do cliente de forma a possuir os dados corretos da venda

**Observações técnicas**

- Sua aplicação deve garantir que os dados do pedido do cliente estejam atualizados ao acessar o detalhe de algum deles.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador testará se os dados contidos nos campos das linhas (produtos relacionados à venda), tal como demais valores (id do pedido, nome da pessoa vendedora, data de pedido, status da venda, preço total) conferem com os dados da venda feita anteriormente.

</details>

---

## `Fluxo da Pessoa Vendedora`

O fluxo da pessoa vendedora deve garantir que é possível listar pedidos relacionados àquela pessoa vendedora e manipular o status desses pedidos.

---

### `07 Desenvolvimento da tela de Pedidos do Vendedor`

Todos os testes desse arquivo:

- Vão utilizar uma amostragem de produtos do banco de dados (impresso na tela durante o teste);
- Vão fazer login com o cliente "Zé Birita";
- Vão gerar um novo pedido com o preço total presumido e dados aleatórios para utilização nos testes (impresso na tela durante o teste);
- Vão fazer o checkout desse novo pedido, portanto a venda estará registrada no banco de dados;
- Vão fazer o logout do sistema;
- Vão fazer o login com a vendedora "Fulana Pereira" utilizando o e-mail `fulana@deliveryapp.com` e senha `fulana@123`;
- Vão coletar os dados de vendas da tabela `sales` referentes ao usuário (id `2`);
- A página padrão esperada para pessoa vendedora é `localhost:3000/seller/orders`.

---

#### 27 - Crie uma tela de pedidos da pessoa vendedora com elementos a partir dos data-testids disponíveis no protótipo

**Observações técnicas**

- Se oriente pela seguinte tela do protótipo: [`P. Vend / Pedidos`](#construcao-do-front-end-e-componentizacao);
- Os `data-testid` desses itens devem terminar com o `id` de cada venda no banco. Por exemplo:
  - `seller_orders__element-order-date-1`; `seller_orders__element-order-date-2`; ...; `seller_orders__element-order-date-x`.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador vai testar se existem `data-testids` para os dez primeiros itens contidos na tabela 'sales'.

</details>

⚠️**Importante**: o avaliador oficial vai testar somente uma venda, mas caso você opte por usar o parâmetro de ambiente `EVAL_ALWAYS_RESTORE_DEV_DB=false` no back-end, localmente o teste fará avaliação de até dez vendas.

---

#### 28 - Desenvolva a tela de pedidos da pessoa vendedora de forma a conter a lista de pedidos do mesmo com os dados corretos

**Observações técnicas**

- Garanta que os dados dos itens de cada card condizem com as vendas registradas na tabela `sales` (vendas);

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador vai testar se os dados associados aos `data-testids` dos dez primeiros itens batem com os do banco de dados.

</details>

⚠️**Importante**: o avaliador oficial vai testar somente uma venda, mas caso você opte por usar o parâmetro de ambiente `EVAL_ALWAYS_RESTORE_DEV_DB=false` no back-end, localmente o teste fará avaliação de até dez vendas.

---

#### 29 - Desenvolva a tela de pedidos da pessoa vendedora de forma a dar acesso à tela de detalhes de um pedido ao clicar no card do mesmo

**Observações técnicas**

- Não se preocupe aqui em ter a tela de detalhes do pedido pronta: oque deve estar garantido, é que é possível ter acesso a uma rota `localhost:3000/seller/orders/<id>` no front;
- Aqui, o acesso a cada item deve ser possível pelos cards na tela de pedidos.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador acessará a tela de detalhes do último pedido pela tela de pedidos, após o checkout do mesmo. Por exemplo:
  - Se o pedido gerado for o de `id` `5`, o avaliador espera acessar o endereço `localhost:3000/seller/orders/5`,  via aquele card.

</details>

---

### `08 Desenvolvimento da tela de Detalhes do Pedido do Vendedor`

Todos os testes desse arquivo:

- Vão utilizar uma amostragem de produtos do banco de dados (impresso na tela durante o teste);
- Vão fazer login com o cliente "Zé Birita";
- Vão gerar um novo pedido com o preço total presumido e dados aleatórios para utilização nos testes (impresso na tela durante o teste);
- Vão fazer o checkout desse novo pedido, portanto a venda estará registrada no banco de dados;
- Vão fazer o logout do sistema;
- Vão fazer o login com a vendedora "Fulana Pereira" utilizando o e-mail `fulana@deliveryapp.com` e senha `fulana@123`;
- Vão clicar no card referente à venda realizada para ter acesso à tela de detalhes do mesmo.

---

#### 30 - Crie uma tela de detalhes do pedido da pessoa vendedora com elementos a partir dos data-testids disponíveis no protótipo

**Observações técnicas**

- Se oriente pela seguinte tela do protótipo: [`P. Vend / Detalhes do Pedido`](#construcao-do-front-end-e-componentizacao);

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador testará os `data-testids` referentes aos itens da venda e demais elementos.

</details>

---

#### 31 - Desenvolva a tela de detalhes do pedido da pessoa vendedora de forma a possuir os dados corretos da venda

**Observações técnicas**

- Sua aplicação deve garantir que os dados do pedido do cliente estejam atualizados ao acessar o detalhe de algum deles.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador testará se os dados contidos nos campos das linhas (produtos relacionados à venda), tal como demais valores (id do pedido, nome da pessoa vendedora, data de pedido, status da venda, preço total) conferem com os dados da venda feita anteriormente.

</details>

---

## `Validação do Status do Pedido`

A validação de status consiste em uma série de testes que devem assegurar que os status do pedido sejam alterados e refletidos para clientes e pessoas vendedoras.

---

#### 32 - Desenvolva a tela de detalhes do pedido da pessoa vendedora de forma a ser capaz de alterar o status do pedido

**Observações técnicas**

- Os status de um pedido podem ser:
  - `Pendente` - **Valor padrão** na criação do pedido;
  - `Preparando` - Status que **pode ser alterado pela pessoa vendedora**;
  - `Em Trânsito` - Status que **pode ser alterado pela pessoa vendedora**;
  - `Entregue` - Status que **pode ser alterado pelo cliente**.

- Esse requisito vai avaliar se as alterações do status do pedido na tela da pessoa vendedora são persistentes ao clicar em: `Botão de marcar para 'preparo'`, `Botão de marcar para 'saiu para entrega'`:
  - O `Botão de marcar para 'preparo'` deve estar habilitado caso o status do pedido esteja como `Pendente`. Esse botão deve alterar o status do pedido para `Preparando`;
  - O `Botão de marcar para 'preparo'` deve estar desabilitado caso o status do pedido esteja como `Preparando`, `Em Trânsito` ou `Entregue`;
  - O `Botão de marcar para 'saiu para entrega'` deve estar habilitado caso o status do pedido esteja como `Preparando`. Esse botão deve alterar o status do pedido para `Em Trânsito`;
  - O `Botão de marcar para 'saiu para entrega'` deve estar desabilitado caso o status do pedido esteja como `Pendente`, `Em Trânsito` ou `Entregue`;

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador testará se a alteração do pedido é persistente após atualizar a página fazendo o processo de logout/login.

</details>

---

### `09 Desenvolvimento da funcionalidade de atualização de Status do Pedido`

Todos os testes desse arquivo:

- Vão utilizar uma amostragem de produtos do banco de dados (impresso na tela durante o teste);
- Vão fazer login com o cliente "Zé Birita";
- Vão gerar um novo pedido com o preço total presumido e dados aleatórios para utilização nos testes (impresso na tela durante o teste);
- Vão fazer o checkout desse novo pedido, portanto a venda estará registrada no banco de dados;
- Vão gerar outro contexto de navegação (anônimo) para utilizar no fluxo da pessoa vendedora;
- Vão fazer o login (no novo contexto) com a vendedora "Fulana Pereira";
- Vão clicar no card referente à venda realizada para ter acesso à tela de detalhes do mesmo.

---

#### 33 - Garanta que o status do pedido atualizado na tela de detalhes do pedido da pessoa vendedora seja refletido na tela de detalhes do pedido do cliente após atualização das páginas

**Observações técnicas**

- Sua aplicação deve garantir que:
  - Dado o fluxo de criação de um pedido pelo cliente, que leva a tela de detalhes daquele pedido;
  - Dado o acesso dos detalhes desse pedido pela pessoa vendedora em paralelo (não há logout no processo);
- Seja possível **fazer a alteração no status do pedido pela pessoa vendedora**, e ao **atualizar as páginas**, esse status **esteja refletido na tela de detalhes do pedido do cliente**.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador verificará se, ao alterar o status do pedido na tela da pessoa vendedora, o mesmo também é alterado na tela de detalhes do pedido do cliente após atualização das páginas fazendo o processo de logout/login nas mesmas.

</details>

---

#### 34 - Garanta que o status do pedido atualizado na tela de detalhes do pedido da pessoa vendedora seja refletido na tela de lista de pedidos do cliente após atualização das páginas

**Observações técnicas**

**Sua aplicação deve garantir que seja possível fazer a alteração no status do pedido pela pessoa vendedora**, e ao atualizar as páginas, esse status esteja refletido no mesmo item listado na tela de pedido do cliente. Isso deve ocorrer em dois cenários:

- Dado o fluxo de criação de um pedido pelo cliente, acessando após isso a tela de lista de pedidos do mesmo;
- Dado o acesso dos detalhes desse pedido pela pessoa vendedora em paralelo (não há logout no processo);

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador verificará se, ao alterar o status do pedido na tela da pessoa vendedora, o mesmo também é alterado na tela de pedidos do cliente após atualização das páginas fazendo o processo de logout/login nas mesmas.

</details>

---

#### 35 - Garanta que o status do pedido atualizado na tela de detalhes do pedido do cliente seja refletido na tela de lista de pedidos da pessoa vendedora após atualização das páginas

**Observações técnicas**

**Sua aplicação deve garantir que seja possível fazer a alteração no status do pedido pelo cliente**, e ao atualizar as páginas, esse status esteja refletido no mesmo item listado na tela de pedido da pessoa vendedora. Isso deve ocorrer em dois cenários:

- Dado o fluxo de criação de um pedido pelo cliente, que leva a tela de detalhes daquele pedido;
- Dado o acesso aos detalhes desse pedido pela pessoa vendedora em paralelo (não há logout no processo);
- Dada a alteração de status do pedido da pessoa vendedora (colocando o pedido "Em trânsito");
- Dado o acesso da lista de pedidos pela pessoa vendedora em paralelo (não há logout no processo);

- Esse requisito também validará a interação com: `Botão de marcar como 'entregue'`:
  - O `Botão de marcar como 'entregue'` deve estar habilitado caso o status do pedido esteja como `Em Trânsito`. Esse botão deve alterar o status do pedido para `Entregue`;
  - O `Botão de marcar como 'entregue'` deve estar desabilitado caso o status do pedido esteja como `Pendente`, `Preparando` ou `Entregue`;

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador verificará se, ao alterar o status do pedido na tela do cliente, o mesmo também é alterado na tela de detalhes do pedido da pessoa vendedora após atualização das páginas fazendo o processo de logout/login nas mesmas.

</details>

---

## `Fluxo da Pessoa Administradora`

O fluxo da pessoa administradora deve possibilitar o cadastro de clientes e pessoas vendedoras, tal como a remoção dos mesmos.

---

### `10 Desenvolvimento da tela de Admin`

Todos os testes desse arquivo devem:

- Fazer login utilizando dados da pessoa administradora;
  - email `adm@deliveryapp.com` e senha `--adm2@21!!--`.
- Ter a seguinte página esperada pelo avaliador: `localhost:3000/admin/manage`.

---

#### 36 - Crie uma tela de pessoa administradora com elementos a partir dos data-testids disponíveis no protótipo

**Observações técnicas**

- Se oriente pela seguinte tela do protótipo: [`P. Adm. / Gerenciamento`](#construcao-do-front-end-e-componentizacao);
  - Em um primeiro momento, não serão considerados os itens da tabela de usuários. Foque aqui em consolidar o formulário de cadastro.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador testará os `data-testids` referentes aos elementos do formulário de cadastro.

</details>

---

#### 37 - Desenvolva a tela da pessoa administradora de forma a validar o formulário de cadastro

**Observações técnicas**

- Assim como no formulário de registro aqui também serão validados os campos para registro;
- Aqui, os critérios para considerar os dados mal formatados são:
  - Nome completo com número de caracteres menor que `12`.
  - Email incompleto, fora de um padrão comum: `<email>@<domínioPrincipal>.<domínioGenérico>`;
  - Senha com número de caracteres menor que `6`;
  - Não definir o cargo (`role`):
   👀**De olho na dica**: o `select` do cargo (`role`) pode ter um valor default.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador testará 4 situações aleatórias diferentes (uma para cada validação) de maneira isolada, sendo uma delas válida;
- O avaliador testará seu formulário com as 4 situações de maneira sequencial;
- O avaliador não vai executar o registro pelo botão de registro: ele validará se o botão ficará habilitado ou não, a depender dos critérios durante o input dos dados;
- É esperado que haja a validação dos dados durante a escrita dos mesmos.

</details>

---

#### 38 - Desenvolva a tela da pessoa administradora de forma que seja possível cadastrar pessoas usuárias válidas

**Observações técnicas**

Sua página deve ser capaz de cadastrar pessoas usuárias com dados válidos:

- Note que, a senha deve ser armazenada no banco como uma [`hash md5`](https://pt.wikipedia.org/wiki/MD5). A tradução **deve ocorrer na API**;
- É possível utilizar bibliotecas de terceiros como a [`md5`](https://www.npmjs.com/package/md5) ou a nativa [`crypto`](https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options) para conversão de valores para `md5`;

Aqui, **a rota de cadastro deve ser diferente da rota de cadastro comum**, pois também é possível definir a categoria de usuário aqui (`role`);

- Essa é uma rota específica para pessoa administradora, portanto a mesma rota na API deve considerar um token válido e referente ao usuário de categoria `administrator`;

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador tentará fazer a ação de cadastro com uma lista de pessoas (impressa durante o teste) com dados aleatórios válidos, validando-os posteriormente no banco de dados;
- Para cada pessoa, o avaliador espera que haja uma requisição `POST` para API ao clicar no `Botão de registro`, que retorne o status `201 - Created`;
- Os dados dessa pessoa serão validados na tabela `user` do banco de dados.

</details>

---

#### 39 - Desenvolva a tela da pessoa administradora de forma que ela impossibilite o cadastro de pessoas usuárias já existentes

**Observações técnicas**

Sua página deve impedir o cadastro de pessoas com o mesmo Nome ou E-mail.

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador tentará realizar o fluxo de cadastro anterior duas vezes, mas com apenas uma pessoa usuária gerada aleatoriamente.
- Na primeira vez o avaliador espera que haja uma requisição `POST` para API ao clicar no `Botão de registro`, que retorne o status `201 - Created`;
- Na segunda vez o avaliador espera que haja uma requisição `POST` para API ao clicar no `Botão de registro`, que retorne o status `409 - Conflict`;
- O avaliador espera que apareça na tela um elemento, antes oculto, com uma mensagem de erro qualquer.
  - Elemento: `admin_manage__element-invalid-register`.

</details>

---

#### 40 - (`Bônus`) Desenvolva a tela da pessoa administradora de forma que haja uma tabela de pessoas usuárias cadastradas

**Observações técnicas**

- Aqui, é necessário que a página também retorne os dados atualizados das pessoas usuárias cadastradas (não incluindo pessoas administradoras):
  👀**De olho na dica**: é possível utilizar um contexto específico que contemple o formulário e a tabela de usuários;

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador testará os data-testids referentes aos elementos da tabela de pessoas usuárias;
- O avaliador tentará realizar o fluxo de cadastro com uma quantidade aleatória de pessoas usuárias válidas e verificará se as mesmas aparecem na tabela.

</details>

---

#### 41 - (`Bônus`) Desenvolva a tela da pessoa administradora de forma que seja possível deletar pessoas usuárias na tabela

**Observações técnicas**

- A pessoa administradora deve ser capaz de remover pessoas usuárias através da tabela.
  - Na API, **essa é uma rota protegida e exclusiva da pessoa administradora**, portanto deve considerar um token válido e referente ao usuário de categoria `administrator`;

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- O avaliador tentará realizar a remoção de itens validando-os na tabela.
  - O avaliador vai deletar uma quantidade aleatória de itens do carrinho (esses dados são impressos no teste).

</details>

---

## `Cobertura de Testes`

A cobertura de testes deve garantir que, tanto no `front-end` quanto no `back-end`, os sistemas foram testados e possuem componentes e/ou funções estáveis e à prova de erros.

> ⚠️ Lembrando que fica a critério de cada grupo ou indivíduo escolher o tipo de teste a ser implementado, tanto _testes unitários_ quanto _testes de integração_ são aceitos, inclusive os dois de forma complementar.

---

### `11 Desenvolvimento dos testes de cobertura`

Antes de todos os testes, esse arquivo deve rodar, em ambas aplicações, o comando `test:coverage:json`.

- Tanto no `front-end` quanto no `back-end`, esse comando deve gerar um arquivo de cobertura (`coverage`) específico para cada;
- Serão coletados dos arquivos, os dados:
  - `pct` - porcentagem total da cobertura;
  - `skipped` - se algum teste foi pulado com `.only` ou `.skip`;
  - `covered` - quantas linhas foram cobertas no teste.

⚠️ **Importante** ⚠️:

- Embora seja possível testar localmente com `.only` e `.skip` (principalmente para ganhar tempo), essas alterações dos testes não devem subir com sua aplicação para o repositório, correndo o risco de desaprovação no projeto.

- O avaliador também retornará erro e não fará a avaliação do requisito caso os testes estejam dando **erros de promessas que não são tratadas** (`UnhandledPromiseRejectionWarning`), por isso, busquem sempre fazer o tratamento correto de funções assíncronas durante o projeto, tal como nos testes.

#### 42 - Crie testes que cubram no mínimo 30 por cento dos arquivos do front-end e back-end em src com um mínimo de 75 linhas cobertas em cada

**Observações técnicas**

Garanta que tanto o seu `front-end` quanto `back-end` possuem testes que cubram ao menos `30%` da aplicação com `75` linhas cobertas:

- É possível testar a cobertura de duas formas:
  - A partir da raiz de cada projeto, utilizando `npm run test:coverage` (o que deve trazer uma tabela de cobertura, sem o número absoluto de linhas cobertas);
  - A partir da raiz de cada projeto, utilizando `npm run test:coverage:json` (o que deve trazer um arquivo `./coverage/coverage.json`, com um detalhamento da cobertura);

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- Serão validados os dados de cobertura no `front-end` e no `back-end`;

</details>

---

#### 43 - (`Bônus`) Crie testes que cubram no mínimo 60 por cento dos arquivos do front-end e back-end em src com um mínimo de 150 linhas cobertas em cada

**Observações técnicas**

Garanta que tanto o seu `front-end` quanto `back-end` possuem testes que cubram ao menos `60%` da aplicação com `150` linhas cobertas:

- É possível testar a cobertura de duas formas:
  - A partir da raiz de cada projeto, utilizando `npm run test:coverage` (o que deve trazer uma tabela de cobertura, sem o número absoluto de linhas cobertas);
  - A partir da raiz de cada projeto, utilizando `npm run test:coverage:json` (o que deve trazer um arquivo `./coverage/coverage.json`, com um detalhamento da cobertura);

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- Serão validados os dados de cobertura no `front-end` e no `back-end`;

</details>

---

#### 44 - (`Bônus`) Crie testes que cubram no mínimo 90 por cento dos arquivos do front-end e back-end em src com um mínimo de 225 linhas cobertas em cada

**Observações técnicas**

Garanta que tanto o seu `front-end` quanto `back-end` possuem testes que cubram ao menos `90%` da aplicação com `225` linhas cobertas:

- É possível testar a cobertura de duas formas:
  - A partir da raiz de cada projeto, utilizando `npm run test:coverage` (o que deve trazer uma tabela de cobertura, sem o número absoluto de linhas cobertas);
  - A partir da raiz de cada projeto, utilizando `npm run test:coverage:json` (o que deve trazer um arquivo `./coverage/coverage.json`, com um detalhamento da cobertura);

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

- Serão validados os dados de cobertura no `front-end` e no `back-end`;

</details>

