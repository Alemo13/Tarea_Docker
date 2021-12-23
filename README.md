# Tarea_Docker

## Dependencias:
npm i
node.js
express
method-override
mongoose
redis

npm i -D 
nodemon

## Contenedores Docker:

docker run \
--name Mongo \
--network test-db \
-d \
-p 27017:27017 \
mongo

docker run \
--name Redis \
--network test \
-d \
-p 6379:6379 \
redis

## Base de datos docker:

Para visualizar la base de datos desde docker y revisar si estan los registros guardados, usar:

docker exec -it Mongo bash
mongo
show dbs
use reg-app
show collections
db.registros.find().pretty()

## Notas:

La tarea fue montada usando node.js y un servidor de express, para hacer uso de ella se ingresa mediante la url localhost:8081
