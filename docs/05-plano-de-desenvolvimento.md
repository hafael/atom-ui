# Plano de Desenvolvimento Sugerido

Este documento descreve um plano de desenvolvimento iterativo, dividido em fases, para a construção da aplicação. Cada fase entrega um conjunto de funcionalidades que podem ser testadas e validadas.

---

### Fase 1: Fundação e Autenticação (Sprint 1)

**Objetivo:** Criar a estrutura básica do projeto e permitir que um usuário faça login.
**Status:** `Concluída`

*   **Tarefas:**
    1.  **Setup do Projeto:** `Feita`
    2.  **Variáveis de Ambiente:** `Feita`
    3.  **Layouts e Roteamento:** `Feita`
    4.  **Tela de Login:** `Feita`
    5.  **Serviço de Autenticação:** `Feita`
    6.  **Guardas de Rota:** `Feita`

**Entregável:** Um usuário consegue inserir credenciais, ser autenticado contra a API do AtoM e ser redirecionado para uma página de dashboard.

---

### Fase 2: Visualização de Dados (Read-Only)

**Objetivo:** Exibir os álbuns e as mídias do usuário.
**Status:** `Concluída`

*   **Tarefas:**
    *   Implementar o `AtomDataService.js` para buscar as coleções ("álbuns") e os itens ("memórias"). `Feita`
    *   Desenvolver a `DashboardView` para exibir os álbuns. `Feita`
    *   Desenvolver a `Browse.vue` para exibir as mídias de um álbum. `Feita`
    *   `[NOVO]` **Melhoria de UX:** Adicionar "skeleton loaders" (efeitos de shimmer) enquanto os dados são carregados, melhorando a percepção de performance. `A Fazer`

**Entregável:** O usuário pode fazer login, ver seus álbuns, clicar em um deles e ver a galeria de fotos e vídeos. Nenhuma edição é possível ainda.

---

### Fase 3: Descrição e Edição de Mídias

**Objetivo:** Permitir que o usuário descreva uma mídia.
**Status:** `Em andamento`

*   **Tarefas:**
    *   Desenvolver a `Browse.vue` para exibir uma mídia e o `DescriptionForm`. `Feita`
    *   Implementar a lógica de "tradução/mapeamento" dos campos do formulário para a API no `AtomDataService.js`. `Feita`
    *   `[NOVO]` **Prevenção de Perda de Dados:** Implementar salvamento automático (`auto-save`) no formulário de descrição. `A Fazer`
    *   `[NOVO]` **Feedback Visual:** Adicionar o indicador visual nas miniaturas para mostrar quais mídias já foram descritas. `A Fazer`

**Entregável:** O usuário pode navegar até uma mídia, preencher o formulário de descrição e salvar as informações no AtoM.

---

### Fase 4: Refinamento e UX

**Objetivo:** Polir a aplicação, melhorar a experiência do usuário e tratar casos de borda.
**Status:** `Em andamento`

*   **Tarefas:**
    *   Implementar tratamento de erros global para exibir mensagens amigáveis em caso de falha na API. `A Fazer`
    *   Adicionar componentes de `Tooltip` com textos de ajuda nos campos do formulário. `Feita` (parcialmente, com a refatoração do DescriptionForm)
    *   Garantir a responsividade completa da aplicação. `A Fazer`
    *   `[NOVO]` **Funcionalidade Essencial:** Implementar a funcionalidade de "Logout", limpando o token de acesso do usuário. `A Fazer`

**Entregável:** Uma aplicação funcional, robusta e com uma experiência de usuário aprimorada.

---

### Fase 5: Testes e Qualidade

**Objetivo:** Garantir a robustez e a qualidade da aplicação.
**Status:** `A Fazer`

*   **Tarefas:**
    *   `[NOVO]` **Testes Unitários:** Escrever testes para as lógicas de negócio nos serviços (`AuthService`, `AtomDataService`) e componentes complexos. `A Fazer`
    *   `[NOVO]` **Testes de Jornada (E2E):** Escrever testes automatizados para as jornadas críticas do usuário (login, visualização de álbuns, descrição de uma mídia). `A Fazer`
    *   Realizar um ciclo completo de testes manuais. `A Fazer`

**Entregável:** Código com cobertura de testes e um relatório de testes manuais.

---

### Fase 6: Implantação e Entrega (Deploy)

**Objetivo:** Disponibilizar a aplicação para os usuários.
**Status:** `A Fazer`

*   **Tarefas:**
    *   `[NOVO]` **Automação (CI/CD):** Configurar um pipeline de Integração e Entrega Contínua (usando GitHub Actions, por exemplo) para automatizar a verificação de testes e a geração da build a cada alteração no código. `A Fazer`
    *   Gerar a `build` de produção da aplicação. `A Fazer`
    *   Configurar a hospedagem e realizar o deploy em um ambiente de produção. `A Fazer`
    *   Revisar e atualizar o `README.md` com as instruções finais de acesso e uso. `A Fazer`

**Entregável:** A aplicação online e pronta para ser utilizada pelos clientes, com um processo de deploy automatizado.