# ConectaCursos

Projeto acadêmico da disciplina **Programação Web I**, do curso de **Engenharia de Software da Universidade do Estado do Pará (UEPA)**, turma **2026**.

## Descrição e objetivo

O ConectaCursos é um site que reúne informações sobre cursos nas áreas de **Tecnologia, Saúde e Educação**. A proposta é ajudar estudantes e outras pessoas interessadas em aprender a encontrar oportunidades para complementar a formação, desenvolver habilidades e agregar conhecimentos ao currículo.

Em vez de procurar informações em várias plataformas separadamente, o visitante pode explorar um catálogo, comparar opções e acessar o endereço da instituição responsável pelo curso escolhido.

O ConectaCursos apresenta e organiza as oportunidades. A inscrição, as aulas e a emissão do certificado acontecem nas plataformas externas. O aproveitamento de certificados como horas complementares depende das regras da instituição de ensino do estudante.

## Para quem o site foi pensado?

- Estudantes que procuram formação complementar.
- Pessoas que desejam aprender algo novo ou desenvolver habilidades profissionais.
- Visitantes que precisam comparar cursos e conhecer seus conteúdos, requisitos e cargas horárias.

## Como usar o site

### 1. Conheça a proposta

Ao acessar a página inicial, leia a apresentação da iniciativa. Utilize os atalhos do cabeçalho ou do rodapé para chegar às seções do site.

No celular, abra o menu para visualizar as opções de navegação.

### 2. Explore o catálogo

Acesse **Explorar cursos** para consultar as opções disponíveis.

Cada cartão apresenta um resumo do curso, com informações como nome, área, plataforma responsável e carga horária. A imagem ajuda a identificar visualmente a opção.

### 3. Pesquise e use os filtros

Digite o nome do curso ou parte dele no campo de pesquisa. Para refinar a busca, selecione os filtros de área, plataforma e duração máxima.

Os filtros podem ser combinados. Por exemplo, você pode procurar cursos de Tecnologia de uma determinada plataforma com até 20 horas.

Se nenhum curso aparecer, apague o texto da pesquisa ou amplie os filtros. Confira também se a visualização de favoritos está ativa, pois ela pode restringir os resultados.

### 4. Consulte os detalhes

Clique em **Conhecer curso** no cartão desejado.

Será aberta uma janela com a imagem, a descrição completa e as especificações do curso. Leia essas informações para avaliar se a opção corresponde ao seu interesse e se você atende aos requisitos.

Para retornar ao catálogo, feche a janela pelo botão de fechar.

### 5. Acesse a plataforma do curso

Nos detalhes, utilize o link do curso para acessar a plataforma responsável.

Confira a disponibilidade, as regras de inscrição, os requisitos e as condições de certificação diretamente nessa plataforma. Essas informações podem mudar ao longo do tempo.

### 6. Salve seus favoritos

Utilize o botão de favorito do curso para guardar uma opção que deseja consultar depois. Para removê-la, acione o botão novamente.

A opção **Meus favoritos** permite visualizar os cursos salvos. O contador indica quantos cursos foram marcados.

Os favoritos ficam armazenados no navegador utilizado. Eles não são sincronizados entre dispositivos nem separados por conta. Limpar os dados do site no navegador pode apagar essa seleção.

### 7. Descubra opções pelo questionário

Acesse **Descobrir meu curso**, informe sua área de interesse e seu objetivo e preencha os demais campos apresentados.

Depois, clique no botão de encontrar curso e consulte as sugestões. Abra os detalhes das opções sugeridas para conhecer melhor cada uma.

As sugestões seguem regras aplicadas ao catálogo, sem inteligência artificial. Elas ajudam na escolha, mas a conferência dos requisitos deve ser feita pelo visitante.

### 8. Escolha o tema

Utilize o controle de tema para alternar entre a aparência clara e a escura. A preferência é salva no navegador, quando o armazenamento está disponível.

### 9. Experimente login e cadastro

Acesse a página de login ou cadastro pelos links do site. Preencha os campos e observe as mensagens de validação. Na demonstração, utilize apenas dados fictícios.

**O login e o cadastro são demonstrativos.** O projeto não possui autenticação real ou banco de dados de usuários. A senha não é armazenada nem verificada contra uma conta cadastrada. A sessão demonstrativa utiliza dados temporários no navegador e pode ser encerrada pelo botão **Sair**.

## Funcionalidades implementadas

| Funcionalidade | Como ajuda o visitante |
| --- | --- |
| Catálogo de cursos | Reúne opções de diferentes áreas e plataformas. |
| Pesquisa por nome | Ajuda a localizar um curso específico. |
| Filtros combinados | Restringem os resultados conforme as preferências. |
| Resumos nos cartões | Facilitam uma primeira comparação entre as opções. |
| Detalhes dos cursos | Apresentam descrição completa, imagem e especificações. |
| Links externos | Encaminham à plataforma responsável pela oferta. |
| Favoritos | Guardam opções para consulta posterior no mesmo navegador. |
| Questionário de sugestões | Ajuda quem ainda não sabe qual curso escolher. |
| Tema claro e escuro | Permite escolher a aparência da interface. |
| Layout responsivo | Adapta a apresentação a computadores e telas menores. |
| Login e cadastro demonstrativos | Permitem experimentar o fluxo de entrada e cadastro. |

