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

3.  **Navegação e Visualização do Acervo:**
    *   Após o login, o cliente é direcionado para uma página principal que exibe seus "álbuns" (que correspondem às coleções ou dossiês no AtoM).
    *   Ao clicar em um álbum, o cliente navega para uma galeria que exibe as mídias (fotos e vídeos) daquele álbum.
    *   A navegação é hierárquica, permitindo que o usuário entre e saia das pastas (álbuns).

4.  **Visualização e Descrição de uma Mídia:**
    *   O cliente clica em uma miniatura. A foto ou vídeo é exibido em destaque.
    *   Abaixo da mídia, são exibidos os detalhes já existentes da memória, como título, data, local, etc.
    *   O usuário pode clicar em "Descrever" para abrir um formulário com campos mais amigáveis e intuitivos, como:
        *   **Identificação:** Título, Código de referência, Formato, Data.
        *   **Conteúdo:** Conteúdo, Fonte.
        *   **Acesso e Uso:** Como acessar?, Outras informações.
        *   **Publicação:** Publicar?.
    *   O sistema salva o progresso através de um botão "Salvar".

5.  **Navegação e Logout:**
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
    *   Como usuário, quero ver os detalhes já cadastrados de uma mídia ao visualizá-la.

*   **Descrição de Mídias:**
    *   Como usuário, quero ver um formulário simples e intuitivo para que eu possa descrever uma mídia.
    *   Como usuário, quero ser guiado por campos com nomes claros e textos de ajuda, em vez de termos técnicos.
    *   Como usuário, quero que a data possa ser inserida de forma flexível (dia/mês/ano, mês/ano ou apenas ano).
    *   Como usuário, quero receber uma confirmação visual de que minha descrição foi salva com sucesso.

*   **UX/UI:**
    *   Como usuário, quero ver indicadores de progresso (loading spinners) enquanto o sistema carrega minhas mídias.
    *   Como usuário, quero que la interface seja limpa, intuitiva e responsiva, funcionando bem tanto no computador quanto em um tablet.
    *   Como usuário, quero ver dicas ou textos de ajuda (tooltips) se eu não entender o que um campo significa.
