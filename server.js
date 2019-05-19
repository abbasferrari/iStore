const express = require('express');
const path = require('path');
var cors = require('cors');
const app = express();


app.use(cors);
// Serve static files....

app.use(express.static(__dirname + '/dist/istore'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/istore/index.html'));
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);