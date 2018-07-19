const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const route = require('./routes');

const app = express();

app.use(bodyparser.json())

app.use(cors())

app.use('/api', route);

app.get('/', (req, res) => {
    res.send('Hello world');
});

const port = 3000;

app.listen(port, () => console.log(`App is listening on port ${port}`));