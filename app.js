const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer'); // Agrega esta línea
const app = express();
const mainRoute = require ('./src/routes/main');
const productRoute = require ('./src/routes/product');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));

const puerto = process.env.puerto || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', express.static(__dirname + '/public'));

app.set('view engine', 'ejs'); 
app.set('views', './src/views');

app.use ('/', mainRoute);
app.use ('/product', productRoute);

app.listen(puerto, () => {
    console.log(`Aplicación corriendo en puerto ${puerto}`);
});