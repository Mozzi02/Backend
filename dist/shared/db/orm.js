import { MikroORM } from "@mikro-orm/core";
import { SqlHighlighter } from "@mikro-orm/sql-highlighter";
import { Proveedor } from '../../proveedor/proveedor.entity.js';
import { Rol } from '../../rol/rol.entity.js';
import { Empleado } from '../../empleado/empleado.entity.js';
import { TipoProducto } from '../../tipoProducto/tipoProducto.entity.js';
import { Producto } from '../../producto/producto.entity.js';
import { Pedido } from '../../pedido/pedido.entity.js';
import { Categoria } from '../../categoria/categoria.entity.js';
import { Cliente } from '../../cliente/cliente.entity.js';
import { LineaDeVenta } from '../../lineadeventa/lineaDeVenta.entity.js';
import { Venta } from '../../venta/venta.entity.js'; // Agregado el import de Venta
export const orm = await MikroORM.init({
    entities: [
        Proveedor,
        Rol,
        Empleado,
        TipoProducto,
        Producto,
        Pedido,
        Venta,
        Categoria,
        Cliente,
        LineaDeVenta,
    ],
    dbName: 'sistema_ventas_dsw',
    type: 'mysql',
    clientUrl: 'mysql://root:root@localhost:3306/sistema_ventas_dsw',
    highlighter: new SqlHighlighter(),
    debug: true,
    schemaGenerator: {
        disableForeignKeys: true,
        createForeignKeyConstraints: true,
        ignoreSchema: []
    }
});
console.log("Mikro-ORM se ha inicializado correctamente");
export const syncSchema = async () => {
    console.log("Comenzando la actualización del esquema");
    const generator = orm.getSchemaGenerator();
    await generator.updateSchema();
    console.log("La actualización del esquema ha finalizado");
};
//# sourceMappingURL=orm.js.map