const express = require('express');
const path = require('path');
// var cors = require('cors')

const app = express();
// app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);