const express = require('express');
const app = express();
const PORT = 3004;

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
