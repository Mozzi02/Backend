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
import { TipoProducto } from '../tipoProducto/tipoProducto.entity.js';
import { Pedido } from '../pedido/pedido.entity.js';
let Producto = class Producto {
    constructor() {
        this.pedidos = new Collection(this);
    }
};
__decorate([
    PrimaryKey(),
    __metadata("design:type", Number)
], Producto.prototype, "idProducto", void 0);
__decorate([
    Property({ nullable: false }),
    __metadata("design:type", String)
], Producto.prototype, "descripcion", void 0);
__decorate([
    Property({ nullable: false, unsigned: true }),
    __metadata("design:type", Number)
], Producto.prototype, "precio", void 0);
__decorate([
    ManyToOne(() => TipoProducto, { nullable: false, unsigned: true }),
    __metadata("design:type", Object)
], Producto.prototype, "tipoProducto", void 0);
__decorate([
    Property({ nullable: false, unsigned: true }),
    __metadata("design:type", Number)
], Producto.prototype, "stock", void 0);
__decorate([
    Property({ nullable: false }),
    __metadata("design:type", String)
], Producto.prototype, "imagen", void 0);
__decorate([
    OneToMany(() => Pedido, pedido => pedido.producto, { cascade: [Cascade.ALL] }),
    __metadata("design:type", Object)
], Producto.prototype, "pedidos", void 0);
Producto = __decorate([
    Entity()
], Producto);
export { Producto };
//# sourceMappingURL=producto.entity.js.map