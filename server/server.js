const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const apis = express();

const portServer = 8080;
const portApi = 8000;

apis.use(bodyParser.urlencoded({ extended: false }));
apis.use(bodyParser.json());
apis.use(cors());

app.use(express.static(path.join(__dirname, '..', 'build')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '..', 'build' , 'index.html')));

require('./api/news').init(apis);

app.listen(portServer, () => console.log(`Listening front on port ${portServer}`));
apis.listen(portApi, () => console.log(`Listening api on port ${portApi}`));