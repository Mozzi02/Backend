import 'reflect-metadata';
import express from 'express';
import { productoRouter } from './producto/producto.routes.js';
import { orm, syncSchema } from './shared/db/orm.js';
import { RequestContext } from '@mikro-orm/core';
import { tipoProductoRouter } from './tipoProducto/tipoProducto.routes.js';
const app = express();
app.use(express.json());
app.use((req, res, next) => {
    RequestContext.create(orm.em, next);
});
app.use('/api/productos', productoRouter);
app.use('/api/productos/tipos', tipoProductoRouter);
app.use((_, res) => {
    res.status(404).send({ message: 'Resource not found' });
});
await syncSchema();
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000/");
});
//# sourceMappingURL=app.js.map