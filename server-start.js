process.env.NODE_ENV= process.env.NODE_ENV || 'development'
process.env.SERVER_PORT= process.env.SERVER_PORT || '4040'
process.env.JWT_SECRET='0a6b944d-d2fb-46fc-a85e-0295c986cd9f'
process.env.MONGO_HOST='mongodb://newsreader:v1bxxdJwzCsWDmHTnEj4XD2nRCb3B9Jdz8IfEoWV5OCWjYOsNIoTNc18vyw2KdOLk27RqO3jmbHxd3QbJRpngA==@newsreader.documents.azure.com:10255/?ssl=true&replicaSet=globaldb'
process.env.MONGO_PORT='27017'
require('babel-register');
require("babel-polyfill");
require('./server');