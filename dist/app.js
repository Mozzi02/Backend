import express from 'express';
import { productoRouter } from './producto/producto.routes.js';
const app = express();
app.use(express.json());
app.use('/api/productos', productoRouter);
app.use((req, res) => {
    res.status(404).send({ message: 'Resource not found' });
});
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000/");
});
//# sourceMappingURL=app.js.map