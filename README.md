# Ticket 1 "Presupuestos"

__Proyecto que calcula el presupuesto de un proyecto de acuerdo a los meses y a los conceptos de flujos de efectivo, ingresos, costos directos/administrativos y asignación de recursos__

## Instalación 🔧

### Despues de clonar el repositorio

Crea un archivo .ENV en la raíz del proyecto para configurar los parametros de despliegue...

```
HOST='localhost'
PORT=
WHITELIST=[]
DB_HOST='localhost'
DB_PORT=1433
DB_USER=
DB_PASS=
DB_NAME='ticket_1'
SECRET_KEY= <clave para creación jwt>
```
_Es necesario crear una base de datos con el nombre 'ticket_1' en SQL Server con un usuario y una contraseña registrados en el manejador_

Ejecuta el siguiente comando para instalar las dependencias necesarias:

```
npm i
```

## Ejecución

Para correr el proyecto en un entorno de desarrollo ejecuta:

```
npm run dev
```

_La API y las vistas se mostraran en el puerto elegido y escrito en las variables de entorno_

***
> Nota: en la raíz del proyecto hay un archivo llamado _body.ejemplo.js_ para formar un JSON para realizar una petición a la API para crear o modificar presupuestos

__⌨️ por [fgsanlop](https://github.com/fgsanlop)__
