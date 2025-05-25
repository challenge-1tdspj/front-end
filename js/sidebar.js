document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const closeMenu = document.getElementById('close-menu');

  menuToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    sidebar.classList.add('open');
    menuToggle.style.display = 'none';
    document.body.style.overflow = 'hidden';
  });

  closeMenu.addEventListener('click', function (e) {
    e.stopPropagation();
    sidebar.classList.remove('open');
    menuToggle.style.display = 'block';
    document.body.style.overflow = '';
  });

  sidebar.addEventListener('click', function (e) {
    e.stopPropagation();
  });

  document.addEventListener('click', function () {
    if (sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
      menuToggle.style.display = 'block';
      document.body.style.overflow = '';
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 900) {
      sidebar.classList.remove('open');
      menuToggle.style.display = 'none';
      document.body.style.overflow = '';
    } else {
      menuToggle.style.display = 'block';
    }
  });
});