# IXC Chat
Frontend que compõe uma aplicação feita durante teste técnico para oportunidade de desenvolvedor backend javascript na IXC Soft.
Essa aplicação tem o intuito ser um chat de comunicação em tempo real.
Esse serviço é composta por 3 telas Login, Signup e Chat, sendo essa ultima a tela principal.

Na tela de Signup o usuário pode cadastrar um novo usuário e ao confirma já será direcionado a tela principal com seu token de acesso devidamente armazenado temporariamente. Nesta tela temos três campos de texto para ser inserido, nome do usuário, username qual fará login posteriormente e sua senha. Todos os campos tem suas validações e só poderá prosseguir caso esteja de conformidade com as regras.

A tela de Login igual da de signup com a exceção de ser apenas dois campos de texto, username e senha que serão validados e não registrados. Todos os campos tem suas validações e só poderá prosseguir caso esteja de conformidade com as regras.

Essa aplicação possui um gerenciamento de rotas que só permiti acessar a tela principal, chat, se já tiver autenticado seja pelo cadastro, signup ou pelo login, caso contrario será direcionado automaticamente para tela de login onde temos links para levá-lo a tela de cadastro se assim quiser.

Na tela principal é onde está o chat. Na parte superior consta o título com o nome do usuário logado e um botão para sair da aplicação. No centro esta a lista de mensagens que caso seja o primeiro uso estará vazia ou, do contrário, tera as mensagens já trocas anteriormente. No rodapé está o campo de texto para digitar sua mensagem, assim como o botão enviar, que pode ser acionado pelo clique do mouse ou da tecla enter do teclado 

### Estrutura de pastas
src   
│   App.css     
│   App.tsx   
│   index.css   
│   main.tsx   
│   vite-env.d.ts   
│
├───api    
│       all-message.ts   
│       index.ts   
│       login.ts   
│       signup.ts   
│
├───component  
│   ├───Chart  
│   │   │   index.tsx  
│   │   │   styles.css  
│   │   │
│   │   └───component  
│   │       ├───Footer  
│   │       │       index.tsx  
│   │       │       styles.css   
│   │       │
│   │       ├───Header   
│   │       │       index.tsx   
│   │       │       styles.css   
│   │       │
│   │       ├───Main    
│   │       │       index.tsx    
│   │       │       styles.css    
│   │       │
│   │       └───MessageItem    
│   │               index.tsx   
│   │               styles.css   
│   │
│   ├───Login   
│   │       index.tsx   
│   │       styles.css   
│   │
│   └───Signup   
│           index.tsx   
│           styles.css   
│
├───router   
│       index.tsx   
│       PrivateRouter.tsx    
│
└───utils   
    └───validator   
            index.ts   
            password-validator.ts   
            username-validator.ts   

## Stacks Utilizadas

- Reactjs
- Router-dom 6v
- vitejs
- MUI
- Typescript
- Axios
- hooks
- entre outras ...