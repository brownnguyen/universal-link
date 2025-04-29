const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/.well-known', express.static(path.join(__dirname, 'public/.well-known')));

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Universal Link Demo!</h1>');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
