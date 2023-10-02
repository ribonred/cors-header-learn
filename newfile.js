const express = require('express');
const applyMiddleware = require('./middleware');

const app = express();

applyMiddleware(app);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
