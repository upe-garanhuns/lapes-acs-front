# Estrutura do Projeto Next

## Tecnologias usadas

- TypeScript
- NextJS **13**
- Styled Components
- ESLint
- Prettier
- Axios

## Decisão arquitetural

A decisão pelo NextJS foi tomada através de uma análise de mão de obra, de início foi pensado em React, abordado na disciplina de Programação WEB, mas motivado por discussões e pela própria documentação do React. O NextJS foi pensado como solução onde conseguimos utilizar de um conhecimento já visto em sala de aula e das melhorias que foi desempenhado ao entorno do React, sendo algumas delas: estrutura de pastas (arquitetura), Server Side Rendering (SSR), melhor desempenho em roteamento de páginas. Também foi pensado a longo prazo, pois o Next é um framework muito abordado atualmente devido as suas atualizações. Por ser um projeto da Universidade foi pensado em que os alunos poderiam aprender juntamente a construção e garantindo que o projeto poderá passar por anos e os alunos continuariam motivados por utilizar ferramentas "*atuais*".

O ESLint e o Prettier foi pensado em forma de garantir a organização do nosso código, pensando em uma possível manutenção de código o ESLint e o Prettier vai nos garantir um código padronizado.

O styled components foi incluido nesse sistema também para facilitar uma possível manutenção e ajudar a integração, visto que para quem ta começando é comum a confusão de herança de componentes e acaba sobescrevendo um componente, para isso o styled components juntamente com a arquitetura adotada nesse sistema vai garantir a responsabilidade única dos componentes e estilização.

## Como rodar e configurar o projeto

Para rodar o projeto você irá precisar ter na sua máquina o Node.js 16.8+  
Clonar o repositório: ***github.com/gabrielrtlima/ace-front***  

```javascript
cd ace-front //entrar na pasta do projeto
npm i //instalar as dependencias do projeto
npm run dev //executar o projeto
```

Para garantir um código legível foi adicionado o ESLint e o Prettier, então o ESLint nos garante uma série de regras para poder executar o código (caso contrário o projeto não irá buildar), para configurar na nossa IDE precisamos baixar dois plugins
  
ESLint  
<img src="https://i.imgur.com/bv0KP4w.png" />  
O ESLint garante regras pro código

Prettier  
<img src="https://i.imgur.com/Px2eLDH.png" />  
O Prettier formata o código com algumas regras que foram definidas no ESLint  

Após instalar as duas extensões você aperta o atalho ***ctrl*** + ***,***  e pesquise por formatter e altera o tipo de formatação para o Prettier
<img src="https://i.imgur.com/xERQzdV.png" />  

Agora vá na pasta .vscode do seu projeto e vá no arquivo settings.json, caso não exista, crie.  
<img src="https://i.imgur.com/02HZeCZ.png" />  

e adicione o seguinte JSON

```JSON
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.tslint": true,
    "source.fixAll.stylelint": true
  }
}
```

Dessa forma, seu projeto já está configurado com o ESLint e Prettier.

## Estrutura de pastas

<img src="https://i.imgur.com/7aoNpXN.png" />

### App

