// =========================================================
// PHONE MENU + STICKY DONATE BUTTON
// (computers never see these, the CSS hides them on big screens)
// =========================================================

// --- 1. the ☰ menu button ---
const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');

if (header && menuButton) {
  menuButton.addEventListener('click', () => {
    // "toggle" = add the class if it's missing, remove it if it's there
    const isOpen = header.classList.toggle('menu-open');

    // tell screen readers if the menu is open or closed
    menuButton.setAttribute('aria-expanded', isOpen);
    menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });
}

// --- 2. the sticky Donate button ---
// it hides when the real Donate button (at the bottom of the page) is on screen,
// so you never see two Donate buttons at the same time
const stickyDonate = document.querySelector('.sticky-donate');
const mainDonate = document.querySelector('.donate-cta');

if (stickyDonate && mainDonate) {
  const watcher = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      stickyDonate.classList.toggle('is-hidden', entry.isIntersecting);
    });
  });
  watcher.observe(mainDonate);
}