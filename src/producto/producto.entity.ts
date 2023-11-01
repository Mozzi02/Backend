export class Producto {
  constructor (
    public idProducto: number,
    public descripcion: string,
    public precio: number,
    public idTipo: number,
    public stock: number,
    public imagen: string
  ) {}
}