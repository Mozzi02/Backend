function sanitizeProductoInput(req, res, next) {
    req.body.sanitizedInput = {
        idProducto: req.body.idProducto,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        idTipo: req.body.idTipo,
        stock: req.body.stock,
        imagen: req.body.imagen
    };
    Object.keys(req.body.sanitizedInput).forEach(key => {
        if (req.body.sanitizedInput[key] === undefined) {
            delete req.body.sanitizedInput[key];
        }
    });
    next();
}
;
async function findAll(req, res) {
    res.status(500).json({ message: 'not implemented' });
}
;
async function findOne(req, res) {
    res.status(500).json({ message: 'not implemented' });
}
async function add(req, res) {
    res.status(500).json({ message: 'not implemented' });
}
;
async function update(req, res) {
    res.status(500).json({ message: 'not implemented' });
}
;
async function remove(req, res) {
    res.status(500).json({ message: 'not implemented' });
}
export { sanitizeProductoInput, findAll, findOne, add, update, remove };
//# sourceMappingURL=producto.controler.js.map