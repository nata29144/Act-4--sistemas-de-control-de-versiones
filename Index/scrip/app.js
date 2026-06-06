function login() {
    const usuario = document.getElementById('usuario').value.trim();
    const password = document.getElementById('password').value.trim();
    if (usuario === '' || password === '') {
        alert('Por favor ingresa usuario y contraseña.');
        return;
    }
    alert('Inicio de sesión exitoso. Bienvenido, ' + usuario + '!');
}

function agendarCita() {
    const nombre = document.getElementById('nombrePaciente').value.trim();
    const fecha = document.getElementById('fechaCita').value;
    if (nombre === '' || fecha === '') {
        alert('Por favor completa el nombre del paciente y la fecha.');
        return;
    }
    const lista = document.getElementById('listaCitas');
    const item = document.createElement('li');
    item.textContent = nombre + ' — ' + fecha;
    lista.appendChild(item);
    document.getElementById('nombrePaciente').value = '';
    document.getElementById('fechaCita').value = '';
}

function reporte() {
    const items = document.querySelectorAll('#listaCitas li');
    if (items.length === 0) {
        alert('No hay citas agendadas para reportar.');
        return;
    }
    let resumen = 'Reporte de citas:\n';
    items.forEach((item, i) => {
        resumen += (i + 1) + '. ' + item.textContent + '\n';
    });
    alert(resumen);
}
