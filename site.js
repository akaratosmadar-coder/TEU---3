document.documentElement.classList.add('js');
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#site-menu');
function setMenu(open) {
  menu.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.textContent = open ? '✕ Bezárás' : '☰ Menü';
}
if (toggle && menu) {
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) { setMenu(false); toggle.focus(); }
  });
  const desktop = window.matchMedia('(min-width: 1201px)');
  desktop.addEventListener('change', () => setMenu(false));
}
document.querySelectorAll('.accordion-btn').forEach((button, i) => {
  const panel = button.nextElementSibling;
  if (!panel || !panel.classList.contains('panel')) return;
  button.type = 'button';
  panel.id = panel.id || `accordion-panel-${i + 1}`;
  button.setAttribute('aria-controls', panel.id);
  button.setAttribute('aria-expanded', 'false');
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    button.classList.toggle('active', open);
    panel.classList.toggle('is-open', open);
  });
});
