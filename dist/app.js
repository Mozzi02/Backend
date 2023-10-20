import express from 'express';
import { Producto } from './producto.js';
const app = express();
app.use(express.json());
const productos = [
    new Producto("1", "Campera de mozzi", 15000, 1, 10, "una url cualquiera"),
];
app.get('/api/productos', (req, res) => {
    res.json(productos);
});
app.get('/api/productos/:idProducto', (req, res) => {
    const producto = productos.find((producto) => producto.idProducto === req.params.idProducto);
    if (!producto) {
        res.status(404).send({ message: 'Producto not found' });
    }
    res.json(producto);
});
app.post('/api/productos', (req, res) => {
    const { idProducto, descripcion, precio, idTipo, stock, imagen } = req.body;
    const producto = new Producto(idProducto, descripcion, precio, idTipo, stock, imagen);
    productos.push(producto);
    res.status(201).send({ message: 'Producto created', data: producto });
});
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000/");
});
//# sourceMappingURL=app.js.map