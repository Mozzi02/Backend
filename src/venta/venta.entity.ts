import { Entity, Property, ManyToOne, PrimaryKey, DateTimeType, OneToMany, Cascade, Collection} from '@mikro-orm/core';
import { Empleado } from '../empleado/empleado.entity.js';
import { Cliente } from '../cliente/cliente.entity.js';
import { LineaDeVenta } from '../lineadeventa/lineaDeVenta.entity.js';

@Entity()
export class Venta {
    @PrimaryKey()
    idVenta!: number

    @Property({nullable: false, type: DateTimeType})
    fechaVenta = new Date();

    @ManyToOne(() => Cliente, {nullable: false, unsigned: true})
    cliente!: Cliente

    @ManyToOne(() => Empleado, {nullable: false, unsigned: true})
    empleado!: Empleado

    @OneToMany(() => LineaDeVenta, lineaDeVenta => lineaDeVenta.venta, {cascade: [Cascade.ALL]})
    lineasDeVenta = new Collection<LineaDeVenta>(this);
}