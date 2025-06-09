# Trabajo Fin Grado IKER ORTEGA ORTIZ
Componente web chatbot inteligente alimentado con temario del Grado en Ingeniería Informática de UNIR.

# URLs del proyecto
- Backend + Cliente: https://tfg-chatbot.netlify.app/
- Cliente externo: https://tfg-chatbot-client.netlify.app/ 

# Limitaciones y restricciones
- Las consultas desde el cliente alojado en Netlify tiene un timeout de 10s, por lo que si el procesado es mayor, no se procesará la respuesta.
- Desde local no ocurre esto y se pueden hacer pruebas completas con todo el temario.

# Estructura de carpetas
```
|_ /01 - src (código de la solución para PROD)
  |_ /dist (parte cliente)
  |_ /netlify (parte backend - capa API)
  |_ /node_modules (dependencias JS)
  |_ .gitignore
  |_ netlify.toml (config backend)
  |_ package-lock.json
  |_ package.json
|_ /02 - client (página de ejemplo con chatbot importado)
|_ /03 - npm (Componente chatbot publicado en NPM)
|_ /04 - local (desarrollo de la solución para local)
|_ /05 - template HTML (plantilla del chatbot)
|_ /06 - design Figma (archivo Figma con el diseño)
|_ README.md
  
```

# Información acerca de la implementación de la solución

## 01 - Instalar tailwind CSS
- npm install tailwindcss @tailwindcss/cli

- Crear el archivo: input.css dentro de la carpeta 'src'
- Añadir la entrada @import "tailwindcss"
- Lanzar el script de escaneo y salida del fichero final: `npx @tailwindcss/cli -i ./client/input.css -o ./client/output.css --watch`
- Añadir el link a la cabecera de la web para ver el resultado.  `<link href="./output.css" rel="stylesheet">`
- A la hora de compilar, hay que sacar este listado y meterlo como estilos planos dentro del componente, para que vayan embebidos

## 02 - Integrar plantilla HTML dentro del componente 
### Añadir los estilos
`render() {
    this.shadowRoot.innerHTML = '
    <style>${this.styles}</style>
    <div...> '
    `
- Añadir las clases de tailwind al componente en la parte de styles.
`get styles() {
    return '
    :host {
      display: block;
      position: fixed; /* Change to fixed position */
      bottom: 25px; /* Adjust the distance from the bottom */
      right: 25px; /* Adjust the distance from the right */
      z-index: 9999; /* Ensure the chat bot appears above other content */
    }
    ... '
    `
### Añadir los iconos
- Hay que convetir todos los iconos e imágenes a SVG para que puedan ir embebidos en el componente.

## 03 - Capa Frontend
- Añadir todas las dependencias usadas con el commando: `npm install`
- Importar el elemento chatbot en un `index.html como module`, para visualizarlo: `<script type="module" src="./ChatBot.js"></script>`
- Cargar el componente con el tag `<chat-bot></chat-bot>`
- Se llama a las APIs mediante URL absoluta del dominio del servidor: `https://tfg-chatbot.netlify.app`


## 04 - Capa Backend (API)
- Para la creación de la capa node.js (Express), se ha tenido que adaptar el desarrollo a la arquitectura de Netlify, que es el proveedor gratuito que lo va a alojar
Para ello hay que crear la ruta `netlify/functions/api.js` y añadir en este fichero la lógica del servidor node.js
- Esta servidor recibe las peticiones desde el cliente y redirige la petición al servicio de IA. También se define el modelo de IA a utilizar e implementa todo la lógica de control de errores.
- También se ha incluido en el servidor de Netlify el token API_KEY para acceder al servicio de IA. Este se recupera mediante un procedimiento opaco, que impide que la clave quede expuesta: `const apiKey = process.env.GEMINI_API_KEY`
- Este servidor hace de intermediario entre el componente alojado en cualquier ubicación y el servicio de IA. Permitiendo tener el componente completamente independiente a la lógica de IA. Y pudiendo hacer uso de el desde cualquier página web
- Para desplegar en Netlify desde Github, hay que lanzar el siguiente script: `npm install:prod`

## 05 - Capa Plataforma IA
- Se ha utilizado la plataforma Google AI Studio para configurar el agente conversacional
- Se ha utilizado el modelo Gemini 2.0 Flash-Lite a través de la API de Google AI Studio

## 06 - Empaquetado NPM
- Se ha creado una carpeta llamada NPM para el proyecto
- Se ejecuta `npm init -y` para crear el fichero package.json
- Se añade la siguiente línea para hacerlo público
 `"publishConfig": {
    "access": "public"
      },`
- Se lanza el script `npm login` para logearse con la web de NPM
- Se lanza el script `npm publish` para publicar el contenido de la carpeta en el repositorio


## 07 - Distribución e instalación del componente
- Para instalar el componente tenemos que estar en un proyecto de tipo NPM con un package.json
- Lanzamos la siguiente sentencia en la terminal `npm i @ikermedia/chatbot` para instalar la dependencia
- En la página HTML llamamos al componente con el siguiente código
`<script type="module" src="node_modules/@ikermedia/chatbot/ChatBot.js"></script>`
`<chat-bot></chat-bot>`



