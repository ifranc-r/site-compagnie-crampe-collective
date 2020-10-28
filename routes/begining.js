const path = require('path');

const express = require('express');

const router = express.Router();

let projet_list = require('./../data/projets.json');

router.get('/', (req, res, next) => {
  res.render(
    path.join(__dirname, '../', 'views', 'les-projets.pug'),
    {
      title: "Les projets",
      projets_list: projet_list.projets
    }
  );
});


module.exports = router;
