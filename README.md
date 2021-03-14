### NODE REST SERVER
## API REST : Servicios a través de HTTP que usan protocolos más facil de usar que un protocolo como SOAP, que tiene requisitos específicos, como la mensajería XML y la seguridad y el cumplimiento de las operaciones integrados, que lo hacen mas lesto. Las API REST son más rápidas y ligeras y resultan ideales para el IoT y el desarrollo de las app movile
## Métodos HTTP : GET - POST - PUT - PATCH - DELETE ...
 * mas info : https://developer.mozilla.org/es/docs/Web/HTTP/Methods
### version 1.0.1
 * Se inicianiliza el proyecto con "npm init".
 * se instala paquetes :npm install express dotenv 
    * npm install nodemon -D
 * se usa Postman para ver solicitudes de http
### version 1.0.2
 * se agrega carpeta src y se inserta el index.js y se empieza a trabajar dentro de ella.
 * se crea las capas controller, loaders y routes, para ir separando la función de cada archivo
 * se crear archivo env.exmaple
 * se instala paquetes:
  * morgan : npm i morgan
  * winston : npm i winston

## OBS:
Para ejecutar app desde consola : npm run dev
El archivo .env no se versiona en el repositorio por motivos de seguridad, ya que se pasan credenciales como el passwoord del servidor.