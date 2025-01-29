import { Entity, Property, ManyToOne, PrimaryKey, DateTimeType, Rel} from '@mikro-orm/core';
import { Proveedor } from '../proveedor/proveedor.entity.js';
import { Empleado } from '../empleado/empleado.entity.js';
import { Producto } from '../producto/producto.entity.js';

@Entity()
export class Pedido {
    @PrimaryKey()
    idPedido!: number

    @Property({nullable: false, type: DateTimeType, columnType: 'datetime'})
    fechaPedido!: DateTimeType

    @Property({nullable: false, unsigned: true})
    cantidad!: number

    @Property({nullable: false, unsigned: true})
    estado!: string

    @ManyToOne(() => Proveedor, {nullable: false, unsigned: true})
    proveedor!: Rel<Proveedor>

    @ManyToOne(() => Empleado, {nullable: false, unsigned: true})
    empleado!: Rel<Empleado>

    @ManyToOne(() => Producto, {nullable: false, unsigned: true})
    producto!: Rel<Producto>
}