A nossa pasta principal é a app, nessa pasta é onde está armazenado todas as páginas e as configurações dela no nosso sistema.  
Cada rota de página criada deve ser separada por pastas e seu respectivo index será criada no diretório da página com o nome de Page.  
Ex.: Quero criar uma página que ficará em */dashboard/settings*
nós teremos esse diretório:
<img src="https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Froute-segments-to-path-segments.png&w=3840&q=75&dpl=dpl_59rhVWhHHK6w2sPt3tFTPTNcAxqA" />  
e dentro da pasta settings vamos ter um arquivo chamado page.(ts, tsx, js, jsx) no nosso caso tsx, onde será o componente renderizado quando acessado a página.  
Temos alguns arquivos "especiais", para entender mais sobre eles recomendo a leitura da documentação do [Next](https://nextjs.org/docs/app/building-your-application/routing#the-app-router)  

**A responsabilidade da pasta app é apenas para páginas e configurações da mesma**, ou seja, nela vamos ter providers (onde vamos privar as rotas para cada tipo de usuário, configurações globais de css, contextos).  

É importante lembrar que existe uma hierarquia de configuração de página, caso você faça uma configuração no diretório raiz da aplicação **/** todas as outras páginas vão herdar essa configuração, caso seja no diretório **/dashboard** apenas diretórios filhos de dashboard vão herdar, levando em consideração o exemplo acima se eu criar um arquivo de configuração em **/dashboard** o diretório **/dashboard/settings** também vai herdar essa configuração mas nada impede que ele também crie uma configuração que vai ser usada só por ele juntamente com a que ele herdou. Para mais informações consulte a documentação do [Next](https://nextjs.org/docs/app/building-your-application/routing#component-hierarchy)

### Lib

Na pasta lib ela é utilizada **exclusivamente** para fazer configurações/components de bibliotecas. Por exemplo:  
```typescript
'use client';

import { useServerInsertedHTML } from 'next/navigation';
import React, { useState } from 'react';

import { GlobalStyle } from '../../styles/globalStyles';

import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export function StyledComponentRegistry({
  children
}: {
  children: React.ReactNode;
}) {
  const [styleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styleSheet.getStyleElement();
    styleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined')
    return (
      <>
        <GlobalStyle />
        {children}
      </>
    );

  return (
    <StyleSheetManager sheet={styleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
```
Componente de configuração da biblioteca *Styled Components* para utilizar em toda aplicação, consequentemente ela vai adicionada ao arquivo no diretório **/**

Como padrão, vamos adicionar uma interface de comunicação, ou seja no diretório raiz da pasta lib, vamos ter um index.ts onde vamos exportar todas as nossas funções  
<img src="https://i.imgur.com/9O6zgTH.png" />

e nesse *index.ts*  ele vai servir apenas para exportar as funções
```typescript
export { StyledComponentRegistry } from './StyledComponentRegistry';
```

### Functions

A estrutura de functions vai seguir a mesma ideia da de lib, **a responsabilidade dela é alocar funções específicas que podem ser reutilizadas**, exemplo: conversões (data, moeda, tempo e etc), função para reodernar dados. Essas funções geralmente vão ser utilizadas em components ou page.

Para criar uma função você vai criar uma pasta com o nome da função, e um arquivo index.ts dentro da pasta onde vai fazer a função, e no index.ts da pasta root(/function) vai ser usada apenas para exportar assim como a pasta lib  
<img src="https://i.imgur.com/8HqwkRp.png" />

### Components

A pasta de componentes será utilizada **apenas** para criação de componentes reutilizaveis.  
Exemplos de componentes: Botões, Listas, Tabelas, Inputs, Modal e etc.  
```typescript
import { ButtonHTMLAttributes, ReactNode } from 'react';

import * as S from './styles';

type ButtonProps = {
  label?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  label = '',
  startAdornment,
  endAdornment,
  ...rest
}: ButtonProps) {
  return (
    <S.Button {...rest}>
      {startAdornment && <span>{startAdornment}</span>}
      {label}
      {endAdornment && <span>{endAdornment}</span>}
    </S.Button>
  );
}

```

### Styles

A pasta styles tem a **responsabilidade de definir estilos GLOBAIS**, por exemplo cores que vai ser utilizada no sistema, reset css, temas e etc.

### Services

Services tem como responsabilidade fazer chamadas a api, simulando o service utilizado na camada de backend. Por exemplo, se quisermos obter resultados de uma entidade chamada User, vamos criar uma pasta chamada user e dentro dela vamos ter um *index.ts* e *types.ts*, a responsabilidade do **index** é única para fazer as requisições utilizando o axios e do **types** é declarar o tipo das respostas que vamos obter as requisições.  

<img src="https://i.imgur.com/OG3ZA9T.png" />

### Types

**A pasta types é responsável por definir tipos relacionado a bibliotecas**

## Comunicação de pastas

<img src="https://i.imgur.com/PRqcRMl.png" />  

## Boas práticas

Para garantir um boa manutenção e introdução de futuras features, vamos utilizar de algumas "regras" além do ESLint, Prettier e algumas outras já citadas em **Estrutura de Pastas**

- Se atentar as convenções de nomenclaturas em criação de diretórios/arquivos
  - Camel Case
    - Vão ser usadas nas pastas de functions, lib, services, styles e types
      - exemplo de uma função para converter hora em ms: **c**onverter**H**ora**M**s()
  - Pascal Case
    - Vão ser usadas para nomear componentes:
      - Exemplo de um componente de formulário
        - **F**orm**L**ogin
  - Snake Case
    - Em casos de declaração de variáveis de ambiente
      - **API_URL**
      - **KEY_JWT**

- **NÃO RECRIAR COISAS EXISTENTE**
  - Temos alguns componentes que vão ser padronizados para todo o sistema, então não se deve recriar o que já existe
    - Ex: Temos um componente de *input*, não temos porque chamar o input padrão do react/html
    - Em casos extremos de recriação deve ser comunicado.

- Sempre avaliar a criação de um novo componente, vamos utilizar a ideia de [atomic components](https://atomicdesign.bradfrost.com/chapter-2/#:~:text=Atoms%20are%20the%20basic%20building,are%20the%20smallest%20functional%20unit.)
  
- Usar adequadamente as estruturas de pastas
  - Se temos uma pasta específica para fazer requisições, não temos porque fazer uma requisição direto no componente/página

- A linguagem a ser utilizada vai ser inglês, visando não confundir o desenvolvedor visto que existe hooks, e alguns códigos de biblioteca usado por convenção em inglês.

- A estilização (específica) de componentes/páginas deve acontecer na pasta do componente/página.
  - <img src="https://i.imgur.com/4cPiQ1D.png" />  

- Quando importado componentes de estilo, sempre usar o padrão de importar todos como S para não confundir componentes de estilo com elementos HTML.

  - ```typescript
    import * as S from './styles';

    /// retorno do componente
    <S.Div>
      <h1>Esta é uma tag html</h1>
    </S.Div> //<- Esse é um componente estilizado
    ```

## Links de referência

[Documentação NextJS](https://nextjs.org/docs)  
[Documentação React](https://pt-br.react.dev/)  
[Documentação Styled Components](https://styled-components.com/docs)  
[Playlist de NextJS 13](https://youtu.be/2da8JUmNX8M)  
[Princípios SOLID em React](https://www.codigofonte.com.br/artigos/aplicando-principios-solid-em-react)  
[Aplicando Atomic Design em React](https://medium.com/rd-shipit/como-criar-componentes-react-com-uma-arquitetura-escal%C3%A1vel-usando-atomic-design-74a67aaf47e0)
