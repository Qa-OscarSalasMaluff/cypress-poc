### TC_LOGIN_001 – Inicio de sesión exitoso con credenciales válidas

| Campo           | Detalle                                                                            |
| --------------- | ---------------------------------------------------------------------------------- |
| ID              | `TC_LOGIN_001`                                                                     |
| Nombre          | Login exitoso con credenciales válidas                                             |
| Prioridad       | Alta                                                                               |
| Tipo            | Positivo                                                                           |
| Objetivo        | Verificar que un usuario habilitado pueda iniciar sesión con credenciales válidas. |
| Datos de prueba | Usuario: `standard_user` · Contraseña: `secret_sauce`                              |

**Precondiciones**

- El usuario se encuentra en la página de inicio de sesión.
- La cuenta `standard_user` está habilitada.

**Pasos de ejecución**

1. Ingresar `standard_user` en el campo Username.
2. Ingresar `secret_sauce` en el campo Password.
3. Presionar el botón Login.

**Resultado esperado**

- El sistema autentica al usuario correctamente.
- El navegador redirige a `/inventory.html`.
- La lista de productos se muestra visible.

---

### TC_LOGIN_002 – Inicio de sesión con contraseña incorrecta

| Campo           | Detalle                                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------------------------- |
| ID              | `TC_LOGIN_002`                                                                                                 |
| Nombre          | Login con contraseña incorrecta                                                                                |
| Prioridad       | Alta                                                                                                           |
| Tipo            | Negativo                                                                                                       |
| Objetivo        | Verificar que el sistema rechace el inicio de sesión cuando la contraseña no corresponde al usuario ingresado. |
| Datos de prueba | Usuario: `standard_user` · Contraseña: `password_incorrecto`                                                   |

**Precondiciones**

- El usuario se encuentra en la página de inicio de sesión.
- El usuario `standard_user` existe y está habilitado.

**Pasos de ejecución**

1. Ingresar `standard_user` en el campo Username.
2. Ingresar `password_incorrecto` en el campo Password.
3. Presionar el botón Login.

**Resultado esperado**

- El sistema rechaza la autenticación.
- El usuario permanece en la página de inicio de sesión.
- Se muestra un mensaje indicando que el usuario y la contraseña no coinciden.

Mensaje esperado:
`Epic sadface: Username and password do not match any user in this service`

---

### TC_LOGIN_003 – Inicio de sesión con usuario bloqueado

| Campo           | Detalle                                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| ID              | `TC_LOGIN_003`                                                                                                           |
| Nombre          | Login con usuario bloqueado                                                                                              |
| Prioridad       | Alta                                                                                                                     |
| Tipo            | Negativo                                                                                                                 |
| Objetivo        | Verificar que el sistema impida el acceso a una cuenta bloqueada, incluso cuando se ingresan sus credenciales correctas. |
| Datos de prueba | Usuario: `locked_out_user` · Contraseña: `secret_sauce`                                                                  |

**Precondiciones**

- El usuario se encuentra en la página de inicio de sesión.
- La cuenta `locked_out_user` está configurada como bloqueada en la aplicación de demostración.

**Pasos de ejecución**

1. Ingresar `locked_out_user` en el campo Username.
2. Ingresar `secret_sauce` en el campo Password.
3. Presionar el botón Login.

**Resultado esperado**

- El sistema rechaza la autenticación.
- El usuario permanece en la página de inicio de sesión.
- Se muestra un mensaje indicando que la cuenta está bloqueada.

Mensaje esperado:
`Epic sadface: Sorry, this user has been locked out.`

---

### TC_LOGIN_004 – Inicio de sesión con usuario incorrecto o inexistente

| Campo           | Detalle                                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------------------------- |
| ID              | `TC_LOGIN_004`                                                                                             |
| Nombre          | Login con usuario incorrecto                                                                               |
| Prioridad       | Alta                                                                                                       |
| Tipo            | Negativo                                                                                                   |
| Objetivo        | Verificar que el sistema rechace el inicio de sesión cuando se ingresa un nombre de usuario que no existe. |
| Datos de prueba | Usuario: `usuario_invalido` · Contraseña: `password_incorrecto`                                            |

**Precondiciones**

- El usuario se encuentra en la página de inicio de sesión.
- El nombre de usuario utilizado no corresponde a una cuenta registrada.

**Pasos de ejecución**

1. Ingresar `usuario_invalido` en el campo Username.
2. Ingresar `password_incorrecto` en el campo Password.
3. Presionar el botón Login.

**Resultado esperado**

- El sistema rechaza la autenticación.
- El usuario permanece en la página de inicio de sesión.
- Se muestra un mensaje indicando que el usuario y la contraseña no coinciden.

Mensaje esperado:
`Epic sadface: Username and password do not match any user in this service`

---
