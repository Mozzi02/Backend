import { Entity, Property, ManyToOne, PrimaryKey, OneToMany, Cascade, Collection} from '@mikro-orm/core';
import { TipoProducto } from '../tipoProducto/tipoProducto.entity.js';
import { Pedido } from '../pedido/pedido.entity.js';

@Entity()
export class Producto {
  @PrimaryKey()
  idProducto!: number

  @Property({nullable: false})
  descripcion!: string

  @Property({nullable: false, unsigned: true})
  precio!: number

  @ManyToOne(() => TipoProducto, {nullable: false, unsigned: true})
  tipoProducto!: TipoProducto

  @Property({nullable: false, unsigned: true})
  stock!: number

  @Property({nullable: false})
  imagen!: string

  @OneToMany(() => Pedido, pedido => pedido.producto, {cascade: [Cascade.ALL]})
  pedidos = new Collection<Pedido>(this);
}