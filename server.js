const express = require('express');
const cors = require('cors');
const helmet = require("helmet")

const PORT = process.env.PORT || 3001
const app = express();
require('dotenv').config();

app.use(express.urlencoded({ extended: false}))
app.use(express.json());
app.use(cors());
app.use(helmet());

app.use(require('./src/routes/routes'))

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
