import 'reflect-metadata';
import express from 'express';
import { productoRouter } from './producto/producto.routes.js';
import { orm, syncSchema } from './shared/db/orm.js';
import { RequestContext } from '@mikro-orm/core';
import { tipoProductoRouter } from './tipoProducto/tipoProducto.routes.js';
import { rolRouter } from './rol/rol.routes.js';
import { categoriaRouter } from './categoria/categoria.routes.js';
import { proveedorRouter } from './proveedor/proveedor.routes.js';
import { clienteRoutes } from './cliente/cliente.routes.js';
import { empleadoRoutes } from './empleado/empleado.routes.js';
import { lineaDeVentaRoutes } from './lineadeventa/lineaDeVenta.routes.js';
import { pedidoRoutes } from './pedido/pedido.routes.js';
import { ventaRoutes } from './venta/venta.routes.js';
import cors from 'cors';
import { authRoutes } from './auth/auth.routes.js';
import { PORT } from './config.js';
import swaggerUI from 'swagger-ui-express';
import specs from './swagger/swagger.js';

const app = express();
app.use(express.json());
app.use(cors())

app.use((req, res, next) => {
  RequestContext.create(orm.em, next)
})

app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(specs))

app.use('/api/productos', productoRouter)
app.use('/api/tipos-producto', tipoProductoRouter)
app.use('/api/categorias', categoriaRouter)
app.use('/api/roles', rolRouter)
app.use('/api/proveedores', proveedorRouter)
app.use('/api/clientes', clienteRoutes)
app.use('/api/empleados', empleadoRoutes)
app.use('/api/lineas', lineaDeVentaRoutes)
app.use('/api/pedidos', pedidoRoutes)
app.use('/api/ventas', ventaRoutes)
app.use('/api/login', authRoutes)


app.use((_, res) => {
  res.status(404).send({message: 'Resource not found'});
})


await syncSchema();


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});