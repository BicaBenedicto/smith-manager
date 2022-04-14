
# Smith Manager

Aplicação back-end que simula uma loja de ferreiro em jogo um RPG, podendo criar usuários novos (clientes), criar e consultar pedidos e produtos.


## Stack utilizada

**Back-end:** Node.js, Express.js, Typescript, Json Web Tokens


## Funcionalidades

### Back-end

### Rotas e funções

#### Usuário

- /users - `POST` - Cria usuário novo
- /login - `POST` - 'Loga' com usuário já criado

#### Produtos


- /products - `GET` - Consulta todos os produtos
- /products - `POST` - Cria produto novo


#### Pedidos

- /orders - `GET` - Consulta todos os pedidos
- /orders - `POST` - Cria pedido novo

## Aprendizados

Treinar a criação de API utilizando Node.js, Express.js, Typescript e Json Web Tokens.

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

```bash
MYSQL_HOST=host da aplicação
MYSQL_USER=usuário do host
MYSQL_PASSWORD=senha do host
JWT_SECRET=chave de acesso do token
```


## Instalação

Instale smith-manager com npm

```bash
  npm install smith-manager
  cd smith-manager
```

## Rodando localmente

Lembre-se de criar um arquivo `.env` na pasta raiz do projeto e colocar as informações das vaiáveis de ambiente.

Inicie o servidor

```bash
  npm run start
```


## Autores

### Gabriel Benedicto

| [![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:gabrielpbenedicto@gmail.com) | [![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gabrielbenedicto/) | [![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/gabrielbenedicto) |
|--|----|----|