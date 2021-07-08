const express = require('express');
const app = express();
const port = 8080;

<<<<<<< HEAD
app.get('/', (req, res) => res.send('Hello TOMOKI!'));
=======
app.get('/', (req, res) => res.send('Hello Tomoki!'));
>>>>>>> 3ae3503efdaa95ebb2b861740334794b48d45f85

app.listen(port);
console.log(`App running on http://localhost:${port}`);
