import { Entity, PrimaryKey, Property, OneToMany, Cascade, Collection } from '@mikro-orm/core';
import { Pedido } from '../pedido/pedido.entity.js';

@Entity()
export class Proveedor {
    @PrimaryKey()
    idProveedor!: number

    @Property({nullable: false, unique: true})
    cuit!: string

    @Property({nullable: false})
    razonSocial!: string

    @Property({nullable: false})
    telefono!: string

    @Property()
    email!: string

    @OneToMany(() => Pedido, pedido => pedido.proveedor, {cascade: [Cascade.ALL]})
    pedidos = new Collection<Pedido>(this);
}