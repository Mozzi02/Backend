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
import { Categoria } from '../categoria/categoria.entity.js';
import { Venta } from '../venta/venta.entity.js';
let Cliente = class Cliente {
    constructor() {
        this.ventas = new Collection(this);
    }
};
__decorate([
    PrimaryKey(),
    __metadata("design:type", Number)
], Cliente.prototype, "idCliente", void 0);
__decorate([
    Property({ nullable: false }),
    __metadata("design:type", String)
], Cliente.prototype, "nombre", void 0);
__decorate([
    Property({ nullable: false }),
    __metadata("design:type", String)
], Cliente.prototype, "apellido", void 0);
__decorate([
    Property(),
    __metadata("design:type", String)
], Cliente.prototype, "telefono", void 0);
__decorate([
    Property({ nullable: false }),
    __metadata("design:type", String)
], Cliente.prototype, "email", void 0);
__decorate([
    Property(),
    __metadata("design:type", String)
], Cliente.prototype, "direccion", void 0);
__decorate([
    Property({ nullable: false, unique: true }),
    __metadata("design:type", String)
], Cliente.prototype, "cuit", void 0);
__decorate([
    ManyToOne(() => Categoria, { nullable: false, unsigned: true }),
    __metadata("design:type", Object)
], Cliente.prototype, "categoria", void 0);
__decorate([
    OneToMany(() => Venta, venta => venta.cliente, { cascade: [Cascade.ALL] }),
    __metadata("design:type", Object)
], Cliente.prototype, "ventas", void 0);
Cliente = __decorate([
    Entity()
], Cliente);
export { Cliente };
//# sourceMappingURL=cliente.entity.js.map