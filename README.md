# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## `INFO`
Esta aplicación está enfocada a ser un e-commerce de videojuegos, a continuación notificaré las funcionalidades que tiene por el momento, y las que me gustaría implementar en un futuro.
### `REGISTRO/LOGIN ` 
La autorización del registro, y del login de la página están conectados a través de la funcionalidad que provee Firebase authentication, consta con registro de usuario, logueo de usuario, verificación de cuenta por email, y restablecimiento de contraseña. Las sesiones se mantienen sin importar si hayas cerrado el navegador, hasta que no cierres tú, la sesión esta se mantiene, esto también es una funcionalidad de Firebase. Sin verificar la cuenta vía mail no vas a poder iniciar sesión, y para restablecer/cambiar la contraseña también es a través del mail.
### `NAVEGACION/BUSQUEDA DE JUEGOS`
Estando o no logueado, la página cuenta con una home que muestra todos los juegos disponibles del catálogo, tanto sin filtrar como filtrados, puedes filtrarlos mediante categorías, en el drop-icon-category de la navbar se encuentran todas las categorías disponibles. También es posible encontrar específicamente el juego deseado a través del buscador localizado arriba de todos los juegos. Cada página cuenta con un máximo de 9 juegos renderizados al mismo tiempo, luego de esto, se implementó una paginación con un cap máximo de 9 juegos por renderizado, esto puede ser modificado mediante una sola variable, y todo seguiría funcionando perfectamente, está optimizado para funcionar sin importar el tamaño de los juegos que haya, ni el máximo de juegos por página.
### `STOCK/CARRITO`
Para agregar/comprar juegos en el carrito, necesitas tener una cuenta verificada y estar logueado, luego puedes agregar los juegos que quieras a tu carrito, y comprarlos agregando los datos pertinentes. Cada carrito está vinculado directamente al usuario en cuestión y este se mantiene sin importar si el usuario cierra sesión, el usuario puede eliminar los juegos que quiera de su carrito, o al comprarlos estos también se eliminaran, cada juego cuenta con su stock individual, también tiene persistencia desde una base de datos así que siempre estarán sincronizados. Y por último, cada vez que se realiza una compra, esta queda guardada en una colección en la base de datos de Firebase.
### `EXTRA`
También cuenta con una ubicación personalizable en el footer de Google maps, que muestra una ubicación ficticia del local de dicha tienda.
En un futuro me gustaría investigar e implementar una vinculación con la API de mercado pago para las compras, y roles de usuario, tanto de administradores como rangos menores, así las adiciones de los juegos pueden ser directamente desde la página, y no desde la base de datos. Y en cuanto a personalización de usuarios, me gustaría agregar fotos de perfiles, y un sistema de comentarios y reseñas para los juegos.
