# CRUD-Angular-GO
- O exemplo mostra um aplicativo Angular CRUD com uma API Go e usando o MySQL como um banco de dados feito para uma entrevista técnica.

## Pré-requisitos
- Node.js
- Go 1.21
- MySQL

## Instalação
- Clonar este repositório `git clone https://github.com/guimevn/crud-angular-go .`
- Mudar o diretório para o projeto Angular. `cd view`
- Instalar as dependências do Angular. `npm install`
- Mudar o diretório para o projeto Go. `cd ../api`
- Instalar as dependências do Go. `go mod tidy`
- Crie uma nova base de dados e execute o script [/database.sql](/database.sql) para criar tabelas e importar dados.
- Editar a configuração da base de dados no ficheiro [/api/.env](/api/.env).

## Executar o projeto
- Execute o projeto Angular. `npm start`
- Executar o projeto da API Go `go run main.go`
- Navegar para http://localhost:4200