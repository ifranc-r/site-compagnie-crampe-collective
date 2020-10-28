const path = require('path');

const express = require('express');

const router = express.Router();

let partenaire_list = require('./../data/partenaires.json');



router.get('/', (req, res, next) => {
  res.render(
    path.join(__dirname, '../', 'views', 'apropos.pug'),
     {
       title: "A propos",
       partenaires_list: partenaire_list.partenaires
   });
});


module.exports = router;
