const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const path = require('path');

// app.use(express.static('public'));
app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

