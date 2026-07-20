(function () {
  const button = document.querySelector('.mobile-menu-button');
  const sidebar = document.querySelector('.sidebar');
  if (!button || !sidebar) return;
  button.addEventListener('click', function () {
    const open = sidebar.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? '×' : '☰';
  });
  document.addEventListener('click', function (event) {
    if (window.innerWidth > 720 || !sidebar.classList.contains('open')) return;
    if (!sidebar.contains(event.target) && !button.contains(event.target)) {
      sidebar.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
      button.textContent = '☰';
    }
  });
})();