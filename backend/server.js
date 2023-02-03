require('dotenv').config();
const bodyParser = require('body-parser');
const  router = require('./routes/form');
const express = require('express');
const cors = require('cors')
const connectDB = require('./DataBase/db');
const app = express();
app.use(cors());
port = process.env.PORT;
app.use(bodyParser.urlencoded({ extended:true}));
app.use(express.json());
connectDB();
app.use('/api/v1', router);

app.listen(port, () => {
    console.log(`Server is listening at ${port}`);
    
})