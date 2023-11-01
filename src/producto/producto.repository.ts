import { Repository } from "../shared/repository.js";
import { Producto } from "./producto.entity.js";
import { pool } from "../shared/db/conn.mysql.js";
import { RowDataPacket } from "mysql2";


export class ProductoRepository implements Repository<Producto> {
  public async findAll(): Promise<Producto[] | undefined> {
    const [productos] = await pool.query('select * from producto')
    return (productos as Producto[])
  }


  public async findOne(item: { idProducto: string; }): Promise<Producto | undefined> {
    const idProducto = Number.parseInt(item.idProducto);
    const [productos] = await pool.query<RowDataPacket[]>('select * from producto p where p.idProducto = ?', [idProducto]);
    if (productos.length === 0){
      return undefined
    }
    const producto = productos[0] as Producto;
    return producto
  }


  public add(item: Producto): Promise<Producto | undefined> {
    throw new Error('not implemented');
  }


  public update(item: Producto): Promise<Producto | undefined> {
    throw new Error('not implemented');
  }


  public delete(item: { id: string; }): Promise<Producto | undefined> {
    throw new Error('not implemented');
  }
}