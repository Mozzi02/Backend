import { Entity, Property, ManyToOne, PrimaryKey, Rel} from '@mikro-orm/core';
import { Producto } from '../producto/producto.entity.js';
import { Venta } from '../venta/venta.entity.js';

@Entity()
export class LineaDeVenta {
    @PrimaryKey()
    idLineaVenta!: number

    @Property({nullable: false, unsigned: true})
    cantProducto!: number

    @ManyToOne(() => Producto, {nullable: false, unsigned: true})
    producto!: Rel<Producto>

    @ManyToOne(() => Venta, {nullable: false, unsigned: true})
    venta!: Rel<Venta>
}