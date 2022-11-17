const express = require('express');
const helmet = require("helmet");
const config = require('./config');
const db = require('./database');

const {BooksRoute,UsersRoute} = require('./routes');

config();
db();
const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use(helmet());

app.listen(process.env.APP_PORT, () => {
  console.log(`APP started port ${process.env.APP_PORT}`);
  app.use('/books', BooksRoute);
  app.use('/users', UsersRoute);

  
});