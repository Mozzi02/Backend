var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, Property, ManyToOne, PrimaryKey, DateTimeType, OneToMany, Cascade, Collection } from '@mikro-orm/core';
import { Empleado } from '../empleado/empleado.entity.js';
import { Cliente } from '../cliente/cliente.entity.js';
import { LineaDeVenta } from '../lineadeventa/lineaDeVenta.entity.js';
let Venta = class Venta {
    constructor() {
        this.fechaVenta = new Date();
        this.lineasDeVenta = new Collection(this);
    }
};
__decorate([
    PrimaryKey(),
    __metadata("design:type", Number)
], Venta.prototype, "idVenta", void 0);
__decorate([
    Property({ nullable: false, type: DateTimeType }),
    __metadata("design:type", Object)
], Venta.prototype, "fechaVenta", void 0);
__decorate([
    ManyToOne(() => Cliente, { nullable: false, unsigned: true }),
    __metadata("design:type", Object)
], Venta.prototype, "cliente", void 0);
__decorate([
    ManyToOne(() => Empleado, { nullable: false, unsigned: true }),
    __metadata("design:type", Object)
], Venta.prototype, "empleado", void 0);
__decorate([
    OneToMany(() => LineaDeVenta, lineaDeVenta => lineaDeVenta.venta, { cascade: [Cascade.ALL] }),
    __metadata("design:type", Object)
], Venta.prototype, "lineasDeVenta", void 0);
Venta = __decorate([
    Entity()
], Venta);
export { Venta };
//# sourceMappingURL=venta.entity.js.map