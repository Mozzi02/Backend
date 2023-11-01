import { pool } from "../shared/db/conn.mysql.js";
export class ProductoRepository {
    async findAll() {
        const [productos] = await pool.query('select * from producto');
        return productos;
    }
    async findOne(item) {
        const idProducto = Number.parseInt(item.idProducto);
        const [productos] = await pool.query('select * from producto p where p.idProducto = ?', [idProducto]);
        if (productos.length === 0) {
            return undefined;
        }
        const producto = productos[0];
        return producto;
    }
    add(item) {
        throw new Error('not implemented');
    }
    update(item) {
        throw new Error('not implemented');
    }
    delete(item) {
        throw new Error('not implemented');
    }
}
//# sourceMappingURL=producto.repository.js.map