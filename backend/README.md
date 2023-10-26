<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# IXC Chat
Beckend que compõe uma aplicação feita durante teste técnico para oportunidade de desenvolvedor backend javascript na IXC Soft.
Esse serviço visa fornece uma api para cadastro e login de usuários além de fornecer reatividade em tempo real para um chat.

Ele é composto por um serviço de usuário com rotas rest e verbo post que cadastra um usuário na URL "/signup" como body "{name: nome do usuário, username: nickname que será usado para logar e password: senha de autenticação}. Todos os atributos são strings e a senha é com estratégia de força, ou seja, é necessário uso de letras maiúsculas, minusculas, números e caracteres especiais.

O segundo serviço é o de gerenciamento das mensagens envias e recebidas. Além de abrir um ouvinte para receber e notificar os escritos sobre novas mensagens enviadas, também as armazena em um banco de dados não relacional. Toda a comunicação é feita por meio de websocket menos a de listar todas as mensagens armazenadas que é uma rest no verbo get na URL "/message"

### Estrutura de pastas
src           
│   app.module.ts                                     
│   main.ts                                           
│                                                     
├───chat                                              
│       chat.gateway.ts                               
│                                                     
├───message                                           
│   │   message.controller.ts                         
│   │   message.module.ts                             
│   │   message.service.ts                            
│   │                                                 
│   ├───dto                                           
│   │       builder-message.dto.ts                    
│   │                                                 
│   └───entities                                      
│           message.entity.ts                         
│                                                     
├───prisma                                            
│       prisma.module.ts                              
│       prisma.service.ts                             
│                                                     
└───user                                              
    │   user.controller.ts                            
    │   user.module.ts                                
    │   user.service.ts                               
    │                                                 
    ├───dto                                           
    │       builder-user-dto.ts                       
    │       login-dto.ts                              
    │       signup-dto.ts                             
    │                                                 
    └───entities                                      
            user.entity.ts

## Stacks Utilizadas

- Nodejs
- Express
- Nestjs
- JWT
- Bcrypt
- Prima
- Mongodb
- entre outras ...