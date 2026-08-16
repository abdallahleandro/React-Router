# 🎯 Adivinhe

Um jogo de adivinhação de palavras desenvolvido com **React, TypeScript e Vite**, criado durante a Formação Full Stack da Rocketseat.

O objetivo do projeto é descobrir uma palavra a partir de uma dica, informando letras como tentativa e acompanhando a quantidade de tentativas disponíveis.

O projeto foi desenvolvido para colocar em prática conceitos importantes do desenvolvimento frontend moderno, como **componentização, gerenciamento de estado, hooks, tipagem com TypeScript e organização de estilos com CSS Modules**.

---

<img width="787" height="527" alt="Rotas" src="https://github.com/user-attachments/assets/d003e07f-e261-4cce-9ad6-93348ffc08a9" />



## 🎮 Sobre o projeto

No início de cada partida, uma palavra é selecionada aleatoriamente a partir de uma lista de desafios.

O jogador recebe uma dica e precisa descobrir a palavra informando uma letra por tentativa.

A aplicação controla as letras utilizadas, identifica os acertos, calcula a pontuação e verifica automaticamente as condições de vitória ou derrota.

---

## ✨ Funcionalidades

- 🎲 Seleção aleatória de palavras.
- 💡 Sistema de dicas.
- 🔤 Entrada de uma letra por tentativa.
- ✅ Identificação de letras corretas.
- ❌ Controle de letras incorretas.
- 🔁 Verificação de letras já utilizadas.
- 🏆 Sistema de pontuação.
- 🎯 Controle de tentativas.
- 🔄 Reinício da partida.
- 📋 Exibição das letras utilizadas.
- 🧩 Interface dividida em componentes reutilizáveis.
- 🏁 Verificação automática de vitória e derrota.

---

## 🛠️ Tecnologias utilizadas

### Frontend

- **React 19**
- **TypeScript 6**
- **React DOM**
- **Vite 8**

### Estilização

- CSS
- CSS Modules

### Ferramentas

- Node.js
- npm
- Git
- GitHub
- VS Code

---

## 🧠 Conceitos praticados

### React

- Componentização
- `useState`
- `useEffect`
- Props
- Renderização condicional
- Manipulação de eventos
- Gerenciamento de estado
- `StrictMode`

### TypeScript

O projeto utiliza tipos para representar os desafios:

```ts
export type Challenge = {
  id: number;
  word: string;
  tip: string;
};
```

A estrutura tipada ajuda a manter os dados dos desafios organizados e previsíveis durante o desenvolvimento.

### CSS Modules

Os estilos da aplicação são organizados utilizando CSS Modules, permitindo manter os estilos associados aos seus respectivos componentes.

Exemplo:

```tsx
import styles from "./app.module.css";
```

---

## 🧩 Componentização

A interface foi dividida em componentes para facilitar a organização, manutenção e reutilização do código.

```text
src/
├── components/
│   ├── Button/
│   ├── Header/
│   ├── Input/
│   ├── Letter/
│   ├── LettersUsed/
│   └── Tip/
├── utils/
│   └── words.ts
├── App.tsx
├── app.module.css
├── global.css
└── main.tsx
```

### Principais componentes

#### `Header`

Responsável pela apresentação das informações da partida e pela ação de reiniciar o jogo.

#### `Tip`

Exibe a dica relacionada à palavra que precisa ser descoberta.

#### `Input`

Responsável pela entrada da letra utilizada na tentativa.

#### `Button`

Componente reutilizável para ações da interface.

#### `Letter`

Representa cada posição da palavra e permite indicar visualmente as letras descobertas.

#### `LettersUsed`

Apresenta as letras que já foram utilizadas durante a partida.

---

## 🎲 Estrutura dos desafios

Os desafios são armazenados em uma lista tipada utilizando a estrutura `Challenge`.

```ts
export type Challenge = {
  id: number;
  word: string;
  tip: string;
};

export const WORDS: Challenge[] = [
  { id: 1, word: "CSS", tip: "Linguagem de estilos" },
  { id: 2, word: "REACT", tip: "Biblioteca para criar interfaces Web" },
  { id: 3, word: "HTML", tip: "Linguagem de marcação" },
  {
    id: 4,
    word: "Javascript",
    tip: "Uma das linguagens de programação mais utilizadas no mundo",
  },
  {
    id: 5,
    word: "Typescript",
    tip: "Para adicionar tipagem no Javascript",
  },
];
```

