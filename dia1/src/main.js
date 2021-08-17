import './style.css'

const app = document.querySelector('.app');

app.innerHTML = `
   <h1>B. Academy</h1>
   <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
 `

const link = document.querySelector('[data-js=link]');

function toggleVisibilityApp() {
  app.hidden.toggle('hidden');
  // Another way to hide an element in the DOM would be with the hidden attribute
  // app.hidden = !app.hidden
}

link.addEventListener('click', (event) => {
  event.preventDefault();
  toggleVisibilityApp(event);
}, false)
