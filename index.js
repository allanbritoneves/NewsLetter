const nodemailer = require("nodemailer");

// Adicione um evento para aguardar o carregamento completo da página
document.addEventListener("DOMContentLoaded", function () {
  reload();
});

// Função para carregar o envio de email após o carregamento da página
function reload() {
  // Obtém o formulário e o elemento de mensagem
  const form = document.getElementById("newsletterForm");
  const mensagemElemento = document.getElementById("mensagem");

  // Adiciona um ouvinte de evento para o envio do formulário
  form.addEventListener("submit", function (event) {
    // Impede o envio padrão do formulário
    event.preventDefault();

    // Obtém o valor do email do campo de entrada
    const email = document.getElementById("emailInput").value;

    // Valida o email
    if (validarEmail(email)) {
      // Envie o email com nodemailer
      enviarEmail(email);
    } else {
      mensagemElemento.textContent = "Por favor, insira um e-mail válido";
    }
  });
}

// Função para enviar o email
function enviarEmail(email) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "allanbritoneves@gmail.com",
      pass: "xjulfwbfirllffjo",
    },
  });

  let options = {
    from: "Seu Nome <seuemail@gmail.com>",
    to: email,
    subject: "Meu primeiro email",
    text: "Bom Dia!",
    //html: mensagem
  };

  const sendMail = async () => {
    try {
      console.log("enviando email");
      await transporter.sendMail(options);
      console.log("email enviado!");
    } catch (error) {
      console.log("deu erro!");
    }
  };

  // Chama a função sendMail para enviar o email
  sendMail();
}

// Função para validar o email usando uma expressão regular simples
function validarEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
