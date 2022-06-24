function storageCheck() {
  if (localStorage.getItem('Theme') !== null) {
    refs.bodyEl.classList.add('dark-theme');
    refs.switchToggleEl.checked = true;
  }
}
