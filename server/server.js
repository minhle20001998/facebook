const express = require('express');
const app = express();
const port = process.env.PORT || 3030;
const cors = require('cors');
const db = require('./models');
const bodyParser = require('body-parser');
const route = require(`./routes`);
//middlewares
app.use(cors());
require('dotenv').config();
app.use(bodyParser.json());
route(app);
// 
db.sequelize.sync().then((req) => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
})

