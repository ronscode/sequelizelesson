const express = require('express');
const app = express();

const models = require('./models');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

app.set('view engine', 'ejs');
app.set('views', 'app/views');

// app.get('/', function(req, res) {
//     models.user2s.findAll().then(results => {
//         results.forEach(function(index) {
//             console.log(index.id, index.firstName);
//         });
//     });
// });

const newAlbumName = "";
rl.question('What is the album name? ', (NewAlbumName) => {
    // TODO: Log the answer in a database


    console.log(`Thank you for your valuable feedback: ${NewAlbumName}`);

    models.album2.create({albumName:`${NewAlbumName}`})
  .then(function(album2){
        console.log(album2);
  });
    rl.close();
  });

// This creates a user in the DB 

// models.user2s.create({firstName:'Ron', lastName: 'Cagle', email: 'ron@atlantashirt.com'})
//   .then(function(user2s){
//         console.log(user2s);
//   });



// This creates a user in the DB 

// models.user2s.create({firstName:'Ron', lastName: 'Cagle', email: 'ron@atlantashirt.com'})
//   .then(function(user2s){
//         console.log(user2s);
//   });


// This code below will find a user in the DB 

// models.user2s.findAll({where:{firstName:'Ron'}})
//   .then((results) => {
//       results.forEach(function(index) {

//         console.log(index.id, index.firstName);
//       });
//   });

// var db = require('./models');
// var diddy;

// Creating PDiddy

// db.user2s.create({firstName: "PDiddy" })
//   .then(function (user) {
//       console.log(user);
//       diddy = user;
//   });



// This is my app listening

app.listen(3000, function() {
    console.log("We are listening");
})
