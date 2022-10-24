const express = require('express');
const app = express();
const PORT = 3004;

app.use(express.static('dist'));


app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
