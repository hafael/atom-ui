# Componentes de UI Reutilizáveis

Para garantir consistência visual, agilidade no desenvolvimento e manutenibilidade, a aplicação é construída de forma modular, utilizando componentes Vue.js. A biblioteca [Tailwind CSS](https://tailwindcss.com/) permite a estilização direta nas classes dos componentes, e o [Headless UI](https://headlessui.dev/) (ou similar) fornece a base de lógica e acessibilidade para componentes complexos.

Abaixo está uma lista dos principais componentes desenvolvidos e utilizados.

## Componentes de Layout

*   **`AppLayout.vue`**
    *   **Descrição:** O esqueleto principal da aplicação para páginas que exigem autenticação. Inclui o cabeçalho principal com o logo, nome do usuário e botão de logout, e um rodapé simples.
    *   **Slots:** `default` para o conteúdo da página.

*   **`AuthLayout.vue`**
    *   **Descrição:** Um layout mais simples, centrado na tela, para páginas de autenticação como Login ou "Esqueci minha senha".

## Componentes de Página (Views)

Estes são os componentes de nível superior que representam as "páginas" da aplicação, gerenciados pelo Vue Router.

*   **`Login.vue`**
    *   **Descrição:** Contém o `AuthLayout` e o componente `LoginForm`.

*   **`Dashboard.vue`**
    *   **Descrição:** A página principal após o login. Exibe uma grade de `AlbumCard`, representando as coleções do usuário.

*   **`Browse.vue`**
    *   **Descrição:** Exibe o conteúdo de um álbum específico ou os detalhes de uma mídia individual. Contém um `MediaGrid` com as fotos e vídeos ou o `DigitalObjectViewer` e o `DescriptionList` para itens individuais.

*   **`Describe.vue`**
    *   **Descrição:** A página de visualização e edição de uma única mídia. Exibe a mídia em destaque e o `DescriptionForm`.

## Componentes Funcionais

*   **`LoginForm.vue`**
    *   **Props:** N/A
    *   **Descrição:** Formulário com campos para "usuário", "senha" e um botão "Entrar". Responsável por emitir um evento com as credenciais para a view pai, que chamará o serviço de autenticação. Inclui tratamento de erros (ex: "Usuário ou senha inválidos").

*   **`AlbumCard.vue`**
    *   **Props:** `title` (string), `levelOfDescription` (string), `childrenCount` (number), `identifier` (string), `thumbnailUrls` (array)
    *   **Descrição:** Um card clicável que representa um álbum ou uma coleção na dashboard/browse. Exibe miniaturas, o título, o nível de descrição e a quantidade de itens.

*   **`MediaGrid.vue`**
    *   **Props:** `mediaItems` (array)
    *   **Descrição:** Uma grade responsiva que exibe miniaturas das mídias. Cada miniatura é um componente `MediaThumbnail`.

*   **`MediaThumbnail.vue`**
    *   **Props:** `media` (object), `isDescribed` (boolean)
    *   **Descrição:** Uma miniatura clicável dentro do `MediaGrid`. Pode ter um indicador visual se a mídia já foi descrita.

*   **`MediaViewer.vue`**
    *   **Props:** `media` (object)
    *   **Descrição:** Componente que exibe a imagem ou o vídeo em tamanho grande. Se for vídeo, utiliza a tag `<video>`.

*   **`DigitalObjectViewer.vue`**
    *   **Props:** `title` (string), `identifier` (string), `levelOfDescription` (string), `digitalObject` (object), `publicationStatus` (string), `referenceCode` (string), `slug` (string)
    *   **Descrição:** Exibe um objeto digital (imagem, vídeo) em destaque, juntamente com informações básicas e botões de ação (descrever, baixar).

*   **`DescriptionForm.vue`**
    *   **Props:** `initialData` (object)
    *   **Descrição:** O formulário principal para descrever uma mídia. Contém campos agrupados de forma mais intuitiva para usuários não-arquivistas (Identificação, Conteúdo, Acesso e Uso, Publicação). Emite um evento com os dados atualizados.

*   **`DescriptionList.vue`**
    *   **Props:** `parentTitle` (string), `referenceCode` (string), `publicationStatus` (string), `levelOfDescription` (string), `extentAndMedium` (string), `dates` (array), `repository` (string), `scopeAndContent` (string), `conditionsGoverningAccess` (string), `existenceAndLocationOfOriginals` (string), `notes` (array)
    *   **Descrição:** Exibe uma lista detalhada das propriedades de descrição de um item, formatada para fácil leitura.

## Componentes de Base (UI Kit)

Estes são os blocos de construção fundamentais.

*   **`Button.vue`**
    *   **Props:** `type` (string), `disabled` (boolean)
    *   **Descrição:** Botão genérico com estilos pré-definidos para ações primárias.

*   **`SecondaryButton.vue`**
    *   **Props:** `type` (string), `disabled` (boolean), `href` (string), `download` (string)
    *   **Descrição:** Botão para ações secundárias, com estilo diferente do `Button` primário. Pode atuar como link para download.

*   **`Input.vue`**
    *   **Props:** `id`, `name`, `modelValue`, `type`, `placeholder`, `required`
    *   **Descrição:** Um campo de input de texto genérico com label e suporte a diferentes tipos.

*   **`Textarea.vue`**
    *   **Props:** `id`, `name`, `modelValue`, `rows`, `placeholder`, `required`
    *   **Descrição:** Um campo de input para textos mais longos.

*   **`Select.vue`**
    *   **Props:** `id`, `name`, `modelValue`, `options` (array de {value, text})
    *   **Descrição:** Um componente de seleção (dropdown) com opções configuráveis.

*   **`DatePicker.vue`**
    *   **Props:** `id`, `name`, `modelValue`
    *   **Descrição:** Um seletor de data amigável que permite a seleção de ano, mês/ano ou data completa.

*   **`Label.vue`**
    *   **Props:** `for` (string)
    *   **Descrição:** Componente de label para campos de formulário, associado a um input pelo `for`.

*   **`Breadcrumb.vue`**
    *   **Props:** `items` (array de {text, to})
    *   **Descrição:** Componente de navegação que mostra a hierarquia da página atual.

*   **`Card.vue`**
    *   **Descrição:** Um contêiner genérico com bordas e sombra para agrupar conteúdo.

*   **`Modal.vue`**
    *   **Props:** `show` (boolean)
    *   **Descrição:** Um componente de diálogo modal que pode ser exibido ou ocultado.

*   **`Table.vue`**
    *   **Descrição:** Um componente para exibir dados em formato de tabela.

*   **`Spinner.vue`**
    *   **Descrição:** Animação de carregamento para indicar que uma operação está em andamento.

*   **`Tooltip.vue`**
    *   **Props:** `text` (string)
    *   **Descrição:** Exibe uma caixa de ajuda quando o usuário passa o mouse sobre um elemento.
