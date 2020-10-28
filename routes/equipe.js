const path = require('path');

const express = require('express');

const router = express.Router();

var fs = require('fs');

let obj_equipes = require('./../data/equipe.json');

router.get('/', (req, res, next) => {
  res.render(
    path.join(__dirname, '../', 'views', 'equipe.pug'),
     {
       title: "Équipe",
       equipes: obj_equipes.equipe
   });
});


module.exports = router;
