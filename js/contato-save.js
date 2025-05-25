document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {

    const name = form.querySelector('#name') ? form.querySelector('#name').value.trim() : '';
    const email = form.querySelector('#email') ? form.querySelector('#email').value.trim() : '';
    const message = form.querySelector('#message') ? form.querySelector('#message').value.trim() : '';

    const cliente = {
      nome: name,
      email: email,
      mensagem: message,
      dataEnvio: new Date().toISOString()
    };
    
    localStorage.setItem('clienteContato', JSON.stringify(cliente));
  });
});