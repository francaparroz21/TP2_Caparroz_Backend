//Requerimos el archivo ProductManager.js para que podamos usar la clase.
const ProductManager = require('./ProductManager.js')
//Creamos el objeto que va a manipular todos los productos.
const productManager = new ProductManager("./products.txt")

//Funcion async para ejecutar todas las funciones que creamos en la clase.

const execute = async () => {
    //Printeamos array (vacio)
    console.log(await productManager.getProducts())

    //Añadimos un producto
    await productManager.addProduct({
        title: 'Alpine roses masksss',
        description: 'Mascara para la cara.',
        price: 2000,
        thumbnail: 'https://firebasestorage.googleapis.com/v0/b/bossyapp-54cf2.appspot.com/o/productsImages%2Fmask_alpineroses.png?alt=media&token=d84fd60e-e3bc-4d34-ba41-025bc3d6797f',
        code: '1S',
        stock: 5
    })

    //Añadimos otro producto.
    await productManager.addProduct({
        title: 'Caps cellu controll',
        description: 'Capsulas para bajar de peso.',
        price: 1000,
        thumbnail: 'https://firebasestorage.googleapis.com/v0/b/bossyapp-54cf2.appspot.com/o/productsImages%2Fcaps_cellucontrol.png?alt=media&token=a846b227-6902-44d8-8654-2db662d1c597',
        code: '1D',
        stock: 3
    })

    //Printeamos productos.
    console.log(await productManager.getProducts())

    //Muestra el producto con ID=2
     console.log(await productManager.getProductById(2))

    //Borra el producto con id 1.
    await productManager.deleteProduct(1)

    //Printeamos productos.
    console.log(await productManager.getProducts())

    //Actualizamos producto con ID 2.
    await productManager.updateProduct(2,{
        price: 1500,
        stock: 10
    })

    //Printeamos productos.
    console.log(await productManager.getProducts())

    //Borra todos los productos
    await productManager.deleteAllProducts()

    //Printeamos los productos ya borrados (vacio)
    console.log(await productManager.getProducts())
}

execute()