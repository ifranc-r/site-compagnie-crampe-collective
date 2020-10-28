// import de librairie
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const redis = require('redis');

// port application
const PORT = process.env.PORT || 5000;
// port base de donnée
const REDIS_PORT = process.env.REDIS_URL || 6379;

// Genstion de la base de donnée
// let client = redis.createClient(REDIS_PORT);
//
// client.on("error", function(error) {
//   console.error(error);
// });
// client.on("connected", function() {
// });

// ajout des routes
const beginingRoutes = require('./routes/begining');
const contactRoutes = require('./routes/contact-us');
const aproposRoutes = require('./routes/apropos');
const equipeRoutes = require('./routes/equipe');

// debut de l'application
const app = express();
// Debut de la gestion du corp node.js
app.use(bodyParser.urlencoded({extended: true}));

// parametre a une vu pug
app.set('view engine', 'pug')

// ajout du dossier public
app.use(express.static(path.join(__dirname,'public')));

// creation des routes
app.use('/', beginingRoutes);
app.use('/contact-us', contactRoutes);
app.use('/apropos', aproposRoutes);
app.use('/equipe', equipeRoutes);


// Cas d'erreur dans un liens
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

// evenement du client serveur
app.listen(PORT);
