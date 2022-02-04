# Proyecto MesApp 🚀

- Sistema de administración de pedidos y generador de menú por medio de códigos QR

## Pre-requisitos 📋
Se requiere la previa instalación del framework Vue con las librerías Vuex, Vue-Router, Firebase y Vuetify

# Hito 1 📦 
## Maquetación

El primer Hito consiste en la maquetación del proyecto, para lo cual, primero es necesario definir el tema y orientar el diseño que tendrá la interfaz. En esta etapa, se montará el entorno de desarrollo necesario y se trabajará de una forma más bien estática, generando las vistas y componentes que formarán parte de la aplicación.

1. Descripción del proyecto: Descripción breve, propósito de la aplicación y usuarios a los que apunta
2. Guía de estilos: Una breve guía de estilos que indique tipografías utilizadas (recomendado
utilizar desde Google fonts), tamaños de texto, colores seleccionados y que elementos harán
uso de ellas.
3. Guía de instalación del proyecto: Indicar los requisitos necesarios, si se utiliza Webpack o Parcel, si es necesario instalar dependencias extra dentro de un directorio (Por ejemplo, para las Cloud Functions). Registrar paso a paso el proceso de instalación.
4. Rutas de acceso: Indicar la ruta en donde puede ser encontrada la aplicación

**Descripción y proósito del proyecto**
MesaApp es un sistema de administración de pedidos y generador de menú por medio de códigos QR para cafeterías, el cual permite facilitar la vista del menú para el comensal gracias a un sitio web responsivo cuyo acceso es gracias a un código QR. En tanto a la administración, proporciona información para el gerente de la cafeteria; gracias a su sistema de reporte y fácil uso de creacion y eliminacion de productos, usuarios y categorías.

La proyección del proyecto es para un solo cliente.

**Usuarios**
Los usuarios a los que apunta este proyecto son:
1. ***Administrador:*** Encargado de crear, actualizar, eliminar productos, categorys y usuarios (garzones), puede verificar el reporte y genera el código QR del menú.
2. ***Garzón:*** Actualiza y elimina productos de un pedido.
3. ***Cocina:*** Encargado de revisar y enviar el estado del producto (Creado a Finalizado).
4. ***Comensal/Usuario anónimo:*** Usuario final, puede ver el producto gracias al sistema de QR

El administrador es el único en conocer la ruta del sistema de administración

**Guía de Estilos**
***Colores y tipografía***
La siguiente imagen es la guía de estilos propuesto.
![alt text](https://github.com/Grupo-1-Mi-App/mesapp/blob/hito1/tipografia.png?raw=true)

***Maqueta***
Para la realización de la maqueta definimos la herramienta figma, puede encontrar el detalle en el siguiente enlace:
https://www.figma.com/proto/YYYSx3DrT7EYjLYLVgrYfU/Coffee-APP?node-id=0%3A1&scaling=min-zoom&page-id=0%3A1
***Resultado***
El resultado que deseamos obtener del proyecto se encuentra en el siguiente enlace, de aquí nos guiamos en el diseño gráfico propuesto.
https://xd.adobe.com/view/d90c3c28-3536-4d31-a985-3f1b7d7b39a9-8c5f/

**Guía de instalación del proyecto**
*Project setup*
```
npm install
```
*Compiles and hot-reloads for development*
```
npm run serve
```
*Compiles and minifies for production*
```
npm run build
```
*Run your unit tests*
```
npm run test:unit
```
*Run your end-to-end tests*
```
npm run test:e2e
```
*Lints and fixes files*
```
npm run lint
```
*Customize configuration*
See [Configuration Reference](https://cli.vuejs.org/config/).

**Rutas de Acceso**
Por el momento estamos usando las rutas de ambiente de desarrollo. Las rutas existentes son:
- ***Administrativo*** Se encuentra todo lo que el admin puede realizar, puede visualizarlo ingresando a http://localhost:8080 (aún en etapa de desarrollo)
- ***El menú*** lo pueden visualizar ingresando a: http://localhost:8080/menu en donde el usuario final puede elegir que desea pedir.

### Aclaraciones 📋
La revisión del proyecto se debe hacer desde la rama ```hito1```, en la rama ```main``` solo se verá el proyecto una vez realizado los cambios de acuerdo a las sugerencias hechas por parte del profesor y el ayudante.
 
# Construido con 🛠️

* Vue [2.6.11] - Framework usado
* Vuetify [2.4.0]  - Framework de CSS usado
* Vue Router [3.2.0] - Librería de enrutamiento oficial de Vue
* Vuex [3.4.0] - Librería de gestión de estados
* Firebase [9.6.5] - Plataforma para la autenticación y Bases de datos

## Autores ✒️

* **Josefa Mendez** - *Trabajo Inicial y documentación* - [JoMendezG](https://github.com/JoMendezG)
* **Lina Sofía Vallejo Betancourth** - *Trabajo Inicial y documentación* - [linav92](https://github.com/linav92)
* **Sergio Ávila Astorga** - *Trabajo Inicial y documentación* - [sergioavila](https://github.com/sergioavila)

## Licencia 📄

Este proyecto es un software libre. 
