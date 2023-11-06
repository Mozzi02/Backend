import { Entity, PrimaryKey, Property, OneToMany, Cascade, Collection } from '@mikro-orm/core';
import { Cliente } from '../cliente/cliente.entity.js';

@Entity()
export class Categoria {
        @PrimaryKey()
        idCategoria!: number

        @Property({nullable: false})
        descripcion!: string

        @OneToMany(() => Cliente, cliente => cliente.categoria, {cascade: [Cascade.ALL]})
        clientes = new Collection<Cliente>(this);
}