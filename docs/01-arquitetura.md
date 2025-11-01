# Arquitetura da Solução

Este documento descreve a arquitetura geral do sistema, os componentes envolvidos e como eles interagem.

## Componentes Principais

1.  **Frontend (Aplicação Vue.js):**
    *   É a interface com a qual o usuário final interage.
    *   Responsável por apresentar os dados de forma amigável, coletar as descrições simplificadas e se comunicar com o backend.
    *   Não possui banco de dados próprio; todo o estado persistente é gerenciado pelo AtoM.
    *   É uma SPA (Single Page Application) hospedada em um servidor web estático (ex: Github Pages, Netlify, Vercel, ou servidor próprio).

2.  **Backend (API do AtoM):**
    *   É o cérebro e o repositório de dados da operação.
    *   Fornece os endpoints para autenticação, consulta de acervos (níveis de descrição) e atualização dos metadados.
    *   A comunicação será feita via REST API, utilizando JSON.

3.  **Usuário Final (Cliente):**
    *   A pessoa que acessa a aplicação Vue.js para visualizar e descrever as memórias de seu acervo familiar.
    *   Possui credenciais (usuário/senha) criadas na plataforma AtoM, com permissões restritas ao seu fundo/coleção.

## Fluxo de Dados e Interação

O diagrama abaixo ilustra o fluxo de interação entre os componentes:

```
+-----------------+      (1) Login      +-----------------+
|                 |--------------------->|                 |
|  Usuário Final  |      (2) Token      |                 |
|                 |<---------------------|                 |
+-------^---------+      (3) Req. Dados |   API do AtoM   |
        |                (4) Ret. Dados |  (Backend)      |
        |                (6) Env. Desc. |                 |
        |                (7) Confirma   |                 |
+-------+---------+      <------------- |                 |
|                 |      -------------> |                 |
| Aplicação Vue.js|--------------------->|                 |
| (Frontend)      |      (5) Renderiza  +-----------------+
|                 |
+-----------------+
```

1.  **Autenticação:** O usuário insere suas credenciais na aplicação Vue. O app envia uma requisição para a API do AtoM.
2.  **Token de Acesso:** Se as credenciais forem válidas, a API do AtoM retorna um token de autenticação (ex: API key ou JWT). Este token será armazenado no cliente (ex: `localStorage`) e enviado em todas as requisições subsequentes.
3.  **Requisição de Dados:** A aplicação solicita à API a lista de "álbuns" (coleções/fundos) aos quais o usuário tem acesso.
4.  **Retorno de Dados:** A API retorna a lista de "álbuns".
5.  **Renderização:** A aplicação Vue renderiza a `Browse.vue`, mostrando os álbuns. Quando o usuário clica em um álbum, o app solicita as "memórias" (itens) daquele álbum e as exibe na mesma `Browse.vue`. Ao clicar em uma mídia, a `Browse.vue` exibe o `DigitalObjectViewer.vue` e o `DescriptionList.vue` com os metadados existentes.
6.  **Envio da Descrição:** O usuário clica em "Descrever" e preenche o `DescriptionForm.vue`. Ao salvar, a aplicação "traduz" esses dados para o formato esperado pela API do AtoM e envia uma requisição `PUT` para o endpoint do item correspondente.
7.  **Confirmação:** A API do AtoM processa a requisição, atualiza os metadados no banco de dados e retorna uma mensagem de sucesso.

## Estrutura de Pastas do Frontend

```
/src
|-- assets/          # Arquivos estáticos (CSS, imagens)
|-- components/      # Componentes de UI reutilizáveis
|-- views/           # Componentes de página (rotas)
|-- router/          # Configuração do Vue Router
|-- services/        # Lógica de comunicação com a API
|-- store/           # Gerenciamento de estado (Vuex)
|-- App.vue          # Componente raiz da aplicação
|-- main.js          # Ponto de entrada da aplicação
```

### Descrição dos Arquivos

*   **`main.js`**: Ponto de entrada da aplicação. Responsável por inicializar o Vue, o Vue Router e montar o componente `App.vue`.
*   **`App.vue`**: Componente raiz da aplicação. Contém o `router-view` que renderiza a página atual.
*   **`/assets/css/tailwind.css`**: Arquivo de estilos principal, onde o Tailwind CSS é configurado.
*   **`/router/index.js`**: Define as rotas da aplicação, mapeando cada URL para um componente de `view`.
*   **`/services/atomDataService.js`**: Serviço que encapsula a lógica de comunicação com a API do AtoM para obter e atualizar os dados.
*   **`/store/index.js`**: Configuração do Vuex, o gerenciador de estado da aplicação. (Atualmente não utilizado)
*   **`/views/`**: Contém os componentes que representam as páginas da aplicação:
    *   **`Login.vue`**: Página de login.
    *   **`Dashboard.vue`**: Página principal que exibe os álbuns do usuário.
    *   **`Browse.vue`**: Página de navegação hierárquica que exibe os álbuns e as mídias.
    *   **`Describe.vue`**: Página para descrever uma mídia.
    *   **`UserView.vue`**: Página para visualização de informações do usuário. (Atualmente não utilizada)

## Considerações de Segurança

*   A comunicação entre o frontend e a API do AtoM deve ser feita exclusivamente via HTTPS para proteger os dados em trânsito.
*   O token de acesso armazenado no cliente é sensível. A aplicação deve ter mecanismos para limpá-lo no logout.
*   As permissões de usuário no AtoM devem ser configuradas de forma granular e restritiva, garantindo que um usuário só possa ver e editar os registros de seu próprio acervo.
