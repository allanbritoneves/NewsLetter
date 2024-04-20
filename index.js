



function enviarEmail(event) {
  event.preventDefault(); // Evitar o envio do formulário antes de ser processado

  const emailInput = document.getElementById("emailInput").value;

  
  
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "allanbritoneves@gmail.com",
    Password: "34DD941A642A788A64ACA60EDE2B6EA7122E",
    To: emailInput,
    From: "allanbritoneves@hotmail.com",
    Subject: "Obrigado por assinar nosso conteudo",
    Body: "<h2>Agradecemos por fazer parte da comunidade. Se você tiver alguma dúvida ou precisar de assistência, não hesite em nos contatar. Estamos aqui para ajudar!</h2>",
  }).then(
    (message) => {
      if (message === "OK") {
        document.getElementById("mensagem").innerText =
          `A confirmation email has been sent to, ${emailInput}`;

  document.getElementById('container').style.display="none";
  document.getElementById('confirmed-message').style.display="block";

  

      } else {
        document.getElementById("mensagem").innerText =
          "Ocorreu um erro ao enviar o email. Por favor, tente novamente mais tarde.";
      }
      
    },
    (error) => {
      console.error(error);
      document.getElementById("mensagem").innerText =
        "Ocorreu um erro ao enviar o email. Por favor, tente novamente mais tarde.";
    }
  );
}

function returnToHomePage() {
  // Set the URL to your homepage
  window.location.href = "https://glittery-smakager-994277.netlify.app/";
}