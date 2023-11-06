import mysql from 'mysql2/promise';
export const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sistema_ventas_dsw'
});
//# sourceMappingURL=conn.mysql.js.map