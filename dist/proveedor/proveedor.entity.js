var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryKey, Property, OneToMany, Cascade, Collection } from '@mikro-orm/core';
import { Pedido } from '../pedido/pedido.entity.js';
let Proveedor = class Proveedor {
    constructor() {
        this.pedidos = new Collection(this);
    }
};
__decorate([
    PrimaryKey(),
    __metadata("design:type", Number)
], Proveedor.prototype, "idProveedor", void 0);
__decorate([
    Property({ nullable: false, unique: true }),
    __metadata("design:type", String)
], Proveedor.prototype, "cuit", void 0);
__decorate([
    Property({ nullable: false }),
    __metadata("design:type", String)
], Proveedor.prototype, "razonSocial", void 0);
__decorate([
    Property({ nullable: false }),
    __metadata("design:type", String)
], Proveedor.prototype, "telefono", void 0);
__decorate([
    Property(),
    __metadata("design:type", String)
], Proveedor.prototype, "email", void 0);
__decorate([
    OneToMany(() => Pedido, pedido => pedido.proveedor, { cascade: [Cascade.ALL] }),
    __metadata("design:type", Object)
], Proveedor.prototype, "pedidos", void 0);
Proveedor = __decorate([
    Entity()
], Proveedor);
export { Proveedor };
//# sourceMappingURL=proveedor.entity.js.map