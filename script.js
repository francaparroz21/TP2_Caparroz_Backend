//require filesystem para trabajar con archivos.
const fs = require('fs')

//Clase Product Manager
class ProductManager {

    //Funcion constructora para la creacion.
    constructor(path) {
        this.path = path
        this.products = [];
    }

    //id que solo se incrementa cuando se añade un producto.
    static generateId = 1;

    writeFile = async data =>{
        try{
            await fs.promises.writeFile(this.path,JSON.stringify(data))
        }catch(error){
            console.log(`Error: ${error}`)
        }
    }

    //Metodo añadir producto
    addProduct = async product => {
        this.writeFile(product)
    }

    //Metodo para obtener todos los productos
    getProducts = async() => {
        try{
            const products = await fs.promises.readFile(this.path, 'utf-8')
            return JSON.parse(products)
        }catch(error){
            console.log(`Error: ${error}`)
        }
    }

    //Metodo para obtener un producto por el id.
    getProductById(id) {
        const productFounded =this.getProducts.find(product => product.id === id);
        if (productFounded) return productFounded
        return "Not Found."
    }

    deleteAllProducts = async() =>{
        this.addProduct()
    }
}

//Creamos el objeto Product Manager.
var productManager = new ProductManager("./products.txt")

//Agregamos un producto a la lista de productos de product manager.
const p1 = {
    title: "Alpine roses masksss",
    description: "mascaras para la cara",
    price: 2000,
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/bossyapp-54cf2.appspot.com/o/productsImages%2Fmask_alpineroses.png?alt=media&token=d84fd60e-e3bc-4d34-ba41-025bc3d6797f",
    code: "1S",
    stock: 5
}