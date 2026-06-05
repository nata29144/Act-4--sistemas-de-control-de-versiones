import { loadView } from './views.js';

const mainContent = document.getElementById('main-content');

async function renderLogin() {
    mainContent.innerHTML = await loadView('login');
    attachLoginEvents();
}

async function renderApp() {
    mainContent.innerHTML = await loadView('app');
    attachAppEvents();
    await renderSection('citas');
}

function attachLoginEvents() {
    const loginButton = document.querySelector('#login-button');
    if (!loginButton) return;
    loginButton.addEventListener('click', () => renderApp());
}

function attachAppEvents() {
    document.querySelectorAll('[data-section]').forEach(button => {
        button.addEventListener('click', () => renderSection(button.dataset.section));
    });
}

async function renderSection(section) {
    const sectionContainer = document.querySelector('#section-content');
    if (!sectionContainer) return;
    sectionContainer.innerHTML = await loadView(section);

    document.querySelectorAll('[data-section]').forEach(button => {
        button.classList.toggle('active', button.dataset.section === section);
    });

    const reportButton = sectionContainer.querySelector('#report-button');
    if (reportButton) {
        reportButton.addEventListener('click', () => alert('Reporte generado correctamente'));
    }
}

document.addEventListener('DOMContentLoaded', renderLogin);
