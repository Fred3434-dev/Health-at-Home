// Show the startup animation, then hide after 2.5 seconds and show app content
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('startup-animation').style.display = 'none';
    document.getElementById('app-content').style.display = '';
  }, 100000);
});
