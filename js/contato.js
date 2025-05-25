document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    let valid = true;

    form.querySelectorAll('.input-error').forEach(el => el.remove());

    const name = form.querySelector('#name');
    if (!name.value.trim()) {
      showError(name, 'Digite seu nome.');
      valid = false;
    }

    const email = form.querySelector('#email');
    if (!email.value.trim()) {
      showError(email, 'Digite seu e-mail.');
      valid = false;
    } else if (!/^[\w\.-]+@[\w\.-]+\.\w{2,}$/.test(email.value.trim())) {
      showError(email, 'Digite um e-mail válido.');
      valid = false;
    }

    const message = form.querySelector('#message');
    if (!message.value.trim()) {
      showError(message, 'Digite sua mensagem.');
      valid = false;
    }

    if (!valid) e.preventDefault();
  });

  function showError(input, msg) {
    const error = document.createElement('div');
    error.className = 'input-error';
    error.textContent = msg;
    error.style.color = '#e63946';
    error.style.fontSize = '0.95rem';
    error.style.marginTop = '4px';
    input.insertAdjacentElement('afterend', error);
  }
});