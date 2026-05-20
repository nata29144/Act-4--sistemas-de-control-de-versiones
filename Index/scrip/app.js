function login() {
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('app-screen').classList.remove('hidden');
    showSection('citas');
}

function showSection(section) {
    document.getElementById('citas-section').classList.add('hidden');
    document.getElementById('historia-section').classList.add('hidden');
    document.getElementById('reportes-section').classList.add('hidden');
    document.getElementById(section + '-section').classList.remove('hidden');
}

function reporte(){
    alert('Reporte generado correctamente');
}
