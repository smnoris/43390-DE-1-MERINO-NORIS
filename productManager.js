class ProductManager {
    constructor() {
        this.productos = [];
    }

    addProducto = (title, description, price, thumbnail, code, stock) => {
        const producto = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        const codeProducto = this.productos.find((producto) => producto.code === code);
        if (!codeProducto) {
            if (this.productos.length === 0) {
                producto.id = 1;
            } else {
                producto.id = this.productos[this.productos.length - 1].id + 1;
            }
            this.productos.push(producto);
        } else {
            return console.log("El código no puede repetirse");
        }
    };

    getProductos() {
        return console.log(this.productos);
    }

    getProductoById = (productoId) => {
        const idProducto = this.productos.find((producto) => producto.id === productoId);
        if (idProducto) {
            return console.log(idProducto);
        } else {
            return console.log("Not Found");
        }
    };
}

const producto = new ProductManager();

producto.addProducto(
    "Producto 1",
    "Tradicional 1",
    1500,
    "Sin imagen",
    "clase1",
    100
);

producto.addProducto(
    "Producto 2",
    "Tradicional 2",
    2000,
    "Sin imagen",
    "clase2",
    100
);

producto.addProducto(
    "Producto 3",
    "Digital 1",
    2500,
    "Sin imagen",
    "clase3",
    75
);

producto.addProducto(
    "Producto 4",
    "Digital 2",
    2500,
    "Sin imagen",
    "clase4",
    10
);

producto.getProductos();
producto.getProductoById(3);
producto.getProductoById(4);