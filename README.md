# WompiStore

Esta tienda está desarrollada en VueJS, se utilizó la pasarela de pago de Wompi.

Al hacer clic sobre la imagen o sobre el botón `ver producto`, lo llevará a la interna del producto, donde están todas las características del producto. Se debe elegir una talla antes de enviar el producto al carrito. Si no se hace, el botón `agregar al carrito` estará deshabilitado.

En la página del carrito, podrá ver los productos seleccionados y al hacer clic sobre el botón pagar, lo enviará a la pasarela de pago. En la parte izquierda de la fila del producto, podra encontrar el botón para eliminar el producto del carrito.

## Configuraciones recomendadas del IDE

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Configuración personalizada del manejador de paquetes

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Configuración del proyecto

```sh
npm install
```

### Compilación en la versión de desarrollo

```sh
npm run dev
```

### Configuración minificada para producción

```sh
npm run build
```

### Ejecutar Unit Tests con [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Ejecutar End-to-End Tests con [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

Esto ejecuta las pruebas de extremo a extremo contra el servidor de desarrollo de Vite.
Es mucho más rápido que la compilación de producción.

También se recomienda probar la compilación de producción con `test:e2e` abtes de implementar (ej. en entornos CI):

```sh
npm run build
npm run test:e2e
```

### Lint con [ESLint](https://eslint.org/)

```sh
npm run lint
```
