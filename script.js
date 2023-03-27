//Requerimos el archivo ProductManager.js para que podamos usar la clase.
const ProductManager = require('./ProductManager.js')
//Creamos el objeto que va a manipular todos los productos.
const productManager = new ProductManager("./products.txt")

//Funcion async para ejecutar todas las funciones que creamos en la clase.

const execute = async () => {
    console.log(await productManager.getProducts())

    //Guardamos otro product en el archivo products.txt
    // await productManager.addProduct({
    //     title: "Caps cellu control",
    //     description: "Capsulas para bajar de peso",
    //     price: 3000,
    //     thumbnail: "https://firebasestorage.googleapis.com/v0/b/bossyapp-54cf2.appspot.com/o/productsImages%2Fcaps_cellucontrol.png?alt=media&token=a846b227-6902-44d8-8654-2db662d1c597",
    //     code: "4F",
    //     stock: 3
    // })

    //Muestra el producto con ID=2
    console.log(await productManager.getProductById(2))

    //Borra el producto con id 3.
    await productManager.deleteProduct(2)

    //Borra todos los productos
    // await productManager.deleteAllProducts()
    //Muestra todos los productos ya borrados.
    console.log(await productManager.getProducts())
}

execute()