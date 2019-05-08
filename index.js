const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

app.get('/:message', (req, res) => {
  fs.appendFile('chat.txt', req.params.message, () => {
    return fs.readFile('chat.txt', 'utf8', (err, data) => {
      if(err) throw err;
      res.send(data);
    });
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
