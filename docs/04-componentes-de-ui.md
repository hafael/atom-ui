# Componentes de UI Reutilizáveis

Para garantir consistência visual, agilidade no desenvolvimento e manutenibilidade, a aplicação será construída de forma modular, utilizando componentes Vue.js. A biblioteca [Tailwind CSS](https://tailwindcss.com/) permitirá a estilização direta nas classes dos componentes, e o [Headless UI](https://headlessui.dev/) (ou similar) fornecerá a base de lógica e acessibilidade para componentes complexos.

Abaixo está uma lista dos principais componentes a serem desenvolvidos.

## Componentes de Layout

*   **`AppLayout.vue`**
    *   **Descrição:** O esqueleto principal da aplicação para páginas que exigem autenticação. Inclui o cabeçalho principal com o logo, nome do usuário e botão de logout, e um rodapé simples.
    *   **Slots:** `default` para o conteúdo da página.

*   **`AuthLayout.vue`**
    *   **Descrição:** Um layout mais simples, centrado na tela, para páginas de autenticação como Login ou "Esqueci minha senha".

## Componentes de Página (Views)

Estes são os componentes de nível superior que representam as "páginas" da aplicação, gerenciados pelo Vue Router.

*   **`LoginView.vue`**
    *   **Descrição:** Contém o `AuthLayout` e o componente `LoginForm`.

*   **`DashboardView.vue`**
    *   **Descrição:** A página principal após o login. Exibe uma grade de `AlbumCard`, representando as coleções do usuário.

*   **`AlbumView.vue`**
    *   **Descrição:** Exibe o conteúdo de um álbum específico. Contém um `MediaGrid` com as fotos e vídeos.

*   **`MediaView.vue`**
    *   **Descrição:** A página de visualização e edição de uma única mídia. Exibe a mídia em destaque e o `DescriptionForm`.

## Componentes Funcionais

*   **`LoginForm.vue`**
    *   **Props:** N/A
    *   **Descrição:** Formulário com campos para "usuário", "senha" e um botão "Entrar". Responsável por emitir um evento com as credenciais para a view pai, que chamará o serviço de autenticação. Inclui tratamento de erros (ex: "Usuário ou senha inválidos").

*   **`AlbumCard.vue`**
    *   **Props:** `title` (string), `thumbnailUrl` (string), `itemCount` (number)
    *   **Descrição:** Um card clicável que representa um álbum na dashboard. Exibe uma imagem, o título e a quantidade de itens.

*   **`MediaGrid.vue`**
    *   **Props:** `mediaItems` (array)
    *   **Descrição:** Uma grade responsiva que exibe miniaturas das mídias. Cada miniatura é um componente `MediaThumbnail`.

*   **`MediaThumbnail.vue`**
    *   **Props:** `media` (object), `isDescribed` (boolean)
    *   **Descrição:** Uma miniatura clicável dentro do `MediaGrid`. Pode ter um indicador visual se a mídia já foi descrita.

*   **`MediaViewer.vue`**
    *   **Props:** `media` (object)
    *   **Descrição:** Componente que exibe a imagem ou o vídeo em tamanho grande. Se for vídeo, utiliza a tag `<video>`.

*   **`DescriptionForm.vue`**
    *   **Props:** `initialData` (object)
    *   **Descrição:** O formulário principal para descrever uma mídia. Contém os campos simplificados (título, pessoas, local, data, história). Emite um evento com os dados atualizados. Utiliza componentes de base como `TextInput` e `DatePicker`.

## Componentes de Base (UI Kit)

Estes são os blocos de construção fundamentais.

*   **`Button.vue`**
    *   **Props:** `variant` ('primary', 'secondary'), `disabled` (boolean)
    *   **Descrição:** Botão genérico com estilos pré-definidos.

*   **`TextInput.vue`**
    *   **Props:** `label`, `modelValue`, `placeholder`, `error` (string)
    *   **Descrição:** Um campo de input de texto com label e espaço para mensagem de erro.

*   **`TextareaInput.vue`**
    *   **Props:** `label`, `modelValue`, `rows` (number)
    *   **Descrição:** Similar ao `TextInput`, mas para textos mais longos.

*   **`DatePicker.vue`**
    *   **Props:** `label`, `modelValue`
    *   **Descrição:** Um seletor de data amigável que permite a seleção de ano, mês/ano ou data completa.

*   **`Spinner.vue`**
    *   **Descrição:** Animação de carregamento para indicar que uma operação está em andamento.

*   **`Tooltip.vue`**
    *   **Props:** `text` (string)
    *   **Descrição:** Exibe uma caixa de ajuda quando o usuário passa o mouse sobre um ícone de interrogação.
