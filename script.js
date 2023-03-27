const ProductManager = require('./ProductManager.js')

const productManager = new ProductManager("./products.txt")

const products = async () => console.log(await productManager.getProducts())
products()