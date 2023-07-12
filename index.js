class ProductManager {
    constructor() {
    this.products = [];
    }

    getProducts() {
    return this.products;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
    
    const existingProduct = this.products.find((product) => product.code === code);
    if (existingProduct) {
    throw new Error('El código del producto ya está en uso.');
    }

    
    const id = Date.now().toString();

    
    const newProduct = {
        id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
    };

    
    this.products.push(newProduct);


    return id;
    }

    getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
        throw new Error('Producto no encontrado.');
    }
    return product;
    }
}


const productManager = new ProductManager();


console.log(productManager.getProducts()); []


try {
    const productId = productManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);
    console.log('Producto agregado con ID:', productId);
} catch (error) {
    console.log('Error al agregar el producto:', error.message);
}


console.log(productManager.getProducts());


try {
    productManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);
} catch (error) {
    console.log('Error al agregar el producto:', error.message);
}


try {
    const productId = productManager.getProducts()[0].id; 
    const product = productManager.getProductById(productId);
    console.log('Producto encontrado:', product);
} catch (error) {
    console.log('Error al obtener el producto:', error.message);
}  