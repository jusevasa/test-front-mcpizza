# Front Test RobinFood


![](https://media.giphy.com/media/KWcqgJRfP9ILiWbb7X/giphy.gif)
![](https://media.giphy.com/media/EiIBvPB4JLIjhecLzp/giphy.gif)

Aplicacion creada haciendo uso de la librearia react js, el **demo** la aplicacion lo podran encontrar en el siguiente enlace: 

__https://test-front-mcpizza.vercel.app/__

la aplicacion cuenta con una adaptacion full responsive, utilizando mobile first para su creacion.

## Folder Schema

* public
* src
* app (Aqui va a vivir toda nuestra aplicación).
  * core (Aqui va a vivir configuraciones necesarias para usar consultas a una API, manejo de la arquitectura de Redux)

  * feature ( aqui estan nuestros componentes con su logica y estructura, dependiendo de su funcion el va a tener un nombre. Ejemplo: Cliente, Producto, etc ... )

    * components ( aqui estan cada una de las implementaciones que hacemos. Ejemplo: listar, insertar, eliminar, etc... y en general tiene un Router )

  * shared ( aqui estan todos los componentes que se van a reutilizar, los hooks y utils para reutilizar funciones )

    * components ( componentes reutilizables, como Button, Headers y Layouts. Estos dentro tienen index.tsx y un style.ts )
    * hooks ( custom hooks creados por nosotros)
    * utils ( funciones reutilizables )

## Inicialización del proyecto

El proyecto maneja el paquete **npm**, por lo que primer es debido realizar la instalación de dependencias con el comando:

```javascript
npm i
```
Una vez realizada la instalación de las dependencias, ya puede hacer uso de los scripts ya preparados.

## Iniciar la aplicación localmente

Usted debe utilizar el comando:

```javascript
npm start
```

Para que la aplicacion se ejecute en el puerto **http://localhost:3000/**

## Realización de testing

La aplicación cuenta con pruebas unitarias, las cuales aportan a la funcionalidad del código. Para la ejecución de estas deberá utilizar el comando:

```javascript
npm run test
```

Y automáticamente se ejecutaran las respectivas pruebas.


## Dependencias utilizadas

Estas fueron las aplicaciones utilizadas para dar finalidad al proyecto:

Nombre Dependencia | Descripción
------------ | -------------
sass | Pre-processador de css
boostrap | framework de css
react-dom | configuracion de routing de la aplicacion
react-dom | configuracion de routing de la aplicacion
react-icons | extraccion de componentes en iconos
sweetalert2 | creacion de alertas
testing-library | creacion de testing




