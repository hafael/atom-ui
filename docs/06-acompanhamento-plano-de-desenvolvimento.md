# Acompanhamento do Plano de Desenvolvimento

Este documento serve para registrar e acompanhar o cumprimento do plano de desenvolvimento do projeto Atom UI.

## Metodologia

Utilizaremos uma abordagem ágil com Sprints semanais. O progresso será rastreado através de um quadro Kanban simples, representado em tabelas de Markdown.

**Status das Tarefas:**

*   **A Fazer:** Tarefa planejada, mas não iniciada.
*   **Fazendo:** Tarefa em andamento.
*   **Feita:** Tarefa concluída e validada.
*   **Impedimento:** Tarefa bloqueada por algum fator externo ou dependência.

---

## Metas Macro

As metas macro representam os grandes objetivos do projeto.

1.  **Estrutura Inicial do Projeto:** Configurar o ambiente de desenvolvimento, criar o repositório e definir a arquitetura base da aplicação.
2.  **Implementação dos Componentes de UI:** Desenvolver todos os componentes de UI reutilizáveis definidos no documento `04-componentes-de-ui.md`.
3.  **Integração com a API Atom:** Conectar o frontend com a API do Atom, garantindo a comunicação e o fluxo de dados.
4.  **Desenvolvimento das Funcionalidades:** Implementar as jornadas de usuário e funcionalidades descritas no documento `02-jornada-e-funcionalidades.md`.
5.  **Testes e Validação:** Garantir a qualidade do software através de testes unitários, de integração e de usabilidade.
6.  **Implantação (Deploy):** Publicar a aplicação em um ambiente de produção.

---

## Acompanhamento dos Sprints

### Sprint 1: Estrutura do Projeto e Componentes Iniciais

**Período:** 30/10/2025 - 06/11/2025

**Objetivo:** Dar o pontapé inicial no desenvolvimento, configurando o ambiente e criando os primeiros componentes essenciais.

| Micro Meta (Tarefa) | Status | Responsável | Observações |
| :--- | :--- | :--- | :--- |
| Configurar ambiente de desenvolvimento (Node.js, Linter, etc.) | `Feita` | - | - |
| Criar repositório no GitHub | `A Fazer` | - | - |
| Definir estrutura de pastas do projeto | `A Fazer` | - | - |
| Criar componente `Button` | `A Fazer` | - | - |
| Criar componente `Input` | `A Fazer` | - | - |
| Criar componente `Header` | `A Fazer` | - | - |

### Sprint 2: Mais Componentes e Início da Integração

**Período:** 07/11/2025 - 14/11/2025

**Objetivo:** Avançar na biblioteca de componentes e iniciar a camada de serviço para comunicação com a API.

| Micro Meta (Tarefa) | Status | Responsável | Observações |
| :--- | :--- | :--- | :--- |
| Criar componente `Card` | `A Fazer` | - | - |
| Criar componente `Modal` | `A Fazer` | - | - |
| Criar componente `Table` | `A Fazer` | - | - |
| Estruturar serviço de API (client HTTP) | `A Fazer` | - | - |
| Implementar endpoint de autenticação | `A Fazer` | - | Depende da API |

### Sprint 3: Funcionalidade de Login e Dashboard

**Período:** 15/11/2025 - 22/11/2025

**Objetivo:** Implementar a primeira funcionalidade completa, permitindo que o usuário se autentique e veja uma tela inicial.

| Micro Meta (Tarefa) | Status | Responsável | Observações |
| :--- | :--- | :--- | :--- |
| Desenvolver a tela de Login | `A Fazer` | - | - |
| Integrar tela de Login com o serviço de autenticação | `A Fazer` | - | - |
| Desenvolver a estrutura da tela de Dashboard | `A Fazer` | - | - |
| Proteger rotas que exigem autenticação | `A Fazer` | - | - |

