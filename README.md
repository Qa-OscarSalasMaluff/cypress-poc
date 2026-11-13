# Cypress Proof of Concept (PoC)

Este repositorio contiene una Prueba de Concepto (PoC) de automatización de pruebas utilizando **Cypress**. Su objetivo principal es demostrar buenas prácticas, estructura de código y estrategias de pruebas automatizadas (End-to-End / Componentes) para aplicaciones web.

---

## Tabla de Contenidos

- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Ejecución de Pruebas](#-ejecución-de-pruebas)
- [Configuración](#-configuración)
- [Autor](#-autor)

---

## Requisitos Previos

Asegúrate de tener instalado en tu entorno local:

- **Node.js** (versión 18.x o superior recomendada)
- **npm**

---

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/Qa-OscarSalasMaluff/cypress-poc.git
   cd cypress-poc
   ```

2. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```

---

## Estructura del Proyecto

La estructura de directorios sigue las recomendaciones estándar de Cypress:

```text
cypress-poc/
├── cypress/
│   ├── e2e/             # Archivos de pruebas End-to-End (*.cy.js)
│   ├── fixtures/        # Datos de prueba estáticos en formato JSON
│   └── support/         # Comandos personalizados (commands.js) y configuraciones globales (e2e.js)
├── cypress.config.js    # Archivo de configuración principal de Cypress
├── package.json         # Dependencias y scripts del proyecto
└── README.md            # Documentación del proyecto
```

---

## Ejecución de Pruebas

Puedes ejecutar las pruebas de las siguientes maneras:

### 1. Modo Interactivo (Cypress Test Runner)

Ideal para el desarrollo y depuración de pruebas con interfaz gráfica:

```bash
npx cypress open
```

### 2. Modo Headless (Línea de comandos)

Ideal para ejecución rápida o integración en pipelines de CI/CD:

```bash
npx cypress run
```

### 3. Ejecutar un archivo o navegador específico

- **Ejecutar un archivo de prueba en particular:**
  ```bash
  npx cypress run --spec "cypress/e2e/login/login.cy.js"
  ```
- **Ejecutar utilizando un navegador específico (ej. Chrome):**
  ```bash
  npx cypress run --browser chrome
  ```

---

## Autor

Desarrollado por **Oscar Salas Maluff** ([@Qa-OscarSalasMaluff](https://github.com/Qa-OscarSalasMaluff)).
