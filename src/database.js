import mysql, { Connection } from "promise-mysql";
import keys from "./keys";

const db = mysql.createConnection({
    host: keys.database.host,
    user: keys.database.user,
    password: keys.database.password,
    database: keys.database.database
});
// db.getConnection().then(connection => {
//         db.releaseConnection(connection);
//         console.log('Database connect')
// })

const connection = () =>  {
    return db;
}

module.exports = {
    connection
}
