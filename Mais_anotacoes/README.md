# React.JS
### Anotações.:
#### Primeiro conceito do React JS .: 

#primeira coisa é baixar o node. 
* professor versão: 14.16.1 lts
* minha versão: 16.13.1 Versão lts

# Instalação do Yarn
* professor versão :
* minha versão:

# 00:52:56 vamos criar a aplicação. 
yarn create react-app letmeask --template typescript
Obs.: Letmeask é o nome do projeto  

Na pasta publico deixar somente o arquivo index.html 
Na pasta src deixar somente os arquivos App.tsx,
index.tsx e react-app-env.d.ts

# Instalação do Firebase 8.6.7
* professor versão : v1.22.5
* minha versão:v1.22.17 - TIVE QUE TROCAR DE VERSÃO PARA 8
************************************************************

[ok]Tudo é componente!! Diferente de java onde tudo era objeto kkkk. E o que é componente em JS???
Simplismente funções.

#### Segundo e terceiro conceito do JS .: 

[ok] Propriedade  = São atributos ou seja, são informações que podemos passar para um componente (funções) se comportar de maneira diferente. 

[ok] Estado = Nada mais é que uma informação que se altera conforme as opções selecionadas pelo usuário. 
Sempre que eu tiver um componente que terá seu valor alterado pelo uso do usuário esse valor é armazenado no estado. Exemplo abaixo
import { useState } from "react";

export function Button() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
        console.log(counter);
    }

    return (
        <button onClick={increment}>
            {counter}
        </button>
    )
}

[ok] Configurando o Firebase. 

[ok] Add no import => compat (
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth';) para parar o erro na 
export const auth = firebase.auth();
export const database = firebase.database();

[] instalar npm i --save-dev @types/node e adicionar o "types": ["jest","node"] no arquivo tsconfig para parar o erro do process mo arquivo .env

[] Após todas as atualizações vamos chamar o import './services/firebase'; dentro do arquivo index da nossa aplicação. E isso iá dar o start no nosso banco de dados.

-- PARA PARAR OS ERROS TIVE QUE VOLTAR A VERSÃO DO FIREBASE PARA 8.6.7
yarn add firebase@^8.6.7
Caso queira remover => yarn remove firebase 

[ok] Erro => error Command failed with exit code 1.
    -  Possíveis Soluções tiradas da web.
      [ok] rm -rf node_modules && yarn cache clean && yarn do forum => https://stackoverflow.com/questions/61611766/yarn-start-command-failed-with-exit-code-1

[ok] Erro => TypeScript 4.1: Could not find a declaration file for module 'react/jsx-runtime' #10109 forun => https://github.com/facebook/create-react-app/issues/10109

************************************************************************
# AULA 02

[ok] Subimos a home e colocamos uma corzinha só para brincar um pouco.

[ok] Vamos instalar o ssas. Porem o professor informa que deve ser a versão 
específica por algum problema, então para não perder tempo vamos instalar a 
versão infomada no comando => yarn add node-sass@^5.0.0
Diz que a versão 6 não é suportada pelo creat reac-app

************************************************************************
SASS
yarn add node-sass@^5.0.0
CSS 
cor linda!! => #b180b1;
 ************************************************************************
Após ter subido o commit => "Tela Home - botões e cores ok", instalei a mesma 
versão do react router dom do profe => yarn add react-router-dom@^5.2.0
e também o pacote => yarn add @types/react-router-dom@^5.1.7 -D 
para incluir as definições de tipos.... e assim poder criar as rotas e 
navegar entre as páginas. 
************************************************************************
[] Sempre que quisermos compartilhar informações, objetos...  dentro da aplicação, iremos usar o conceito de contextos do react. (informações compartilhadas entre 
vários componentes usaremos contextos)
Exemplo.: 
const TestContext = createContext('');

function App() {
  return (
    <BrowserRouter>
      <TestContext.Provider value={'Teste'}>
        <Route path='/' exact component={Home} />
        <Route path='/rooms/new' component={NewRoom} />
      </TestContext.Provider>
    </BrowserRouter>
  );
}


