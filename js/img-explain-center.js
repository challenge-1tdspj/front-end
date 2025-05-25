document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.img-explain').forEach(function(el) {
    el.addEventListener('mouseenter', function(e) {
      document.querySelectorAll('.img-explain-popup').forEach(p => p.remove());

      const img = el.querySelector('img');
      const span = el.querySelector('span');
      const texto = span.getAttribute('data-center') || span.textContent;

      const popup = document.createElement('div');
      popup.className = 'img-explain-popup';
      popup.style.position = 'fixed';
      popup.style.left = '50vw';
      popup.style.top = '50vh';
      popup.style.transform = 'translate(-50%, -50%) scale(1.15)';
      popup.style.zIndex = '10000';
      popup.style.background = '#fff';
      popup.style.borderRadius = '16px';
      popup.style.boxShadow = '0 8px 48px 8px rgba(0,159,227,0.22), 0 3px 16px rgba(0,0,0,0.13)';
      popup.style.padding = '32px 32px 24px 32px';
      popup.style.display = 'flex';
      popup.style.flexDirection = 'column';
      popup.style.alignItems = 'center';
      popup.style.maxWidth = '90vw';
      popup.style.textAlign = 'center';
      popup.style.pointerEvents = 'none';
      popup.style.animation = 'center-fade 2.2s forwards';

      if (img) {
        const imgClone = img.cloneNode();
        imgClone.style.width = '180px';
        imgClone.style.maxWidth = '60vw';
        imgClone.style.marginBottom = '18px';
        imgClone.style.borderRadius = '12px';
        imgClone.style.boxShadow = '0 6px 24px rgba(0,159,227,0.18), 0 1.5px 8px rgba(0,0,0,0.10)';
        popup.appendChild(imgClone);
      }

      const textoDiv = document.createElement('div');
      textoDiv.textContent = texto;
      textoDiv.style.fontSize = '1.18rem';
      textoDiv.style.color = '#009fe3';
      textoDiv.style.background = '#fff';
      textoDiv.style.borderRadius = '10px';
      textoDiv.style.padding = '12px 18px';
      textoDiv.style.maxWidth = '80vw';
      popup.appendChild(textoDiv);

      document.body.appendChild(popup);

      setTimeout(() => {
        popup.remove();
      }, 2200);
    });

    el.addEventListener('mouseleave', function(e) {
      document.querySelectorAll('.img-explain-popup').forEach(p => p.remove());
    });
  });
});