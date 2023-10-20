export class Producto {
  constructor (
    public idProducto: string,
    public descripcion: string,
    public precio: number,
    public idTipo: number,
    public stock: number,
    public imagen: string
  ) {}
}