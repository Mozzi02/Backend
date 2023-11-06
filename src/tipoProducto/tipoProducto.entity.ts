import { Entity, PrimaryKey, Property, OneToMany, Cascade, Collection } from '@mikro-orm/core';
import { Producto } from '../producto/producto.entity.js';

@Entity()
export class TipoProducto {
        @PrimaryKey()
        idTipo!: number

        @Property({nullable: false})
        descripcion!: string

        @OneToMany(() => Producto, producto => producto.tipoProducto, {cascade: [Cascade.ALL]})
        productos = new Collection<Producto>(this);
}