const express = require('express')
const cors = require("cors")
const dotenv = require('dotenv')
dotenv.config({ path: './configs/.env' })
const bodyParser = require('body-parser')

const app = express()
const port = `${process.env.APP_PORT}`

app.use(cors({
    credentials: true,
    origin: [
        'http://localhost:3000',
    ]
}))

app.use(bodyParser.json())

app.use('/auth', require('./routes/getAuthState'))

async function start() {
    try {
        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`)
        })
    } catch (error) {
        console.log('Server Error', error.message)
        process.exit(1)
    }
}

start()