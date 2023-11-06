import { Entity, Property, ManyToOne, PrimaryKey, OneToMany, Cascade, Collection } from '@mikro-orm/core';
import { Rol } from '../rol/rol.entity.js';
import { Pedido } from '../pedido/pedido.entity.js';

@Entity()
export class Empleado {
  @PrimaryKey()
  idEmpleado!: number

  @Property({nullable: false})
  nombre!: string

  @Property({nullable: false})
  apellido!: string

  @Property()
  telefono!: string

  @Property({nullable: false})
  email!: string

  @Property()
  direccion!: string

  @Property({nullable: false, unique: true})
  dni!: string

  @ManyToOne(() => Rol, {nullable: false, unsigned: true})
  rol!: Rol

  @Property({nullable: false})
  password!: string

  @OneToMany(() => Pedido, pedido => pedido.empleado, {cascade: [Cascade.ALL]})
  pedidos = new Collection<Pedido>(this);
}