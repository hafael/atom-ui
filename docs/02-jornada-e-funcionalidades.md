# Jornada do Usuário e Funcionalidades

Este documento detalha a experiência do usuário final e as funcionalidades que a aplicação deve oferecer.

## Persona

*   **Nome:** Cliente Final (Portador da Memória)
*   **Perfil:** Um indivíduo ou família que contratou o serviço de digitalização de seu acervo pessoal (fotos, vídeos, cartas). Não possui conhecimento técnico ou arquivístico.
*   **Objetivo:** Acessar seu acervo digitalizado de forma fácil, reviver suas memórias e enriquecê-las com descrições e histórias, para que futuras gerações possam entendê-las.

## Jornada do Usuário

1.  **Recebimento das Credenciais:** O cliente recebe um e-mail da empresa com um link para a nova aplicação, junto com um nome de usuário e uma senha.

2.  **Primeiro Acesso e Login:**
    *   O cliente acessa o link e vê uma tela de login simples e acolhedora.
    *   Ele insere seu usuário e senha. O sistema o autentica na API do AtoM.

3.  **Dashboard (Visão Geral dos Álbuns):**
    *   Após o login, o cliente é direcionado para uma página principal que exibe seus "álbuns" (que correspondem às coleções ou dossiês no AtoM).
    *   Cada álbum é apresentado com uma imagem de capa (a primeira foto do álbum, por exemplo) e um título (ex: "Férias de 1985", "Casamento dos Avós").

4.  **Visualização de um Álbum:**
    *   Ao clicar em um álbum, o cliente navega para uma galeria de mídias.
    *   As fotos e vídeos do álbum são exibidos em uma grade de miniaturas.
    *   Um indicador visual (ex: um ícone "i" ou "...") mostra quais mídias ainda não foram descritas.

5.  **Visualização e Descrição de uma Mídia:**
    *   O cliente clica em uma miniatura. A foto ou vídeo é exibido em destaque (em um modal ou em uma nova página).
    *   Ao lado da mídia, há um formulário com perguntas simples e diretas:
        *   "Que título você daria para esta memória?"
        *   "Quem são as pessoas principais nesta foto/vídeo?"
        *   "Onde e quando esta memória foi registrada? (Pode ser aproximado)"
        *   "Conte a história por trás deste momento."
    *   Campos de data podem ter seletores de calendário amigáveis, com opção de inserir apenas o ano ou mês/ano.
    *   O sistema salva o progresso automaticamente ou através de um botão "Salvar Descrição".

6.  **Navegação e Logout:**
    *   O cliente pode facilmente voltar para a galeria do álbum ou para a lista de todos os álbuns.
    *   Ao final da sessão, ele clica em "Sair" e seu acesso é encerrado de forma segura.

## Lista de Funcionalidades (User Stories)

*   **Autenticação:**
    *   Como usuário, quero poder me logar com um usuário e senha para acessar meu acervo de forma segura.
    *   Como usuário, quero que o sistema me mantenha logado durante minha sessão, mas que me desconecte ao fechar o navegador ou clicar em "Sair".

*   **Visualização:**
    *   Como usuário, quero ver todos os meus álbuns em uma página principal para ter uma visão geral do meu acervo.
    *   Como usuário, quero poder clicar em um álbum e ver todas as fotos e vídeos contidos nele em uma galeria.
    *   Como usuário, quero poder visualizar uma foto ou vídeo em tamanho maior para ver os detalhes.

*   **Descrição de Mídias:**
    *   Como usuário, quero ver um formulário simples ao lado de cada mídia para que eu possa descrevê-la.
    *   Como usuário, quero ser guiado por perguntas claras (quem, o quê, onde, quando, por quê) em vez de campos técnicos.
    *   Como usuário, quero que a data possa ser inserida de forma flexível (dia/mês/ano, mês/ano ou apenas ano).
    *   Como usuário, quero receber uma confirmação visual de que minha descrição foi salva com sucesso.

*   **UX/UI:**
    *   Como usuário, quero ver indicadores de progresso (loading spinners) enquanto o sistema carrega minhas mídias.
    *   Como usuário, quero que a interface seja limpa, intuitiva e responsiva, funcionando bem tanto no computador quanto em um tablet.
    *   Como usuário, quero ver dicas ou textos de ajuda (tooltips) se eu não entender o que uma pergunta significa.
