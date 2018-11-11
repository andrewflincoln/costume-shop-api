const express = require('express')
const app = express()
const port =  process.env.PORT || 3200
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(bodyParser.json())
app.use(morgan('dev'))

const costumeRoutes = require('./routes/costume-routes')
app.use('/costumes', costumeRoutes)


app.use((err, req, res, next) => {
    console.error(err)
    const status = err.status || 500
    res.status(status).send({error: err})
})

app.use((req, res, next) => {
    res.status(404).send({error: { status: 404, message: `Not found.`}})
})





app.listen(port, () => {
    console.log(`Costume shop open for business on port ${port}!`)
})

module.exports = app