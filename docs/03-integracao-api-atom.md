# Integração com a API do AtoM e Mapeamento de Dados

Este documento técnico descreve como a aplicação Vue.js irá interagir com a API REST do AtoM e, crucialmente, como os campos simplificados do formulário serão mapeados para os campos de metadados do padrão ISAD(G) usados pelo AtoM.

## Endpoints da API

A aplicação irá interagir primariamente com os seguintes endpoints da API do AtoM. A URL base será configurada via variável de ambiente (`VITE_ATOM_API_URL`).

*   **Autenticação:**
    *   O AtoM não possui um endpoint de login que retorna um token por padrão. A autenticação na API REST é feita via `API Key` do usuário. A tela de "login" do nosso app pode ser um disfarce: o app já teria uma chave de API de um usuário "gerente" para consultar os usuários e, em seguida, usar a chave do usuário específico que fez o login para as operações subsequentes. Uma abordagem mais segura seria um backend intermediário (BFF - Backend for Frontend), mas para simplificar, podemos assumir que a chave do usuário será usada diretamente pelo frontend (com os devidos cuidados de segurança).
    *   **Alternativa:** Usar um endpoint customizado no AtoM ou um plugin que gerencie tokens JWT.

*   **Consulta de Objetos de Informação (Information Objects):**
    *   `GET /api/informationobjects`: Para buscar os "álbuns" (coleções/fundos) associados a um usuário.
    *   `GET /api/informationobjects/:slug`: Para obter todos os detalhes de uma memória específica.
    *   `GET /api/informationobjects/tree/:slug`: Para buscar os "memórias" (itens) dentro de um "álbum" (coleção).

*   **Atualização de Objetos de Informação:**
    *   `PUT /api/informationobjects/:slug`: Para atualizar os metadados de uma memória após o usuário preencher o formulário de descrição.

## Mapeamento de Campos: O Coração da Tradução

Esta é a lógica central que traduz a simplicidade da interface para a complexidade arquivística.

| Campo na UI (Vue.js) | Campo de Destino na API AtoM (ISAD(G)) | Formato/Observações                                                                                                                                                           |
| -------------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`              | `title`                                | Mapeamento direto. String.                                                                                                                                                    |
| `identifier`         | `identifier`                           | Mapeamento direto. String.                                                                                                                                                    |
| `format`             | `extent_and_medium`                    | Mapeamento direto. String.                                                                                                                                                    |
| `dateType`, `dateValue`, `dateValueStart`, `dateValueEnd` | `dates` (array)                        | O componente de data no frontend deve permitir datas flexíveis. O valor será formatado como uma string (ex: "1995-07-22", "1995-07", "1995") e inserido no array de datas do AtoM. |
| `source`             | `source`                               | Mapeamento direto. String.                                                                                                                                                    |
| `description`        | `scope_and_content`                    | Mapeamento direto. String.                                                                                                                                                    |
| `rights`             | `conditions_governing_access`          | Mapeamento direto. String.                                                                                                                                                    |
| `notes`              | `notes` (array)                        | Mapeamento direto. Array de strings.                                                                                                                                          |
| `status`             | `publication_status`                   | Booleano (true para 'Published', false para 'Not published').                                                                                                                 |

## Tratamento da Hierarquia

*   **Álbum:** A aplicação irá tratar os níveis de descrição do AtoM que são `Fonds` ou `Collection` como "Álbuns".
*   **Memória:** Os níveis de descrição `Item` ou `File` que contêm um objeto digital associado serão tratados como "Memórias" (as fotos e vídeos).

A aplicação irá buscar inicialmente os níveis superiores e, ao selecionar um deles, buscará os níveis filhos, navegando pela árvore de descrição do AtoM de forma transparente para o usuário.

---

## Ambiente de Testes

Para acesso, utilize as seguintes credenciais padrão:

*   **Usuário:** `demo@example.com`
*   **Senha:** `demo`
