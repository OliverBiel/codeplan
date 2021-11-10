# Bem-vindo!
Esse e o diretorio de um projeto utilizando Angular para frontend e Django no backend junto com um DB em Postgres.
O projeto se trata de um CRUD para cadastro de filmes.

## Instalacao Backend

- Apos clonar o repositorio crie uma venv na pasta do repositorio com o seguinte comando:

*Necessario ter python instalado!

```bash
python -m venv venv 
```
- Em seguida inicialize a venv da seguinte forma:

```bash
source venv/bin/activate
```
*Certifique-se que o terminal utilizado esta na pasta aonde foi criada a venv.

- Tendo criado e ativado a venv basta instalar os requirements, com a terminal na pasta raiz do projeto execute o comando:
```bash
pip install -r requirements.txt
```
- E necessario ter um banco postgres para poder fazer a conexao com o django, o mesmo pode ser criado como desejar.
- Tendo criado o banco, basta criar um arquivo .env na pasta films_manager com as seguintes variaveis:
```bash
SECRET_KEY=chave de seguranca do django (Caso voce nao possua uma, basta pesquisar no google um gerador de secret key para django)
DB_NAME=nome do DB
DB_USER=user do DB
DB_PSWD=senha do DB
DB_HOST=ip do host do DB
DB_PORT=porta do DB - Por padrao a porta do postgres e 5432, esta como default no projeto, so e necessario utilizar essa variavel se voce tiver mudado a porta padrao.
```
- Depois basta rodar os comandos, com a venv ativada:
```python
python manage.py makemigrations

#apos rodar o comando acima, rode o seguinte:
python manage.py migrate
```
## Instalacao Frontend

- Na pasta frontend/frontend/ rode o comando:
```bash
npm i -g @angular/cli
```

## Como utilizar
### Inicializando o backend

- Se tudo ocorreu corretamente basta rodar o comando com a venv ativada:
```python
python manage.py runserver
```
- Pronto, o backend da aplicacao ja esta rodando, voce pode fazer acesso ao backendo utilizando o link que o django mostra para ver se esta tudo ok

### Inicializando o frontend
- Se ocorreu tudo corretamente rode o seguinte comando:
```bash
npm start
```
- Pronto, agora o projeto esta 100% funcional, basta entrar no link disponibilizado no terminal!



## Contato
- [Linkedin](https://www.linkedin.com/in/gabriel-oliveira-4bb406190)