require('dotenv').config()
const port = process.env.PORT || 4000
const express = require("express")
const app = express()
const schema = require('./schema')
const cors = require('cors')
app.use(cors())

const { graphqlHTTP } = require('express-graphql');

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true  
}))

app.listen(port, '127.0.0.1', () => {
    console.log(`Server is running on port ${port}`)
})

