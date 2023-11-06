import { Entity, Property, ManyToOne, PrimaryKey} from '@mikro-orm/core';
import { Categoria } from '../categoria/categoria.entity.js';

@Entity()
export class Cliente {
  @PrimaryKey()
  idCliente!: number

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
  cuit!: string

  @ManyToOne(() => Categoria, {nullable: false, unsigned: true})
  categoria!: Categoria
}