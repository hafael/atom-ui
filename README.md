# AtoM Family Memories UI

Este projeto é uma interface de usuário moderna e amigável, construída com Vue.js e Tailwind CSS, para interagir com uma instância da plataforma [AtoM (Access to Memory)](https://www.accesstomemory.org/).

O objetivo principal é fornecer a usuários não especializados (clientes de serviços de digitalização de acervos familiares) uma maneira simples e intuitiva de visualizar e descrever suas memórias (fotos, vídeos), sem a necessidade de compreender a complexidade dos padrões de descrição arquivística.

## O Problema a Ser Resolvido

A plataforma AtoM é uma ferramenta poderosa para arquivistas, mas sua interface e seus campos de metadados, baseados em normas como a ISAD(G), são complexos para o público geral. A tarefa de descrever uma simples foto de família pode ser intimidante.

Este aplicativo atua como uma camada de tradução, apresentando a hierarquia de `Fundo > Coleção > Item` como `Álbuns > Memórias` e transformando campos como `Scope and content` ou `Creator` em perguntas simples como "Quem está na foto?" ou "Conte a história desta memória".

## Documentação

A documentação do projeto está dividida nos seguintes arquivos:

| Arquivo | Descrição |
| :--- | :--- |
| [01-arquitetura.md](./docs/01-arquitetura.md) | Descreve a arquitetura geral do sistema, os componentes envolvidos e como eles interagem. |
| [02-jornada-e-funcionalidades.md](./docs/02-jornada-e-funcionalidades.md) | Detalha a experiência do usuário final e as funcionalidades que a aplicação deve oferecer. |
| [03-integracao-api-atom.md](./docs/03-integracao-api-atom.md) | Descreve como a aplicação Vue.js irá interagir com a API REST do AtoM e como os campos do formulário são mapeados. |
| [04-componentes-de-ui.md](./docs/04-componentes-de-ui.md) | Lista e descreve os principais componentes de UI reutilizáveis desenvolvidos para a aplicação. |
| [05-plano-de-desenvolvimento.md](./docs/05-plano-de-desenvolvimento.md) | Descreve um plano de desenvolvimento iterativo, dividido em fases, para a construção da aplicação. |
| [06-acompanhamento-plano-de-desenvolvimento.md](./docs/06-acompanhamento-plano-de-desenvolvimento.md) | Registra e acompanha o cumprimento do plano de desenvolvimento do projeto. |

## Tecnologias Propostas

*   **Frontend Framework:** [Vue.js 3](https://vuejs.org/) (Composition API)
*   **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
*   **Biblioteca de Componentes UI:** [Headless UI](https://headlessui.dev/) para componentes acessíveis e totalmente estilizáveis com Tailwind. Alternativamente, [DaisyUI](https://daisyui.com/) para um conjunto de componentes prontos.
*   **Requisições HTTP:** [Axios](https://axios-http.com/) para comunicação com a API do AtoM.
*   **Roteamento:** [Vue Router](https://router.vuejs.org/).

## Funcionalidades Principais

*   Autenticação de usuário segura, vinculada a um fundo/coleção específico no AtoM.
*   Visualização de acervos em formato de "álbuns" e "galerias", com navegação hierárquica.
*   Interface guiada para descrição de mídias (fotos e vídeos) com campos simplificados e intuitivos.
*   Tradução automática dos dados inseridos para os metadados correspondentes na API do AtoM.
*   Design responsivo e focado na experiência do usuário.

## Acesso

A aplicação está disponível para acesso em:

[https://hafael.github.io/atom-ui/](https://hafael.github.io/atom-ui/)

## Configuração

Antes de iniciar a aplicação, você precisa configurar a URL da API do AtoM. Para isso, crie um arquivo `.env` na raiz do projeto, baseado no arquivo `.env.example`:

```bash
cp .env.example .env
```

Em seguida, edite o arquivo `.env` com a URL da sua instância do AtoM.

## Como Iniciar

1.  **Instale as dependências:**
    ```bash
    npm install
    ```

2.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

3.  **Acesse o aplicativo:**
    Abra o seu navegador e acesse a URL fornecida pelo Vite (geralmente `http://localhost:5173`).
