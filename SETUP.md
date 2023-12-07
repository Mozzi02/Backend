Para poder ejecutar esta app deberá seguir los siguientes pasos:

1. En una terminal situarse en el directorio donde se encuentra el proyecto y ejecutar el comando "npm install" para instalar las dependencias del proyecto que se encuentran en el package.json

2. Levantar la base de datos con el script SQL que se encuentra en el repositorio. Nosotros utilizamos MySQL Workbench 8.0

3. Cambiar las credenciales de acceso a la base de datos por un usuario que tenga permiso de administrado en el archivo src/shared/db/orm.ts

4. Asegurarse de que el servicio de la base de datos esté corriendo en su sistema, y luego en la terminal ejecutar el comanto "npm run start:dev" para inicializar la API en el puerto designado.
