const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(morgan('dev'));


const gmail = require('./routes/gmail');
app.use('/api', gmail);

app.listen(3001, () => console.log('Listening on port 3001'));
