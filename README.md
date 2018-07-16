
# restpizza

> create remove update and delete pizza orders

## Acerca de

Este proyecto esta divido en dos secciones,el codigo de servidor en la carpeta `server` y el codigo de cliente  en la carpeta`src`.
Basicamente Featherjs permite crear implementaciones rest para servidores express usando middleware, esta herramienta permite hacer esto de manera muy facil y rapida. creando los endpoints para nuestras llamadas rest. FeathersJs funciona con una gran variedad de adaptadores para bases de datos yo elegi nedb debido a que es una base de datos basada en archivos que no requiere configuracion alguna y todos los datos son guardados localmente en la carpeta `data/`

El cliente fue generado usando la herramienta `create-react-app` la cual nos crea un escaparate de carpetas y configuraciones predeterminadas que todo proyecto necesita al inicio, opte por usar `react-semantic-ui` debido a que esta prueba es un protitipo y los requerimientos en cuanto a diseño no estaban definidos, semantic ui me permitio hacer uso de componentes previamente estilizados, agilizando el proceso de desarrollo.

`redux` y  `react router` fueron utilizados para gestionar el estado de la aplicacion cliente, al react no ser un framework MVC. esto requeria una herramienta que permitiera manejar las operaciones de CRUD. 

En el codigo de servidor se usaron las sigientes tecnologias y paquetes

- [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications and rest services.
- [Express](http://expressjs.com/). Fast, unopinionated, minimalist web framework for Node.js .
- [nedb](https://github.com/louischatriot/nedb). The JavaScript Database, for Node.js, nw.js, electron and the browser
- [winston](https://www.npmjs.com/package/winston). A logger for just about everything.

En el cliente se utilizaron las siguientes tecnologias
- [create react app](https://github.com/facebook/create-react-app). Create React apps with no build configuration.
- [ReactJS](https://reactjs.org/). A JavaScript library for building user interfaces
- [Redux](https://redux.js.org/). Redux is a predictable state container for JavaScript apps.
- [React semantic ui ](https://react.semantic-ui.com).User Interface is the language of the web
- [React Router](https://github.com/ReactTraining/react-router). Declarative routing for React 

## estructura

```
my-app/
  server/
    data/
      pizza-orders.db
    public/
      index.html
      favicon.ico 
    src/
      models/
        pizza-orders.model.js
      services/
        pizza-orders/
          pizza-orders.services.js
      app.js
      app.hooks.js
      index.js

  src/
    actions/
      index.js
      orders-actions.js
    components/
      order-cards.js
      orders-form.js
      orders-list.js
    pages/
      about.js
      home.js
      orders-form-page.js
      orders-list-page.js
      terms.js
    reducers/
      index.js
      orders-reducer.js
    App.css
    App.js
    App.test.js
    index.css
    index.js
    store.js
  public/
    images/
      actions.gif
    index.html
    favicon.ico
  package.json
  README.md
  .gitignore
  .editorconfig
  .eslintrc.json
```

## Inicio rapido

Conseguirlo es asi de facil como seguir los pasos 1, 2, 3.

1. Estar seguro de tener instalado [NodeJS](https://nodejs.org/) y [npm](https://www.npmjs.com/) installed. clonar este repositorio
    ```
      git clone https://github.com/jg-rc/pizzamanager
    ```
2. instala sus dependencias

    ```
    cd pizzamanager; npm install
    ```

3. Inicia tu aplicacion, la aplicacion iniciara el servidor y el cliente simultaneamente, el cliente iniciara la ejecucion en la siguiente direccion [http://localhost:3000](http://localhost:3000)

    ```
    npm start
    ```
## otros comandos 

### `npm run build`

Construye la aplicacion para produccion la cual se crea en la carpeta `build` .<br>
Compila react en modo produccion y optimiza el compilado para el mejor rendimiento
la aplicacion es minificada y los nombres de archivo incluyen claves hashes
la aplicacion queda lista para hacer deploy

### `npm test`
Lanza el corredor de pruebas en modo de vista interactivo 


