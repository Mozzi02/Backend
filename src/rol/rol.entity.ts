import { Entity, PrimaryKey, Property, OneToMany, Cascade, Collection } from '@mikro-orm/core';
import { Empleado } from '../empleado/empleado.entity.js';

@Entity()
export class Rol {
        @PrimaryKey()
        idRol!: number

        @Property({nullable: false})
        descripcion!: string

        @OneToMany(() => Empleado, empleado => empleado.rol, {cascade: [Cascade.ALL]})
        empleados = new Collection<Empleado>(this);
}