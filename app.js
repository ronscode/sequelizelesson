const express = require('express');
const app = express();

const models = require('./models');

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.get('/', function(req, res) {
    models.user2s.findAll().then(results => {
        results.forEach(function(index) {
            console.log(index.id, index.firstName);
        });
    });
});

// This creates a user in the DB 

models.user2s.create({firstName:'Ron', lastName: 'Cagle', email: 'ron@atlantashirt.com'})
  .then(function(user2s){
        console.log(user2s);
  });


// This code below will find a user in the DB 

models.user2s.findAll({where:{firstName:'Ron'}})
  .then((results) => {
      results.forEach(function(index) {

        console.log(index.id, index.firstName);
      });
  });

var db = require('./models');
var diddy;

// Creating PDiddy

db.user2s.create({firstName: "PDiddy" })
  .then(function (user) {
      console.log(user);
      diddy = user;
  });



// This is my app listening

app.listen(3000, function() {
    console.log("We are listening");
})
