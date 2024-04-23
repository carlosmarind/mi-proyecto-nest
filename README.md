### Para ejecutar la base de datos mysql con docker:

    docker run --name nest-mysql -v nest-mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=nest-root -e MYSQL_USER=nest-user -e MYSQL_PASSWORD=nest-password -e MYSQL_DATABASE=nest-db -dp 3306:3306 mysql:5.7

### para crear un nuevo controlador

    nest g controller 

### Para crear un nuevo servicio:

    nest g service

### Para hacer build del proyecto

    npm run build

### Para ejecutar el proyecto despues de un build

    npm run start:prod

### Para ejecutar el proyecto en modo de desarrollo

    npm run start:dev

### Para cambiar la config de mysql a sqlite

la config de ambas bases de datos se encuentra en la carpeta __src/config__ del proyecto, y se usa una u otra dependiendo del import:

    import { sqliteConfig, mysqlConfig } from './config/db';

y luego en el fichero app.module.ts

Para mysql

    imports: [
        TypeOrmModule.forRoot(mysqlConfig), 
        UserModule
    ],

y para sqlite

     imports: [
        TypeOrmModule.forRoot(sqliteConfig), 
        UserModule
    ],
   