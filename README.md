# Proyecto MesApp 馃殌

- Sistema de administraci贸n de pedidos y generador de men煤 por medio de c贸digos QR

## Pre-requisitos 馃搵

Se requiere la previa instalaci贸n del framework Vue con las librer铆as Vuex, Vue-Router, Firebase, Vuetify y Cypress

# Hito 1 馃摝

## Maquetaci贸n

El primer Hito consiste en la maquetaci贸n del proyecto, para lo cual, primero es necesario definir el tema y orientar el dise帽o que tendr谩 la interfaz. En esta etapa, se montar谩 el entorno de desarrollo necesario y se trabajar谩 de una forma m谩s bien est谩tica, generando las vistas y componentes que formar谩n parte de la aplicaci贸n.

1. Descripci贸n del proyecto: Descripci贸n breve, prop贸sito de la aplicaci贸n y usuarios a los que apunta
2. Gu铆a de estilos: Una breve gu铆a de estilos que indique tipograf铆as utilizadas (recomendado
   utilizar desde Google fonts), tama帽os de texto, colores seleccionados y que elementos har谩n
   uso de ellas.
3. Gu铆a de instalaci贸n del proyecto: Indicar los requisitos necesarios, si se utiliza Webpack o Parcel, si es necesario instalar dependencias extra dentro de un directorio (Por ejemplo, para las Cloud Functions). Registrar paso a paso el proceso de instalaci贸n.
4. Rutas de acceso: Indicar la ruta en donde puede ser encontrada la aplicaci贸n

**Descripci贸n y pro贸sito del proyecto**
MesaApp es un sistema de administraci贸n de pedidos y generador de men煤 por medio de c贸digos QR para cafeter铆as, el cual permite facilitar la vista del men煤 para el comensal gracias a un sitio web responsivo cuyo acceso es gracias a un c贸digo QR. En tanto a la administraci贸n, proporciona informaci贸n para el gerente de la cafeteria; gracias a su sistema de reporte y f谩cil uso de creacion y eliminacion de productos, usuarios y categor铆as.

La proyecci贸n del proyecto es para un solo cliente.

**Usuarios**
Los usuarios a los que apunta este proyecto son:

1. **_Administrador:_** Encargado de crear, actualizar, eliminar productos, categorys y usuarios (garzones), puede verificar el reporte y genera el c贸digo QR del men煤.
2. **_Garz贸n:_** Actualiza y elimina productos de un pedido.
3. **_Cocina:_** Encargado de revisar y enviar el estado del producto (Creado a Finalizado).
4. **_Comensal/Usuario an贸nimo:_** Usuario final, puede ver el producto gracias al sistema de QR

El administrador es el 煤nico en conocer la ruta del sistema de administraci贸n

