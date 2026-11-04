// Comportamentos compartilhados pelas páginas: tema e simulação de sessão.
(() => {
  const chaveTema = 'conectacursos-tema';
  const chaveSessao = 'conectacursos-sessao-demo';
  const chavePerfil = 'conectacursos-perfil-demo';
  let tema = 'claro';
  try {
    const salvo = localStorage.getItem(chaveTema);
    tema = salvo === 'escuro' || salvo === 'claro' ? salvo : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'escuro' : 'claro');
  } catch { /* O tema continua utilizável se o armazenamento estiver bloqueado. */ }
  function aplicarTema() {
    document.documentElement.dataset.tema = tema;
    document.querySelectorAll('.tema-botao').forEach(botao => {
      botao.textContent = tema === 'escuro' ? '☀ Tema claro' : '◐ Tema escuro';
      botao.setAttribute('aria-label', tema === 'escuro' ? 'Ativar modo claro' : 'Ativar modo escuro');
      botao.setAttribute('aria-pressed', String(tema === 'escuro'));
    });
  }
  aplicarTema();
  document.querySelectorAll('.tema-botao').forEach(botao => botao.addEventListener('click', () => {
    tema = tema === 'escuro' ? 'claro' : 'escuro';
    aplicarTema();
    try { localStorage.setItem(chaveTema, tema); } catch { /* Preferência válida durante esta visita. */ }
  }));

  function lerSessao(chave) {
    try {
      const valor = JSON.parse(sessionStorage.getItem(chave) || 'null');
      return valor && typeof valor.nome === 'string' && typeof valor.email === 'string' ? valor : null;
    } catch { return null; }
  }
  const contaLink = document.querySelector('.conta-link');
  const sair = document.querySelector('.sair-botao');
  function atualizarSessao() {
    const sessao = lerSessao(chaveSessao);
    if (contaLink) {
      contaLink.textContent = sessao ? `Olá, ${sessao.nome.split(' ')[0]}` : 'Entrar';
      contaLink.title = sessao ? 'Sessão de demonstração. Abrir página de login.' : 'Abrir página de login';
    }
    if (sair) sair.hidden = !sessao;
  }
  atualizarSessao();
  if (sair) sair.addEventListener('click', () => {
    try { sessionStorage.removeItem(chaveSessao); } catch { /* Sem sessão persistida. */ }
    atualizarSessao();
  });

  const formulario = document.querySelector('#form-conta');
  if (!formulario) return;
  const senha = document.querySelector('#senha');
  const mostrar = document.querySelector('#mostrar-senha');
  mostrar.addEventListener('click', () => {
    const visivel = senha.type === 'password';
    senha.type = visivel ? 'text' : 'password';
    mostrar.textContent = visivel ? 'Ocultar' : 'Mostrar';
    mostrar.setAttribute('aria-pressed', String(visivel));
    mostrar.setAttribute('aria-label', `${visivel ? 'Ocultar' : 'Mostrar'} senha de demonstração`);
  });
  const nome = document.querySelector('#nome');
  const confirmar = document.querySelector('#confirmar');
  if (nome) nome.addEventListener('input', () => {
    nome.setCustomValidity(nome.value.trim().length >= 2 ? '' : 'Informe um nome com pelo menos dois caracteres.');
  });
  function conferirSenhas() {
    if (!confirmar) return;
    const mensagem = confirmar.value && senha.value !== confirmar.value ? 'As senhas de demonstração não coincidem.' : '';
    confirmar.setCustomValidity(mensagem);
    document.querySelector('#erro-confirmacao').textContent = mensagem;
  }
  senha.addEventListener('input', conferirSenhas);
  if (confirmar) confirmar.addEventListener('input', conferirSenhas);
  formulario.addEventListener('submit', evento => {
    evento.preventDefault();
    conferirSenhas();
    if (!formulario.reportValidity()) return;
    const email = document.querySelector('#email').value.trim().toLowerCase();
    const perfilAnterior = lerSessao(chavePerfil);
    const perfil = {
      nome: nome ? nome.value.trim() : (perfilAnterior?.email === email ? perfilAnterior.nome : email.split('@')[0]),
      email
    };
    try {
      if (nome) sessionStorage.setItem(chavePerfil, JSON.stringify(perfil));
      sessionStorage.setItem(chaveSessao, JSON.stringify(perfil));
      // A senha não é armazenada, enviada ou usada como autenticação real.
      formulario.reset();
      window.location.href = 'index.html';
    } catch {
      document.querySelector('#status-conta').textContent = 'O navegador bloqueou o armazenamento da sessão. Não foi possível iniciar a demonstração.';
    }
  });
})();
