# Integração com a API do AtoM e Mapeamento de Dados

Este documento técnico descreve como a aplicação Vue.js irá interagir com a API REST do AtoM e, crucialmente, como os campos simplificados do formulário serão mapeados para os campos de metadados do padrão ISAD(G) usados pelo AtoM.

## Endpoints da API (Suposições)

A aplicação irá interagir primariamente com os seguintes tipos de endpoints da API do AtoM. A URL base será configurada via variável de ambiente (`VUE_APP_ATOM_API_URL`).

*   **Autenticação:**
    *   O AtoM não possui um endpoint de login que retorna um token por padrão. A autenticação na API REST é feita via `API Key` do usuário. A tela de "login" do nosso app pode ser um disfarce: o app já teria uma chave de API de um usuário "gerente" para consultar os usuários e, em seguida, usar a chave do usuário específico que fez o login para as operações subsequentes. Uma abordagem mais segura seria um backend intermediário (BFF - Backend for Frontend), mas para simplificar, podemos assumir que a chave do usuário será usada diretamente pelo frontend (com os devidos cuidados de segurança).
    *   **Alternativa:** Usar um endpoint customizado no AtoM ou um plugin que gerencie tokens JWT.

*   **Consulta de Objetos Digitais (Information Objects):**
    *   `GET /api/informationobjects`: Para buscar os "álbuns" (coleções/fundos) associados a um usuário. A filtragem pode precisar ser feita no lado do cliente se a API não suportar uma filtragem direta por permissão de usuário.
    *   `GET /api/informationobjects?parent={id}`: Para buscar as "memórias" (itens) dentro de um "álbum" (coleção).
    *   `GET /api/informationobjects/{id}`: Para obter todos os detalhes de uma memória específica.

*   **Atualização de Objetos Digitais:**
    *   `PUT /api/informationobjects/{id}`: Para atualizar os metadados de uma memória após o usuário preencher o formulário de descrição.

## Mapeamento de Campos: O Coração da Tradução

Esta é a lógica central que traduz a simplicidade da interface para a complexidade arquivística.

| Campo Simplificado na UI (Vue.js) | Pergunta ao Usuário                               | Campo de Destino na API AtoM (ISAD(G)) | Formato/Observações                                                                                                                                                           |
| ----------------------------------- | -------------------------------------------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`                             | "Que título você daria para esta memória?"         | `title`                                | Mapeamento direto. String.                                                                                                                                                    |
| `eventDate`                         | "Quando esta memória foi registrada?"              | `eventDates` (array)                   | O componente de data no frontend deve permitir datas flexíveis. O valor será formatado como uma string (ex: "1995-07-22", "1995-07", "1995") e inserido no array de datas do AtoM. |
| `people`                            | "Quem são as pessoas principais nesta foto/vídeo?" | `scopeAndContent`                      | O texto será prefixado com "Pessoas na imagem:" e adicionado ao campo de conteúdo e escopo. Ex: "Pessoas na imagem: João da Silva, Maria da Silva."                             |
| `location`                          | "Onde esta memória foi registrada?"                | `scopeAndContent`                      | O texto será prefixado com "Local:" e adicionado ao campo de conteúdo e escopo. Ex: "Local: Praia de Copacabana, Rio de Janeiro."                                                |
| `story`                             | "Conte a história por trás deste momento."         | `scopeAndContent`                      | O texto principal da história será a parte central do campo `scopeAndContent`.                                                                                                |
| `physicalDescription`               | (Gerado automaticamente)                           | `physicalDescription`                  | O app pode, opcionalmente, ler os metadados do arquivo (ex: dimensões da imagem, duração do vídeo) e preencher este campo. Ex: "1 digital image (JPEG, 3.2 MB)".              |

**Exemplo de `scopeAndContent` combinado:**

Se o usuário preencher os campos `people`, `location` e `story`, o conteúdo final enviado para o campo `scopeAndContent` da API seria uma concatenação estruturada:

```
História:
Esta foto foi tirada no aniversário de 5 anos do nosso filho. Foi uma festa surpresa e ele ficou muito feliz.

---
Pessoas na imagem:
João da Silva, Maria da Silva, Carlos (amigo).

---
Local:
Nossa casa antiga em São Paulo.
```

## Tratamento da Hierarquia

*   **Álbum:** A aplicação irá tratar os níveis de descrição do AtoM que são `Fonds` ou `Collection` como "Álbuns".
*   **Memória:** Os níveis de descrição `Item` ou `File` que contêm um objeto digital associado serão tratados como "Memórias" (as fotos e vídeos).

A aplicação irá buscar inicialmente os níveis superiores e, ao selecionar um deles, buscará os níveis filhos, navegando pela árvore de descrição do AtoM de forma transparente para o usuário.

---

## Ambiente de Testes

A plataforma Atom para desenvolvimento e testes está disponível no seguinte endereço:

*   **URL:** `http://localhost:63001`

Para acesso, utilize as seguintes credenciais padrão:

*   **Usuário:** `demo@example.com`
*   **Senha:** `demo`