Os desafios atuais são relacionados ao desenvolvimento web e incluem:

- CSS
- React
- HTML
- JavaScript
- TypeScript

---

## 🎯 Lógica do jogo

A aplicação utiliza estados para controlar as principais informações da partida:

```text
score
letter
lettersUsed
challenge
```

### Fluxo da partida

```text
Início da partida
       ↓
Seleciona uma palavra aleatória
       ↓
Exibe a dica
       ↓
Jogador informa uma letra
       ↓
Verifica se a letra já foi utilizada
       ↓
Procura a letra na palavra
       ↓
Identifica acerto ou erro
       ↓
Atualiza letras utilizadas
       ↓
Atualiza pontuação
       ↓
Verifica vitória ou derrota
       ↓
Inicia uma nova partida
```

---

## 🏆 Sistema de pontuação

A pontuação é calculada considerando a quantidade de vezes que a letra informada aparece na palavra.

Por exemplo, se uma determinada letra aparecer duas vezes na palavra e o jogador acertá-la, serão contabilizados dois pontos.

A aplicação utiliza a quantidade de ocorrências encontradas para atualizar o estado de pontuação.

---

## 🎯 Controle de tentativas

O limite de tentativas é calculado dinamicamente de acordo com o tamanho da palavra.

Além do número de caracteres da palavra, é adicionada uma margem de cinco tentativas:

```ts
const ATTEMPTS_MARGIN = 5;

const attemptLimit =
  challenge.word.length + ATTEMPTS_MARGIN;
```

Dessa forma, o jogador possui um número de tentativas proporcional ao tamanho da palavra.

---

## 🏁 Condições de vitória e derrota

### Vitória

O jogador vence quando a pontuação corresponde ao número total de caracteres da palavra.

```text
score === challenge.word.length
```

Nesse momento, a aplicação informa que a palavra foi descoberta e inicia uma nova partida.

### Derrota

A partida termina quando o número de letras utilizadas chega ao limite de tentativas calculado para a palavra.

Após o encerramento, uma nova partida é iniciada.

---

## 🔄 Reiniciar o jogo

O jogador também pode reiniciar a partida manualmente.

Antes do reinício, a aplicação solicita uma confirmação:

```text
"Você tem certeza que deseja reiniciar o jogo?"
```

Ao confirmar, a palavra, pontuação e letras utilizadas são resetadas e um novo desafio é selecionado.

---

## 📦 Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- [Node.js](https://nodejs.org/)
- npm

---

## 🚀 Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/abdallahleandro/Projeto_Adivinhe.git
```

### 2. Acesse a pasta do projeto

```bash
cd Projeto_Adivinhe
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto em ambiente de desenvolvimento

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local para acessar a aplicação.

---

## 🏗️ Build para produção

Para gerar a versão otimizada da aplicação:

```bash
npm run build
```

O comando executa a verificação de tipos do TypeScript e o processo de build do Vite.

Para visualizar a versão de produção localmente:

```bash
npm run preview
```

---

## 📜 Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Executa o build de produção |
| `npm run preview` | Executa uma prévia do build |

---

## 📚 Aprendizados

Este projeto foi desenvolvido durante a **Formação Full Stack da Rocketseat** e permitiu colocar em prática conceitos fundamentais do desenvolvimento frontend.

Entre os principais aprendizados:

- Desenvolvimento de interfaces com React.
- Gerenciamento de estado utilizando `useState`.
- Controle de efeitos com `useEffect`.
- Criação de componentes reutilizáveis.
- Comunicação entre componentes através de props.
- Tipagem utilizando TypeScript.
- Organização de estilos com CSS Modules.
- Manipulação de eventos.
- Validação de entradas do usuário.
- Desenvolvimento de regras de negócio no frontend.
- Renderização condicional.
- Organização de projetos React utilizando Vite.

O projeto também ajudou a consolidar a importância de separar responsabilidades e organizar a aplicação em componentes menores e reutilizáveis.

---

## 🎓 Formação

Projeto desenvolvido como parte da:

**Formação Full Stack — Rocketseat**

---

## 👨‍💻 Autor

**Leandro Abdallah**

Profissional de TI em evolução para o desenvolvimento de software, com experiência em suporte técnico e formação Full Stack em andamento.

---

## 📄 Licença

Projeto desenvolvido para fins educacionais durante a Formação Full Stack da Rocketseat.
