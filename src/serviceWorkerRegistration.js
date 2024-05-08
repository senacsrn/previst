export function register() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/serviceWorker.js')
          .then(registration => {
            console.log('Service worker registrado com sucesso:', registration);
          })
          .catch(error => {
            console.error('Falha ao registrar o service worker:', error);
          });
      });
    }
  }
  