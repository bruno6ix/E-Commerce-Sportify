// ACÁ HAY QUE TRAER DE LA BD DE TODOS LOS PRODUCTOS Y HACER UN RES.JSON PARA VER SOLO EL JSON DEL MISMO
const db = require('../../dataBase/models')

const apiProductsController = {
    list: (req, res) => {
        db.Product
        .findAll()
        .then(products =>{
            return res.json({
                meta:{url: "api/products"},
                total: movies.length,
                data: movies
            })
        })
    }
}