## Exemplo de uso

Uma estudante deseja aprender programação e procura uma opção de curta duração:

1. Acessa o catálogo e seleciona a área de Tecnologia.
2. Define uma duração máxima para a busca.
3. Compara os resumos dos cursos encontrados.
4. Abre **Conhecer curso** para consultar a descrição e os requisitos.
5. Adiciona uma opção aos favoritos.
6. Acessa a plataforma responsável para conferir a oferta e realizar a inscrição.

## Instruções para execução local

1. Baixe os arquivos do projeto e extraia o ZIP, se necessário.
2. Abra a pasta completa no **Visual Studio Code**.
3. Com a extensão **Live Server** instalada, clique com o botão direito em `index.html` e selecione **Open with Live Server**.
4. Utilize o endereço aberto no navegador para navegar pelo site.

Também é possível abrir `index.html` diretamente no navegador, mas o servidor local é recomendado para manter o funcionamento do armazenamento entre as páginas de forma consistente.

Não é necessário instalar pacotes ou compilar o projeto. Mantenha os arquivos e as pastas em suas posições originais.

O catálogo precisa de JavaScript habilitado. Os links para as plataformas dos cursos exigem conexão com a internet. Favoritos e preferências dependem de o navegador permitir armazenamento.

## Tecnologias utilizadas

| Tecnologia | Uso no projeto |
| --- | --- |
| HTML5 | Organização das páginas, seções, links e formulários. |
| CSS3 | Identidade visual, layout responsivo e temas claro e escuro. |
| JavaScript puro | Pesquisa, filtros, detalhes, favoritos, sugestões e interações. |
| Local Storage | Armazenamento de favoritos e preferência de tema no navegador. |
| Session Storage | Dados temporários da sessão demonstrativa. |

O projeto foi desenvolvido sem frameworks, servidor de aplicação ou banco de dados.

## Estrutura dos arquivos

| Arquivo ou pasta | Conteúdo |
| --- | --- |
| `index.html` | Página principal, apresentação, catálogo, filtros e questionário. |
| `login.html` | Página de entrada demonstrativa. |
| `cadastro.html` | Página de cadastro demonstrativo. |
| `style.css` | Estilos e adaptação do layout às telas. |
| `script.js` | Dados dos cursos e interações do catálogo. |
| `conta.js` | Comportamentos de conta demonstrativa e tema compartilhado. |
| `images/` | Imagens utilizadas no site. |
| `README.md` | Apresentação do projeto e orientações de uso. |
| `LEIA-ME.txt` | Orientações complementares do protótipo. |

## Dúvidas frequentes

**Os cursos são realizados dentro do ConectaCursos?**  
Não. O site é um catálogo que encaminha o visitante às plataformas responsáveis.

**Todo curso vale como hora complementar?**  
A aceitação depende das regras da faculdade ou instituição de ensino. Consulte a coordenação antes de contar com esse aproveitamento.

**Por que meus favoritos não aparecem em outro computador?**  
Porque são salvos no navegador utilizado, sem sincronização por conta.

**Não encontrei nenhum resultado. O que fazer?**  
Apague a pesquisa, amplie os filtros e confira se a opção de mostrar somente favoritos está ativa.

**Um link não abriu ou a oferta mudou. O que fazer?**  
Consulte a plataforma responsável. O catálogo precisa ser revisado quando as instituições alteram seus endereços ou ofertas.

## Identificação dos integrantes

### Iago Melo Pinheiro

- **Matrícula:** 20260001787
- **Área de atuação:** HTML

Desenvolvedor responsável pela estrutura HTML do projeto, incluindo a organização das páginas, elementos, formulários, navegação e componentes da interface.

### Lucas Monteiro

- **Matrícula:** 20260011792
- **Área de atuação:** CSS

Desenvolvedor responsável pela estilização em CSS, incluindo identidade visual, organização dos elementos, responsividade, temas claro e escuro e apresentação dos componentes.

### Mariana Coelho Patrocinio

- **Matrícula:** 20260005347
- **Área de atuação:** JavaScript

Desenvolvedora responsável pela programação em JavaScript, incluindo pesquisa, filtros, gerenciamento de favoritos, recomendações, validações dos formulários, armazenamento de preferências e funcionalidades interativas do catálogo.

**Instituição:** Universidade do Estado do Pará — UEPA.  
**Curso:** Bacharelado em Engenharia de Software.  
**Turma:** 2026.  
**Disciplina:** Programação Web I.

