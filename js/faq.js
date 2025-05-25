document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.faq-question').forEach(function(q) {
    q.addEventListener('click', function() {
      document.querySelectorAll('.faq-question').forEach(function(other) {
        if (other !== q) other.classList.remove('active');
      });
      q.classList.toggle('active');
    });
  });
});