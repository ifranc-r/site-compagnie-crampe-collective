const path = require('path');

const express = require('express');

const router = express.Router();

let contact_obj = require('./../data/contacts.json');

router.get('/', (req, res, next) => {
  res.render(
    path.join(__dirname, '../', 'views', 'contact-us.pug'),
     {
       title: "Contact-Us",
       contacts: contact_obj.contacts
   });
});


module.exports = router;
