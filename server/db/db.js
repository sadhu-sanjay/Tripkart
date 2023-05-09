
// create a generic function to execute queries and return the results in a promise (so we can use async/await) 
// and then use it in the routes instead of the code above (which is repeated for each route) 
const mysql = require("mysql");
let pool;

try {
  pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  });
  console.log("Connection Success")
}
catch (error) {
  console.log("Error", error)
}
    
const executeQuery = (query, params = []) => {
    return new Promise((resolve, reject) => {
        pool.query(query, params, (err, results) => {
            if (err) reject(err);
            resolve(results);
        })
    })
};

module.exports = { executeQuery };

