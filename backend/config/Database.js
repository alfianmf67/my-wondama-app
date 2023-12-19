
import mysql from "mysql2/promise" 
const db = mysql.createPool({host: "localhost", user: "root", password:"", database: "wondama-data"})
 
async function query(query, value) {
    try {
        const mysql = require("mysql2/promise") 
        const [eQuery] = await db.query(query, value ?? [])
        return eQuery
    } catch (error) {
        console.log(error)
    }
}
 
export default db;