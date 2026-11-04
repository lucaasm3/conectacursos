# ConectaCursos

Catálogo de cursos complementares desenvolvido com HTML, CSS e JavaScript, a partir do protótipo original. Projeto acadêmico de Programação Web I, turma 2026.

## Execução

Extraia o ZIP e abra `index.html`. Não há dependências ou etapa de instalação. Também é possível abrir a pasta no VS Code e usar um servidor local. Para publicar, envie o conteúdo da pasta `conectacursos` a uma hospedagem estática.

## Arquivos

- `index.html`: página principal e detalhes dos cursos.
- `login.html` e `cadastro.html`: formulários demonstrativos.
- `style.css`: visual, responsividade e modo claro/escuro.
- `script.js`: dados e funcionalidades do catálogo.
- `conta.js`: tema, validação dos formulários e sessão demonstrativa.
- `images/`: pasta para imagens dos cursos.
- `LEIA-ME.txt`: instruções detalhadas e limites dos dados transcritos.

## Funcionalidades

Cabeçalho escuro, iniciativa no início, atalhos no rodapé, busca por nome, filtros combinados por área, plataforma e duração, favoritos locais, recomendação por regras, detalhes ampliados com descrição completa e link externo, imagens compartilhadas entre cartões e detalhes, alternância de tema e páginas de acesso.

O catálogo tem 46 cursos: 16 de Tecnologia, 15 de Saúde e 15 de Educação. Os links e especificações seguem o documento fornecido pelo grupo; a oferta atual não foi verificada nos sites. A classificação também segue o documento.

## Imagens

Coloque cada imagem em `images/`. No curso correspondente em `script.js`, preencha `imagem` com o caminho relativo, por exemplo `images/autismo.jpg`. O mesmo campo atende ao cartão e à janela de detalhes. Um caminho vazio ou inválido mostra “Insira imagem”.

## Demonstração de acesso

Login e cadastro são simulações sem autenticação real. Os formulários validam os campos; nenhuma senha é armazenada, enviada ou verificada. Apenas nome e e-mail fictícios ficam na sessão do navegador. O botão Sair encerra essa sessão. Os favoritos continuam associados ao navegador, sem isolamento entre usuários.

## Verificação local realizada

- Sintaxe dos dois arquivos JavaScript.
- Referências a arquivos, IDs únicos e vínculos de rótulos e atributos ARIA nas três páginas HTML.
- Execução no Chromium sem erros de JavaScript.
- Catálogo com 46 cursos e contagem por categoria.
- Pesquisa, resultado vazio e filtros combinados por área, plataforma e duração.
- Detalhes ampliados, descrição completa, especificações e endereço de destino do curso testado.
- Favoritos, remoção, atalho e persistência após recarregar.
- Tema e persistência após recarregar.
- Questionário e abertura dos detalhes a partir da recomendação.
- Menu móvel e ausência de rolagem horizontal nas larguras 390, 768, 1024 e 1440 pixels.
- Confirmação de senhas, exibição da senha fictícia, sessão de cadastro, saída e entrada demonstrativa.
- Revisão visual dos temas claro e escuro, janela de detalhes, página principal móvel e cadastro móvel.

Essas verificações locais não equivalem à validação formal W3C ou à auditoria de desempenho pedidas na apostila. Essas etapas, a publicação, o histórico de versionamento e a identificação completa dos integrantes ainda devem ser concluídos pelo grupo.
