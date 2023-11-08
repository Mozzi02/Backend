var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, Property, ManyToOne, PrimaryKey, DateTimeType } from '@mikro-orm/core';
import { Proveedor } from '../proveedor/proveedor.entity.js';
import { Empleado } from '../empleado/empleado.entity.js';
import { Producto } from '../producto/producto.entity.js';
let Pedido = class Pedido {
    constructor() {
        this.fechaPedido = new Date();
    }
};
__decorate([
    PrimaryKey(),
    __metadata("design:type", Number)
], Pedido.prototype, "idPedido", void 0);
__decorate([
    Property({ nullable: false, type: DateTimeType }),
    __metadata("design:type", Object)
], Pedido.prototype, "fechaPedido", void 0);
__decorate([
    Property({ nullable: false, unsigned: true }),
    __metadata("design:type", Number)
], Pedido.prototype, "cantidad", void 0);
__decorate([
    ManyToOne(() => Proveedor, { nullable: false, unsigned: true }),
    __metadata("design:type", Object)
], Pedido.prototype, "proveedor", void 0);
__decorate([
    ManyToOne(() => Empleado, { nullable: false, unsigned: true }),
    __metadata("design:type", Object)
], Pedido.prototype, "empleado", void 0);
__decorate([
    ManyToOne(() => Producto, { nullable: false, unsigned: true }),
    __metadata("design:type", Object)
], Pedido.prototype, "producto", void 0);
Pedido = __decorate([
    Entity()
], Pedido);
export { Pedido };
//# sourceMappingURL=pedido.entity.js.map