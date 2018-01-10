/* eslint-disable no-console */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service.js')
      .then((registration) => {
        console.info('Service registered with scope:', registration.scope)
      })
      .catch((error) => {
        console.warn('Service registration failed:', error)
      })
  })
}
