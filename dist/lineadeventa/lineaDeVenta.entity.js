var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, Property, ManyToOne, PrimaryKey } from '@mikro-orm/core';
import { Producto } from '../producto/producto.entity.js';
import { Venta } from '../venta/venta.entity.js';
let LineaDeVenta = class LineaDeVenta {
};
__decorate([
    PrimaryKey(),
    __metadata("design:type", Number)
], LineaDeVenta.prototype, "idLineaVenta", void 0);
__decorate([
    Property({ nullable: false, unsigned: true }),
    __metadata("design:type", Number)
], LineaDeVenta.prototype, "cantidad", void 0);
__decorate([
    ManyToOne(() => Producto, { nullable: false, unsigned: true }),
    __metadata("design:type", Object)
], LineaDeVenta.prototype, "producto", void 0);
__decorate([
    ManyToOne(() => Venta, { nullable: false, unsigned: true }),
    __metadata("design:type", Object)
], LineaDeVenta.prototype, "venta", void 0);
LineaDeVenta = __decorate([
    Entity()
], LineaDeVenta);
export { LineaDeVenta };
//# sourceMappingURL=lineaDeVenta.entity.js.map