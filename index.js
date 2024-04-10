// Adicione um evento para aguardar o carregamento completo da página
window.onload = function() {
  // Obtém o formulário e o elemento de mensagem
  const form = document.getElementById('newsletterForm');
  const mensagemElemento = document.getElementById('mensagem');

  // Adiciona um ouvinte de evento para o envio do formulário
  form.addEventListener('submit', function(event) {
      // Impede o envio padrão do formulário
      event.preventDefault();

      // Obtém o valor do email do campo de entrada
      const email = document.getElementById('emailInput').value;

      // Valida o email
      if (validarEmail(email)) {
          // Envie o email com nodemailer
          enviarEmail(email);
      } else {
          mensagemElemento.textContent = 'Por favor, insira um e-mail válido';
      }
  });
};

// Função para validar o email usando uma expressão regular simples
function validarEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Função para enviar email com Nodemailer
function enviarEmail(email) {
  const nodemailer = require('nodemailer');

  const transport = nodemailer.createTransport({
      host: 'smtp.mailersend.net',
      port: '587',
      secure: false,
      auth: {
          user: 'MS_gjeWkR@trial-yzkq340k85kgd796.mlsender.net',
          pass: 'JsMrV2ED4Jfia3ig',
      }
  });

  transport.sendMail({
      from: 'Seja Bem Vindo <allanbritoneves@hotmail.com>',
      to: email,
      subject: 'Enviando email com nodemailer',
      html: '<h1>Olá, Seja bem Vindo a nossa Newsletter',
      text: 'Olá, Seja bem Vindo a nossa Newsletter'
  })
  .then(() => {
      console.log('Email enviado com sucesso!');
      mensagemElemento.textContent = 'Obrigado por se inscrever na nossa newsletter!';
  })
  .catch((error) => {
      console.error('Erro ao enviar email', error);
      mensagemElemento.textContent = 'Ocorreu um erro ao tentar enviar o email. Por favor, tente novamente mais tarde.';
  });
}
