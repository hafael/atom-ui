# AtoM Family Memories UI

Este projeto é uma interface de usuário moderna e amigável, construída com Vue.js e Tailwind CSS, para interagir com uma instância da plataforma [AtoM (Access to Memory)](https://www.accesstomemory.org/).

O objetivo principal é fornecer a usuários não especializados (clientes de serviços de digitalização de acervos familiares) uma maneira simples e intuitiva de visualizar e descrever suas memórias (fotos, vídeos), sem a necessidade de compreender a complexidade dos padrões de descrição arquivística.

## O Problema a Ser Resolvido

A plataforma AtoM é uma ferramenta poderosa para arquivistas, mas sua interface e seus campos de metadados, baseados em normas como a ISAD(G), são complexos para o público geral. A tarefa de descrever uma simples foto de família pode ser intimidante.

Este aplicativo atua como uma camada de tradução, apresentando a hierarquia de `Fundo > Coleção > Item` como `Álbuns > Memórias` e transformando campos como `Scope and content` ou `Creator` em perguntas simples como "Quem está na foto?" ou "Conte a história desta memória".

## Tecnologias Propostas

*   **Frontend Framework:** [Vue.js 3](https://vuejs.org/) (Composition API)
*   **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
*   **Biblioteca de Componentes UI:** [Headless UI](https://headlessui.dev/) para componentes acessíveis e totalmente estilizáveis com Tailwind. Alternativamente, [DaisyUI](https://daisyui.com/) para um conjunto de componentes prontos.
*   **Requisições HTTP:** [Axios](https://axios-http.com/) para comunicação com a API do AtoM.
*   **Roteamento:** [Vue Router](https://router.vuejs.org/).

## Funcionalidades Principais

*   Autenticação de usuário segura, vinculada a um fundo/coleção específico no AtoM.
*   Visualização de acervos em formato de "álbuns" e "galerias".
*   Interface guiada para descrição de mídias (fotos e vídeos) com campos simplificados.
*   Tradução automática dos dados inseridos para os metadados correspondentes na API do AtoM.
*   Design responsivo e focado na experiência do usuário.

## Estrutura do Projeto (Inicial)

```
/
├── docs/                  # Documentação detalhada do projeto
├── public/                # Arquivos estáticos
├── src/
│   ├── assets/            # Imagens, fontes, etc.
│   ├── components/        # Componentes Vue reutilizáveis
│   ├── views/             # Páginas da aplicação (Login, Album, MediaView)
│   ├── router/            # Configuração do Vue Router
│   ├── services/          # Lógica de negócio e comunicação com API
│   ├── App.vue            # Componente raiz
│   └── main.js            # Ponto de entrada da aplicação
├── .gitignore
├── index.html
├── package.json
└── README.md
```

## Como Iniciar (Exemplo)

1.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_REPOSITORIO]
    cd atom-ui
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    Crie um arquivo `.env` na raiz do projeto e adicione a URL da sua API do AtoM:
    ```
    VUE_APP_ATOM_API_URL=https://seu-atom.com/api
    ```

4.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  **Compile para produção:**
    ```bash
    npm run build
    ```
