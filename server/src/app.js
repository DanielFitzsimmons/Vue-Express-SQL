const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config.js')

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/status', (req, res) =>{
    res.send({message: 'hello world'})
})
app.post('/register', (req, res) =>{
    res.send({message: `Hello ${req.body.email}! You have been registered`})
})

sequelize.sync().then(()=> {
    app.listen(process.env.PORT || config.port)
    console.log(`Server started on port ${config.port}`)
})

