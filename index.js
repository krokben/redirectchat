const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/:message', (req, res) => res.send(req.params.message));

app.listen(port, () => console.log(`Server listening on port ${port}!`));
