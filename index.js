const express = require('express');
const app = express();
const port = process.env.PORT  || 30006;




const user = {
    name: 'john',
    age: 30
};

app.get('/hello', (req, res) => res.send('Hello, World on Hello ROUTE!'));
app.get('/user', (req, res) => res.send(user));

// listen is used to request
app.listen(port, () => console.log(`Server listening on port ${port}!`));

