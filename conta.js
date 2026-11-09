// Função anônima auto-executável (IIFE): encapsula todo o código para evitar conflitos de variáveis globais com outros scripts.
(() => {
  /* ==========================================================================
     1. GERENCIAMENTO DE TEMA (CLARO / ESCURO) E LOCALSTORAGE
     ========================================================================== */
  const chaveTema = 'conectacursos-tema';
  const chaveSessao = 'conectacursos-sessao-demo';
  const chavePerfil = 'conectacursos-perfil-demo';
  
  let tema = 'claro';
  
  try {
    // Tenta recuperar a preferência de tema salva no navegador (LocalStorage)
    const salvo = localStorage.getItem(chaveTema);
    // Se houver tema salvo válido, usa ele; senão, verifica a preferência do sistema operacional do usuário
    tema = salvo === 'escuro' || salvo === 'claro' ? salvo : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'escuro' : 'claro');
  } catch { 
    // O tema continua funcional mesmo se o navegador bloquear o armazenamento local 
  }

  // Função que aplica o tema atual no documento HTML e atualiza os textos/ícones dos botões
  function aplicarTema() {
    document.documentElement.dataset.tema = tema;
    document.querySelectorAll('.tema-botao').forEach(botao => {
      botao.textContent = tema === 'escuro' ? '☀ Tema claro' : '◐ Tema escuro';
      botao.setAttribute('aria-label', tema === 'escuro' ? 'Ativar modo claro' : 'Ativar modo escuro');
      botao.setAttribute('aria-pressed', String(tema === 'escuro'));
    });
  }

  aplicarTema(); // Aplica o tema assim que o script é carregado

  // Adiciona o evento de clique nos botões de tema para alternar entre claro e escuro e salvar no navegador
  document.querySelectorAll('.tema-botao').forEach(botao => botao.addEventListener('click', () => {
    tema = tema === 'escuro' ? 'claro' : 'escuro';
    aplicarTema();
    try { 
      localStorage.setItem(chaveTema, tema); 
    } catch { 
      // Preferência válida apenas durante a visita atual se o armazenamento estiver bloqueado 
    }
  }));


  /* ==========================================================================
     2. GERENCIAMENTO DE SESSÃO DO USUÁRIO (SESSIONSTORAGE)
     ========================================================================== */

  // Função auxiliar que lê e valida os dados da sessão armazenados temporariamente na aba do navegador
  function lerSessao(chave) {
    try {
      const valor = JSON.parse(sessionStorage.getItem(chave) || 'null');
      return valor && typeof valor.nome === 'string' && typeof valor.email === 'string' ? valor : null;
    } catch { 
      return null; 
    }
  }

  const contaLink = document.querySelector('.conta-link');
  const sair = document.querySelector('.sair-botao');

  // Atualiza a interface do cabeçalho dependendo se o usuário está logado ou não
  function atualizarSessao() {
    const sessao = lerSessao(chaveSessao);
    if (contaLink) {
      contaLink.textContent = sessao ? `Olá, ${sessao.nome.split(' ')[0]}` : 'Entrar';
      contaLink.title = sessao ? 'Sessão de demonstração. Abrir página de login.' : 'Abrir página de login';
    }
    if (sair) sair.hidden = !sessao; // Mostra ou oculta o botão "Sair"
  }

  atualizarSessao();

  // Evento para encerrar a sessão ao clicar no botão "Sair"
  if (sair) sair.addEventListener('click', () => {
    try { 
      sessionStorage.removeItem(chaveSessao); 
    } catch { 
      // Sem sessão persistida para remover 
    }
    atualizarSessao();
  });


  /* ==========================================================================
     3. VALIDAÇÃO DE FORMULÁRIOS (LOGIN E CADASTRO) E INTERATIVIDADE
     ========================================================================== */

  const formulario = document.querySelector('#form-conta');
  if (!formulario) return; // Se a página não tiver formulário de conta, encerra a execução aqui

  const senha = document.querySelector('#senha');
  const mostrar = document.querySelector('#mostrar-senha');

  // Funcionalidade do botão "Mostrar/Ocultar" senha de demonstração
  mostrar.addEventListener('click', () => {
    const visivel = senha.type === 'password';
    senha.type = visivel ? 'text' : 'password';
    mostrar.textContent = visivel ? 'Ocultar' : 'Mostrar';
    mostrar.setAttribute('aria-pressed', String(visivel));
    mostrar.setAttribute('aria-label', `${visivel ? 'Ocultar' : 'Mostrar'} senha de demonstração`);
  });

  const nome = document.querySelector('#nome');
  const confirmar = document.querySelector('#confirmar');

  // Validação em tempo real do campo de nome (exige pelo menos 2 caracteres)
  if (nome) nome.addEventListener('input', () => {
    nome.setCustomValidity(nome.value.trim().length >= 2 ? '' : 'Informe um nome com pelo menos dois caracteres.');
  });

  // Função para verificar se a senha e a confirmação de senha são idênticas
  function conferirSenhas() {
    if (!confirmar) return;
    const mensagem = confirmar.value && senha.value !== confirmar.value ? 'As senhas de demonstração não coincidem.' : '';
    confirmar.setCustomValidity(mensagem);
    document.querySelector('#erro-confirmacao').textContent = mensagem;
  }

  senha.addEventListener('input', conferirSenhas);
  if (confirmar) confirmar.addEventListener('input', conferirSenhas);


  /* ==========================================================================
     4. SUBMISSÃO DO FORMULÁRIO E SIMULAÇÃO DE ENTRADA
     ========================================================================== */

  formulario.addEventListener('submit', evento => {
    evento.preventDefault(); // Impede o envio real e o recarregamento padrão da página
    conferirSenhas();
    
    if (!formulario.reportValidity()) return; // Se houver erros de validação HTML5, interrompe o fluxo

    const email = document.querySelector('#email').value.trim().toLowerCase();
    const perfilAnterior = lerSessao(chavePerfil);
    
    // Cria o objeto simulado com os dados do usuário
    const perfil = {
      nome: nome ? nome.value.trim() : (perfilAnterior?.email === email ? perfilAnterior.nome : email.split('@')[0]),
      email
    };

    try {
      if (nome) sessionStorage.setItem(chavePerfil, JSON.stringify(perfil));
      sessionStorage.setItem(chaveSessao, JSON.stringify(perfil));
      
      // Nota de segurança didática: A senha NÃO é armazenada, enviada ou usada para autenticação real.
      formulario.reset();
      window.location.href = 'index.html'; // Redireciona o usuário para a página principal após simular o acesso
    } catch {
      document.querySelector('#status-conta').textContent = 'O navegador bloqueou o armazenamento da sessão. Não foi possível iniciar a demonstração.';
    }
  });
})();