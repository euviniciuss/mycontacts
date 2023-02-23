const express = require('express');
const router = require('./routes');

const app = express();

app.use(router);

app.listen(8080, () => console.log('🔥 Server started at http://localhost:8080'));
