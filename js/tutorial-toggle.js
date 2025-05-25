document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tutorial-toggle').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.tutorial-toggle').forEach(function(otherBtn) {
        if (otherBtn !== btn) otherBtn.classList.remove('active');
      });
      document.querySelectorAll('.tutorial-content').forEach(function(content) {
        if (content !== btn.nextElementSibling) content.classList.remove('active');
      });
      btn.classList.toggle('active');
      if (btn.nextElementSibling) {
        btn.nextElementSibling.classList.toggle('active');
      }
    });
  });
});