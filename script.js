const moreButton = document.querySelector('.more');
const releaseMenu = document.querySelector('#release-menu');
const menuItem = releaseMenu.querySelector('[role="menuitem"]');

function closeMenu(restoreFocus = false) {
  releaseMenu.hidden = true;
  moreButton.setAttribute('aria-expanded', 'false');
  if (restoreFocus) moreButton.focus();
}

function openMenu() {
  releaseMenu.hidden = false;
  moreButton.setAttribute('aria-expanded', 'true');
  menuItem.focus();
}

moreButton.addEventListener('click', () => {
  if (releaseMenu.hidden) openMenu();
  else closeMenu(true);
});

moreButton.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault();
    openMenu();
  }
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.release-actions')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (releaseMenu.hidden) return;

  if (event.key === 'Escape') {
    event.preventDefault();
    closeMenu(true);
  }
});

releaseMenu.addEventListener('keydown', (event) => {
  if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
    event.preventDefault();
    menuItem.focus();
  }
});

document.addEventListener('focusin', (event) => {
  if (!event.target.closest('.release-actions')) closeMenu();
});

menuItem.addEventListener('click', () => closeMenu(true));
