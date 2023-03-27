//require filesystem para trabajar con archivos.
const fs = require('fs')

//Clase Product Manager
class ProductManager {

    //Funcion constructora para la creacion.
    constructor(path) {
        this.path = path
    }

    //id que solo se incrementa cuando se añade un producto.
    generateId = async () => {
        try {
            const products = await this.getProducts()
            return products.length + 1
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    }

    writeFile = async data => {
        try {
            await fs.promises.writeFile(this.path, JSON.stringify(data))
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    }

    //Metodo añadir producto
    addProduct = async product => {
        try {
            const products = this.getProducts
            let newProduct = { ...product, id: generateId }
            products.push(newProduct)
            await this.writeFile(products)
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    }

    //Metodo para obtener todos los productos
    getProducts = async () => {
        try {
            const products = await fs.promises.readFile(this.path, "utf-8")
            return JSON.parse(products)
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    }

    //Metodo para obtener un producto por el id.
    getProductById = async id => {
        try {
            const products = await this.getProducts()
            let productFounded = products.find(p => p.id === id)
            return productFounded ? productFounded : null
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    }

    deleteAllProducts = async () => {
        this.addProduct()
    }
}

module.exports = ProductManager