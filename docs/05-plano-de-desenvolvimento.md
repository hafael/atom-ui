# Plano de Desenvolvimento Sugerido

Este documento descreve um plano de desenvolvimento iterativo, dividido em fases, para a construção da aplicação. Cada fase entrega um conjunto de funcionalidades que podem ser testadas e validadas.

---

### Fase 1: Fundação e Autenticação (Sprint 1)

**Objetivo:** Criar a estrutura básica do projeto e permitir que um usuário faça login.

*   **Tarefas:**
    1.  **Setup do Projeto:**
        *   Inicializar o projeto Vue.js com Vite ou Vue CLI.
        *   Instalar e configurar Tailwind CSS, Vue Router e Axios.
        *   Definir a estrutura de pastas (`components`, `views`, `services`, etc.).
    2.  **Variáveis de Ambiente:**
        *   Configurar o uso de um arquivo `.env` para a URL da API do AtoM.
    3.  **Layouts e Roteamento:**
        *   Criar os componentes `AppLayout` e `AuthLayout`.
        *   Configurar as rotas iniciais: `/login` e `/` (dashboard).
    4.  **Tela de Login:**
        *   Desenvolver a `LoginView` e o componente `LoginForm`.
    5.  **Serviço de Autenticação:**
        *   Criar um `AuthService.js` que se comunique com a API do AtoM para validar credenciais.
        *   Implementar o armazenamento e a remoção do token de API no `localStorage`.
    6.  **Guardas de Rota:**
        *   Implementar um guarda no Vue Router que redirecione usuários não autenticados para a página de login.

**Entregável:** Um usuário consegue inserir credenciais, ser autenticado contra a API do AtoM e ser redirecionado para uma página de dashboard (ainda vazia).

---

### Fase 2: Visualização de Dados (Read-Only) (Sprint 2)

**Objetivo:** Exibir os álbuns e as mídias do usuário de forma somente leitura.

*   **Tarefas:**
    1.  **Serviço de Dados:**
        *   Criar um `AtomDataService.js` para buscar dados da API.
        *   Implementar a função para buscar as coleções ("álbuns") do usuário.
        *   Implementar a função para buscar os itens ("memórias") de uma coleção.
    2.  **Dashboard de Álbuns:**
        *   Desenvolver o componente `AlbumCard`.
        *   Na `DashboardView`, chamar o serviço para buscar e exibir os álbuns do usuário em uma grade.
    3.  **Galeria de Mídias:**
        *   Desenvolver a `AlbumView` e os componentes `MediaGrid` e `MediaThumbnail`.
        *   Ao clicar em um `AlbumCard`, navegar para a `AlbumView` correspondente, passando o ID do álbum como parâmetro de rota.
        *   Na `AlbumView`, buscar e exibir as mídias do álbum.

**Entregável:** O usuário pode fazer login, ver seus álbuns, clicar em um deles e ver a galeria de fotos e vídeos. Nenhuma edição é possível ainda.

---

### Fase 3: Descrição e Edição de Mídias (Sprint 3)

**Objetivo:** Permitir que o usuário descreva uma mídia.

*   **Tarefas:**
    1.  **Componente de Visualização:**
        *   Desenvolver a `MediaView` e o `MediaViewer` para exibir uma única mídia em destaque.
        *   Configurar a rota para `/album/{albumId}/media/{mediaId}`.
    2.  **Formulário de Descrição:**
        *   Desenvolver o componente `DescriptionForm` com todos os campos simplificados.
        *   Criar os componentes de base necessários: `TextInput`, `TextareaInput`, `DatePicker`.
    3.  **Integração do Formulário:**
        *   Na `MediaView`, ao carregar os dados da mídia, passar os metadados existentes para o `DescriptionForm`.
    4.  **Serviço de Atualização:**
        *   No `AtomDataService.js`, implementar a função para enviar uma requisição `PUT` para a API, atualizando os metadados de um item.
        *   Implementar a lógica de "tradução/mapeamento" dos campos do formulário para os campos da API.
    5.  **Salvar Dados:**
        *   Ao submeter o `DescriptionForm`, chamar o serviço de atualização e exibir uma notificação de sucesso ou erro.

**Entregável:** O usuário pode navegar até uma mídia, preencher o formulário de descrição e salvar as informações no AtoM.

---

### Fase 4: Refinamento e UX (Sprint 4)

**Objetivo:** Polir a aplicação, melhorar a experiência do usuário e tratar casos de borda.

*   **Tarefas:**
    1.  **Indicadores de Carregamento:**
        *   Adicionar o componente `Spinner` em todas as telas que fazem requisições à API.
    2.  **Tratamento de Erros:**
        *   Garantir que erros de API (ex: 404, 500) sejam tratados e que mensagens amigáveis sejam exibidas ao usuário.
    3.  **Textos de Ajuda:**
        *   Implementar o componente `Tooltip` e adicioná-lo aos campos do formulário que possam gerar dúvidas.
    4.  **Responsividade:**
        *   Testar e ajustar todos os componentes e layouts para garantir uma boa experiência em tablets e desktops.
    5.  **Indicadores de Status:**
        *   Implementar o indicador visual nas miniaturas para mostrar quais mídias já foram descritas.

**Entregável:** Uma aplicação funcional, robusta e com uma experiência de usuário aprimorada.

---

### Fase 5: Testes e Implantação (Sprint 5)

**Objetivo:** Garantir a qualidade e disponibilizar a aplicação para os usuários.

*   **Tarefas:**
    1.  **Testes Manuais:**
        *   Realizar um ciclo completo de testes da jornada do usuário.
    2.  **Build de Produção:**
        *   Executar o comando `npm run build` para gerar os arquivos estáticos da aplicação.
    3.  **Implantação (Deploy):**
        *   Configurar a hospedagem (Netlify, Vercel, etc.) e implantar a aplicação.
        *   Configurar o domínio e o certificado SSL.
    4.  **Documentação Final:**
        *   Revisar e atualizar o `README.md` com as instruções finais de acesso e uso.

**Entregável:** A aplicação online e pronta para ser utilizada pelos clientes.
