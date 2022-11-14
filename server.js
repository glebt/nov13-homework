'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Numbers - My Home Work');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

app.get('/numbers', (req, res) => {
    let size = parseInt( req.query.size )
  
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
    let numberz = Array.from({length: size}, (v, i) => i)
    let numberz_as_string = numberz.join(', ')
    res.send( "[" + numberz_as_string + "]")
})
  
app.get('/health', (req, res) => {
      console.log('health check');
      res.status(200).send();
})