**Gu铆a de Estilos**
**_Colores y tipograf铆a_**
La siguiente imagen es la gu铆a de estilos propuesto.
![alt text](https://github.com/Grupo-1-Mi-App/mesapp/blob/hito1/tipografia.png?raw=true)

**_Maqueta_**
Para la realizaci贸n de la maqueta definimos la herramienta figma, puede encontrar el detalle en el siguiente enlace:
https://www.figma.com/proto/YYYSx3DrT7EYjLYLVgrYfU/Coffee-APP?node-id=0%3A1&scaling=min-zoom&page-id=0%3A1
**_Resultado_**
El resultado que deseamos obtener del proyecto se encuentra en el siguiente enlace, de aqu铆 nos guiamos en el dise帽o gr谩fico propuesto.
https://xd.adobe.com/view/d90c3c28-3536-4d31-a985-3f1b7d7b39a9-8c5f/

# Hito 2 馃Ш

## Datos y L贸gica

El segundo Hito consiste en la obtenci贸n de datos y el desarrollo de la l贸gica que controlar谩 a la aplicaci贸n, el manejo del estado y la comunicaci贸n entre componentes para crear una interfaz din谩mica.

1. Conexi贸n con API: en la vista /qr podemos ver como se genera un qr se podra guardar e imprimir para que los restaurantes puedan excibir su men煤 a los clientes.
2. Conexi贸n con Vuex: Dentro del proyecto tenemos 2 conecciones realizadas con vuex:

- Creaci贸n de usuarios del restaurante, tales como garz贸n, administrador o cocinero.
- Creaci贸n de productos que se vinculan al men煤 del restaurante.

**Flujo de creaci贸n de usuario**

- En la vista de usuarios realizamos click en el bot贸n de **crear usuario**
  ![alt text](src/assets/readme/1.jpg)

- Rellenamos todos los campos
  ![alt text](src/assets/readme/2.jpg)
  ![alt text](src/assets/readme/3.jpg)

- Guardamos y vemos como ahora en nuestra vista de usuarios tenemos la alert que confirma la creaci贸n de usuario y este en el listado de usuarios.
  ![alt text](src/assets/readme/4.jpg)

- Para probar la conecci贸n, nos deslogueamos y probamos iniciar sesi贸n con este nuevo usuario.
  ![alt text](src/assets/readme/5.jpg)

- Finalmente vemos que todo funciona al entrar a la vista inicial del qr. Adem谩s podemos confirmar el usuario en la esquina superior derecha.
  ![alt text](src/assets/readme/6.jpg)

# Hito 3	馃捑

## Firebase
 Para esta etapa se debe implementar el proyecto en Firebase. Ser谩n utilizados los servicios de autenticaci贸n y Firestore para la base de datos. Es importante recordar que ser谩 necesario tener instalada el CLI de FIrebase en el equipo.
1. Implementaci贸n del servicio de autenticaci贸n de Firebase.
2. Persistencia del estado de autenticaci贸n del usuario. 
3. Manejo de rutas seg煤n estado de autenticaci贸n. 
4. Opci贸n de cerrar sesi贸n.
5. Creaci贸n de 2 usuarios.

**Implementaci贸n del servicio de autenticaci贸n de Firebase**
La conexi贸n para la autenticaci贸n con Firebase se realiza en el archivo `auth` que se encuentra en la siguiente ruta `src/firebase/auth.js`
![alt text](src/assets/readme/script_auth.png)
Nuestro proyecto implica que al crear un usuario este se pueda autenticar, se hace una conexi贸n entre auth y el *Firestore* con la columna `users` 
**Auth desde Firebase**
![alt text](src/assets/readme/auth.png)
**Columna Users desde Firestore**
![alt text](src/assets/readme/user_database.png)

**Persistencia del estado de autenticaci贸n del usuario**
Persistencia de autenticaci贸n usuario *Administrador*
- P谩gina QR
![alt text](src/assets/readme/persis_admin.png)
- Vista de Usuarios
![alt text](src/assets/readme/persis_admin2.png)
- Vista de Productos
![alt text](src/assets/readme/persis_admin3.png)
- Vista de Orders
![alt text](src/assets/readme/persis_admin4.png)
- Vista de Cocina
![alt text](src/assets/readme/persis_admin5.png)

**Manejo de rutas seg煤n estado de autenticaci贸n**
Las rutas seg煤n la autenticaci贸n son:
- Para Administrador: Generador QR, Usuarios, Productos, Garz贸n y Cocina
- Para Garz贸n: Generador QR y Garz贸n
- Para Cocina: Generador QR y Cocina

**Opci贸n de Cerrar Sesi贸n**
Todos los roles tienen permitido cerrar sesi贸n
![alt text](src/assets/readme/cerrar_sesion.png)

El c贸digo de cerrar sesi贸n se encuentra en `src/firebase/auth.js`
```
const logout = () => {
  signOut(auth)
    .then((user) => {
      console.log(user);
      //Swal.fire("Te has deslogeado correctamente");
    })
    .catch((error) => {
      console.log(error);
    });
};
```
 y en `src/components/Navbar.vue`
 ```
   <v-toolbar-items v-if="auth">
        <v-btn id="logOutBtn" @click="logout" plain elevation="0">
          {{ userEmail }} ({{ userRole }}) | Salir
          <v-icon right dark> mdi-logout </v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    ...
<script>
import { logout } from "../firebase/auth.js";
export default {
  data: () => ({
    drawer: false,
    group: null,
    auth: false,
    role: "",
  }),
  methods: {
    logout() {
      logout();
      this.$store.commit("eraseEmail");
      this.$swal(
        "Te has deslogeado correctamente",
        "Nos vemos la pr贸xima vez",
        "success"
      );
    },
    setAuthState() {
      if (this.userEmail == "") {
        this.auth = false;
      } else {
        this.auth = true;
      }
    },
  },
</script>
```
**Creaci贸n de usuarios**
Existen 3 usuarios creados actualmente:
1. admin@gmail.com para usuario admin
2. lina@gmail.com para usuario garzon
3. PedroTest@gmail.com para usuario cocina

Para crear m谩s usuarios, solo puede hacerse desde la cuenta administrador
![alt text](src/assets/readme/persis_admin2.png)

# Hito 4 鉁忥笍
La aplicaci贸n deber谩 superar con 茅xito todos los test programados y se revisar谩 que los test escritos realmente contemplen todo el funcionamiento de la aplicaci贸n.

Una vez finalizado el proceso de pruebas, se empaquetar谩 la aplicaci贸n para su paso a producci贸n.
Esta ser谩 alojada en un servicio de hosting a elecci贸n. Dentro de las opciones sugeridas se
encuentran Firebase hosting, GIthub Pages y Netlify.

1. Escritura de tests para probar la aplicaci贸n completa.
2. Alojamiento de la aplicaci贸n en un servicio de Hosting

**Escritura de test de la aplicaci贸n completa**
Todos los test se realizaron con el login y logout realizando el flujo completo, para la revisi贸n del correcto funcionamiento del test se sugiere *eliminar las cookies del historial del navegador* de `Cypress`
Para el proyecto generamos los siguientes test:
***Login Success***
```
describe("Test logIn exitoso", () => {
  it('Se debe poder logear exitosamente y llegar a la vista qr y deslogear luego de 10s"', () => {
    // cy.clearLocalStorage();
    // cy.clearCookies();

    cy.visit("/admin");
    cy.contains("h1", "Iniciar Sesi贸n");

    cy.get("#usuarioLabel").type("admin@gmail.com");
    cy.get("#passwordLabel").type("123456");
    cy.get("#LogInButton").click();

    cy.url().should("eq", "http://localhost:8080/qr");
    cy.contains("h1", "QR Men煤 completo");
    cy.wait(5000);

    cy.get("#logOutBtn").click();
    cy.wait(3000);

    cy.get(
      "button.swal2-confirm.sweet-alert-button.swal2-styled.swal2-default-outline"
    ).click();
  });
});
```
![alt text](src/assets/readme/login_success.png)

***Error del Login***
```
describe("Test usuario Inexistentes", () => {
  it('Se debe levantar el alert de "El mail es incorrecto"', () => {
    cy.visit("/admin");
    cy.contains("h1", "Iniciar Sesi贸n");

    cy.get("#usuarioLabel").type("EstoNoEsUnCorreo");
    cy.get("#passwordLabel").type("123456");
    cy.get("#LogInButton").click();
    cy.wait(5000);

    cy.get(".v-alert").should("exist");
  });

  it('Se debe levantar el alert de "El usuario no es correcto"', () => {
    cy.visit("/admin");
    cy.contains("h1", "Iniciar Sesi贸n");

    cy.get("#usuarioLabel").type("test@noexiste.com");
    cy.get("#passwordLabel").type("123456");
    cy.get("#LogInButton").click();
    cy.wait(5000);

    cy.get(".v-alert").should("exist");
  });

  it('Se debe levantar el alert de "La contrase帽a es incorrecta"', () => {
    cy.visit("/admin");
    cy.contains("h1", "Iniciar Sesi贸n");

    cy.get("#usuarioLabel").type("admin@gmail.com");
    cy.get("#passwordLabel").type("45678");
    cy.get("#LogInButton").click();
    cy.wait(5000);

    cy.get(".v-alert").should("exist");
  });
});
```
![alt text](src/assets/readme/error_email_login.png)

***createUser***
```
describe("Test que crea un usuario y lo valida iniciando sesi贸n", () => {
  it("Se debe poder crear un usuario Marco, desplegar alerta de creado con exito y borrarlo", () => {
    cy.clearCookies();

    cy.visit("/admin");
    cy.contains("h1", "Iniciar Sesi贸n");

    cy.get("#usuarioLabel").type("admin@gmail.com");
    cy.get("#passwordLabel").type("123456");
    cy.get("#LogInButton").click();

    cy.url().should("eq", "http://localhost:8080/qr");
    cy.contains("h1", "QR Men煤 completo");

    cy.get("#userMenuOption").click();
    cy.url().should("eq", "http://localhost:8080/users");

    cy.get(
      "button.mb-2.text-capitalize.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default"
    ).click();

    cy.get("#NameLabelUser").type("1_Ana");
    cy.get("#emailLabelUser").type("ana_ejemplo@gmail.com");
    cy.get("#passwordLabelUser").type("123456");
    cy.get("#selectLabelUser").click();
    cy.get("[role=listbox]").eq(1).click();
    // cy.get("div#list-item-162-1").click();

    cy.get("#btnCrearUsuario").click();

    cy.wait(3000);

    cy.get(
      "button.swal2-confirm.sweet-alert-button.swal2-styled.swal2-default-outline"
    ).click();

    cy.get("button.btn-borrar.v-btn.v-btn--outlined.theme--dark.v-size--small")
      .first()
      .click();

    cy.wait(3000);

    cy.get("#deleteUser").click();

    cy.wait(3000);

    cy.get("#logOutBtn").click();

    cy.get(
      "button.swal2-confirm.sweet-alert-button.swal2-styled.swal2-default-outline"
    ).click();
  });
});
```
![alt text](src/assets/readme/create_user.png)

***tomarPedido***
```
describe("Test generar pedido de camarero", () => {
  it("Se debe poder crear un usuario Marco, desplegar alerta de creado con exito y borrarlo", () => {
    cy.clearCookies();

    cy.visit("/admin");
    cy.contains("h1", "Iniciar Sesi贸n");

    cy.get("#usuarioLabel").type("admin@gmail.com");
    cy.get("#passwordLabel").type("123456");
    cy.get("#LogInButton").click();

    cy.url().should("eq", "http://localhost:8080/qr");
    cy.contains("h1", "QR Men煤 completo");

    cy.get("#garzonMenuOption").click();
    cy.url().should("eq", "http://localhost:8080/waiter");

    cy.get(
      "button.text-capitalize.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default"
    )
      .eq(6)
      .click();
    cy.get(
      "button.text-capitalize.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default"
    )
      .eq(11)
      .click();
    cy.get(
      "button.text-capitalize.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default"
    )
      .eq(7)
      .click();

    cy.get("div.v-select__selections").click();
    cy.get("[role=listbox]").eq(1).click();

    cy.get("button#agregarOtro").eq(2).click();
    cy.get("#confirmarPedido").click();

    cy.wait(3000);

    cy.get(
      "button.swal2-confirm.sweet-alert-button.swal2-styled.swal2-default-outline"
    ).click();

    cy.get("#cocinaMenuOption").click();
    cy.url().should("eq", "http://localhost:8080/kitchen");

    cy.get(
      "button.btn-editar.mr-5.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--dark.v-size--small"
    )
      .eq(0)
      .click();

    cy.wait(5000);

    cy.get("#logOutBtn").click();

    cy.get(
      "button.swal2-confirm.sweet-alert-button.swal2-styled.swal2-default-outline"
    ).click();
  });
});
```
![alt text](src/assets/readme/tomar_pedido.png)

**Alojamiento de la aplicaci贸n**
Para el alojamiento hemos elegido `Netlify`[https://www.netlify.com/] como hosting y le agregamos el dominio `mesapp.cl`. Para permitir redirecciones para una SPA (Single Page Application) se debe agregar en la carpeta *public* un archivo de nombre *_redirects* dentro del proyecto el cual lleva lo siguiente:
```
/* /index.html 200
```

**Gu铆a de instalaci贸n del proyecto**
_Project setup_

```
npm install
```

_Compiles and hot-reloads for development_

```
npm run serve
```

_Compiles and minifies for production_

```
npm run build
```

_Run your unit tests_

```
npm run test:unit
```

_Run your end-to-end tests_

```
npm run test:e2e
```

_Lints and fixes files_

```
npm run lint
```

_Customize configuration_
See [Configuration Reference](https://cli.vuejs.org/config/).

**Rutas de Acceso**
Por el momento estamos usando las rutas de ambiente de desarrollo. Las rutas existentes son:

- **_Administrativo_** Se encuentra todo lo que el admin puede realizar, puede visualizarlo ingresando a http://mesapp.cl/admin 
- **_El men煤_** lo pueden visualizar ingresando a: http://mesapp.cl en donde el usuario final puede elegir que desea pedir.
- **_Garz贸n_** Se encuentra en: http://mesapp.cl/waiter aqu铆 este puede tomar el pedido de los clientes.
- **_Cocina_** En esta vista podemos ver todos los pedidos recibidos en la cocina en http://mesapp.cl/kitchen que fueron creados por el garz贸n anteriormente.


### Aclaraciones 馃搵

La revisi贸n del proyecto se debe hacer desde la rama `hito4` o en la rama `main` la cual tiene el proyecto completo y limpio.

# Construido con 馃洜锔?

- Vue [2.6.11] - Framework usado
- Vuetify [2.4.0] - Framework de CSS usado
- Vue Router [3.2.0] - Librer铆a de enrutamiento oficial de Vue
- Vuex [3.4.0] - Librer铆a de gesti贸n de estados
- Firebase [9.6.5] - Plataforma para la autenticaci贸n y Bases de datos
- Vue Sweetalert2 [5.0.2] - Librer铆a para dar estilos a las alertas
- Cyperss [4.5.0] - End-To-End testing

## Autores 鉁掞笍

- **Josefa Mendez** - _Trabajo Inicial y documentaci贸n_ - [JoMendezG](https://github.com/JoMendezG)
- **Lina Sof铆a Vallejo Betancourth** - _Trabajo Inicial y documentaci贸n_ - [linav92](https://github.com/linav92)
- **Sergio 脕vila Astorga** - _Trabajo Inicial y documentaci贸n_ - [sergioavila](https://github.com/sergioavila)

## Licencia 馃搫

Este proyecto es un software libre.
