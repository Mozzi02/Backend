var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, Property, ManyToOne, PrimaryKey, OneToMany, Cascade, Collection } from '@mikro-orm/core';
import { Rol } from '../rol/rol.entity.js';
import { Pedido } from '../pedido/pedido.entity.js';
import { Venta } from '../venta/venta.entity.js';
let Empleado = class Empleado {
    constructor() {
        this.pedidos = new Collection(this);
        this.ventas = new Collection(this);
    }
};
__decorate([
    PrimaryKey(),
    __metadata("design:type", Number)
], Empleado.prototype, "idEmpleado", void 0);
__decorate([
    Property({ nullable: false }),
    __metadata("design:type", String)
], Empleado.prototype, "nombre", void 0);
__decorate([
    Property({ nullable: false }),
    __metadata("design:type", String)
], Empleado.prototype, "apellido", void 0);
__decorate([
    Property(),
    __metadata("design:type", String)
], Empleado.prototype, "telefono", void 0);
__decorate([
    Property({ nullable: false }),
    __metadata("design:type", String)
], Empleado.prototype, "email", void 0);
__decorate([
    Property(),
    __metadata("design:type", String)
], Empleado.prototype, "direccion", void 0);
__decorate([
    Property({ nullable: false, unique: true }),
    __metadata("design:type", String)
], Empleado.prototype, "dni", void 0);
__decorate([
    ManyToOne(() => Rol, { nullable: false, unsigned: true }),
    __metadata("design:type", Object)
], Empleado.prototype, "rol", void 0);
__decorate([
    Property({ nullable: false }),
    __metadata("design:type", String)
], Empleado.prototype, "password", void 0);
__decorate([
    OneToMany(() => Pedido, pedido => pedido.empleado, { cascade: [Cascade.ALL] }),
    __metadata("design:type", Object)
], Empleado.prototype, "pedidos", void 0);
__decorate([
    OneToMany(() => Venta, venta => venta.empleado, { cascade: [Cascade.ALL] }),
    __metadata("design:type", Object)
], Empleado.prototype, "ventas", void 0);
Empleado = __decorate([
    Entity()
], Empleado);
export { Empleado };
//# sourceMappingURL=empleado.entity.js.map