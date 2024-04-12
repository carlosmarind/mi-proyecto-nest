docker run --name nest-mysql -v nest-mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=nest-root -e MYSQL_USER=nest-user -e MYSQL_PASSWORD=nest-password -e MYSQL_DATABASE=nest-db -dp 3306:3306 mysql:5.7
nest g controller 
nest g service

npm install --save @nestjs/typeorm typeorm mysql2