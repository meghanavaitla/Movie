const express = require('express')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

var Movie = require('./backend/models/movie');
var Order = require('./backend/models/order');



// ************************ DB Connection ************************
var dbOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  auto_reconnect: true
};
mongoose.connect("mongodb+srv://bz:bz@cluster0-li9qp.mongodb.net/sample_mflix?retryWrites=true&w=majority", dbOptions);

mongoose.connection.on('connected', function () {
  console.log("Connected to DB");
});
mongoose.connection.on('error', function (err) {
  console.log("Error while connecting to DB: " + err);
});
// * DB Connection ************************



const app = express()







// ****** Body Parser **********
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use(cors());
// * Body Parser ********





// *********************** Backend Routes **********************

app.get('/', (req, res) => res.send('Hello World!'));

// GET list of 30 movies - learn more about limit and skip in mongoose
app.get('/api/movies', (req, res) => {
  Movie.find({}, 'title imdb poster year fullplot', {
    limit: 30
  }, (err, docs) => {
    if (err) {
      console.log('Error while getting movies from DB in /api/movies: ' + err);
      res.json({
        error: err
      });
    } else {
      res.json(docs);
    }
  });
});

// Store order at checkout in DB
app.post('/api/orders', (req, res) => {
  var ord = {
    "user": "Admin",
    "items": req.body
  }
  console.log(JSON.stringify(ord));
  var newOrder = new Order(ord);
  newOrder.save((err, doc) => {
    if (err) {
      console.log("Error occurred");
      res.json({
        "message": "error"
      });
    } else
      res.json(doc);
  })
})




// * Backend Routes **********************









// ******************** Express Server *************************
const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
