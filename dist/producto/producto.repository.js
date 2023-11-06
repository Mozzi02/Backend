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
    async add(productoInput) {
        const { idProducto, ...productoRow } = productoInput;
        const [result] = await pool.query('insert into producto set ?', [productoRow]);
        productoInput.idProducto = result.insertId;
        return productoInput;
    }
    async update(productoInput) {
        const { idProducto, ...productoRow } = productoInput;
        const idProductoStr = idProducto.toString();
        await pool.query('update producto set ? where idProducto = ?', [productoRow, idProducto]);
        return await this.findOne({ idProducto: idProductoStr });
    }
    async delete(item) {
        try {
            const productoABorrar = await this.findOne(item);
            const idProducto = Number.parseInt(item.idProducto);
            await pool.query('delete from producto where idProducto = ?', [idProducto]);
            return productoABorrar;
        }
        catch (error) {
            throw new Error('unable to delete producto');
        }
    }
}
//# sourceMappingURL=producto.repository.js.map