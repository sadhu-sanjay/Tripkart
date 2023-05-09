
require('dotenv').config()

const express = require("express")
const app = express()
const port = process.env.PORT || 5001;
const schema = require('./schema')

const { graphqlHTTP } = require('express-graphql');

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true  
}))

app.get("/product", (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
