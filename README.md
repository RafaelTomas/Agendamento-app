# Desafio: Sistema de Agendamento com Angular 19

## 📌 Sobre o Desafio
Este projeto consiste na implementação de um sistema de agendamento utilizando Angular 19 no frontend e Spring Boot no backend. O objetivo é permitir que os usuários realizem, editem e visualizem agendamentos de forma eficiente.

## 🚀 Tecnologias Utilizadas
- **Frontend:** Angular 19, TypeScript, PrimeNG
- **Backend:** Spring Boot, Java, Spring Data JPA
- **Banco de Dados:** H2 console: mem
- **Autenticação:** Spring Security, JWT


## 📂 Estrutura do Projeto
### 🖥️ Frontend (Angular 19)
- `/src/app/components/` - Componentes reutilizáveis
- `/src/app/shared/service/` - Serviços para comunicação com API
- `/src/app/pages/` - Páginas principais do sistema
- `/src/core/` - Configuração da aplicação (guards/interceptors)

### 🛠️ Backend (Spring Boot)
- `/src/main/java/com/agendamento/api/` - Pacote principal
- `/controller/` - Camada de controle (REST APIs)
- `/infra/` - configuração da aplicacao
- `/repository/` - Persistência de dados
- `/domain/` - Entidades

## ⚙️ Configuração e Execução
### 🔧 Backend
1. Clone o repositório:
   ```sh
   git clone https://github.com/RafaelTomas/Agendamento-api
   ```
2. Acesse a pasta do backend:
   ```sh
   cd agendamento/backend
   ```
3. Configure o `application.properties` com os dados do banco.
4. Execute o projeto:
   ```sh
   mvn spring-boot:run
   ```

### 🖥️ Frontend
1. Acesse a pasta do frontend:
   ```sh
   cd agendamento/frontend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie a aplicação:
   ```sh
   ng serve
   ```
4. Rodar os testes:
   ```sh
   ng test
   ```

## 📖 API Endpoints
A API oferece os seguintes endpoints:
- `USERs`
- `POST /auth/register` - Criar um novo user.
- `POST /auth/login` - logar.
- `CONTACTs`
- `GET /contatos/{userID}` - Listar todos os Contatos.
- `POST /contatos/{userID}` - criar contato.
- `PUT /contatos/usuario/{userID}/contato/{id}` - Atualizar um contato
- `PUT /contatos/usuario/{userID}/deletar/{id}` - Delação lógica de um contato

## 🔒 Autenticação
A aplicação utiliza JWT para autenticação e autorização dos usuários. Para acessar os endpoints protegidos, é necessário enviar o token no cabeçalho Authorization.

## 🛠️ Melhorias Futuras
- realizar 100% dos testes

## 📄 Licença
Este projeto está sob a licença MIT.

---
**Desenvolvido por Rafael Tomas 🚀**

