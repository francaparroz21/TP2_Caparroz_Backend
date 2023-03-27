//require filesystem para trabajar con archivos.
const fs = require('fs')

//Clase Product Manager
class ProductManager {

    //Funcion constructora para la creacion.
    constructor(path) {
        this.path = path
    }

    //id que solo se incrementa cuando se añade un producto.
    static generateId = 1;

    //Metodo añadir producto
    addProduct(product) {
        fs.writeFile
    }

    //Metodo para obtener todos los productos
    getProducts() {
        return this.products;
    }
    //Metodo para obtener un producto por el id.
    getProductById(id) {
        const productFounded = this.products.find(product => product.id === id);
        if(productFounded)return productFounded
        return "Not Found."
    }
}

//Creamos el objeto Product Manager.
var productManager = new ProductManager()

//Printeamos por consola el array vacio
console.log("Array vacio" + productManager.getProducts())

//Agregamos un producto a la lista de productos de product manager.
const p1 = {
    title: "Alpine roses mask",
    description: "mascaras para la cara",
    price: 2000,
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/bossyapp-54cf2.appspot.com/o/productsImages%2Fmask_alpineroses.png?alt=media&token=d84fd60e-e3bc-4d34-ba41-025bc3d6797f",
    code: "1S",
    stock: 5
}
productManager.addProduct(p1)

//Añadimos otro producto a product manager.
const p2 = {
    title: "Caps Cellu Control",
    description: "capsulas para bajar de peso",
    price: 1500,
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/bossyapp-54cf2.appspot.com/o/productsImages%2Fcaps_cellucontrol.png?alt=media&token=a846b227-6902-44d8-8654-2db662d1c597",
    code: "1F",
    stock: 2
}
productManager.addProduct(p2)

//Probamos añadir un producto con el mismo code que otro, pero con las otras propiedades diferentes
const p3 = {
    title: "asd",
    description: "asdd1",
    price: 500,
    thumbnail: "www.google.com",
    code: "1F",
    stock: 10
}
//Nos printea "Product already added."
console.log(productManager.addProduct(p3))

//Printeamos por consola el metodo getProducts que nos devuelve los productos ya cargados.
console.log(productManager.getProducts())

//Printeamos el producto buscado por su ID.
console.log("Producto buscado por su id: \n",productManager.getProductById(1))