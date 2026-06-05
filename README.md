# Act-4--sistemas-de-control-de-versiones

## Descripción del proyecto

Este proyecto fue desarrollado como parte de la Actividad 4 del módulo **Mantenimiento de Software** de la Corporación Universitaria Iberoamericana.

La actividad tiene como objetivo aplicar el uso de sistemas de control de versiones mediante Git y GitHub, trabajando de manera colaborativa en el desarrollo de un proyecto funcional orientado a un entorno empresarial.

El proyecto está basado en **ClinicOS**, un sistema orientado a la gestión de procesos clínicos y hospitalarios para la empresa ficticia **DataSalud SAS**. Durante el desarrollo se implementaron diferentes historias de usuario relacionadas con:

- Gestión de citas médicas.
- Inicio de sesión seguro.
- Consulta de historias clínicas.
- Actualizaciones del sistema.
- Generación de reportes hospitalarios.

---

# Objetivo

Implementar un entorno de trabajo colaborativo utilizando GitHub como plataforma de control de versiones, aplicando ramas, commits, push, merge y pull request para el mantenimiento y desarrollo organizado del software.

---

# Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- Visual Studio Code
- GitHub Codespaces

---

# Estructura del proyecto

```txt
Act-4--sistemas-de-control-de-versiones/
│
├── README.md
├── HistoriasUsuario.pdf
├── package.json
├── .gitignore
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   └── appointmentController.js
│   ├── models/
│   │   ├── userModel.js
│   │   └── appointmentModel.js
│   ├── services/
│   │   ├── authService.js
│   │   ├── appointmentService.js
│   │   └── reportService.js
│   └── server.js
└── frontend/
    ├── index.html
    ├── css/
    │   └── styles.css
    ├── js/
    │   ├── app.js
    │   └── views.js
    └── views/
        ├── login.html
        ├── app.html
        ├── citas.html
        ├── historia.html
        └── reportes.html
```

## Cómo ejecutar

1. Abrir una terminal en el directorio del proyecto.
2. Ejecutar `npm start`.
3. Abrir `http://localhost:3000` en el navegador.
