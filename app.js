const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3001;
const contactRoutes = require('./routes/contact')


// (Start) Setting swagger
const swaggerUi = require('swagger-ui-express')
const apiDocumentation = require('./apidocs.json')
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDocumentation))
// (End) Setting swagger

app.use(bodyParser.json());

app.use('/nasabah', contactRoutes)


app.listen(port, () => {
  console.log(` success | Listening on port${port} `)
})