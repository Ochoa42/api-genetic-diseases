// 1. Importar express
const express = require('express');

// 2. crearnos una constante app que tendra
// todas las funcionalidades de express

const app = express();

//creamos el middelware
app.use(express.json()); // permite obtener el body en formato json
app.use(express.urlencoded({extended:true})); // permite obtener el body en formato url-encode


//definicion de funciones
const findAll = (req,res) => {
    return res.status(200).json({
        message: 'method get - findAll'
    })
}

const create = (req,res) => {

    const disease = req.body;
    return res.status(200).json({
        message: 'method get - findAll',
        data: disease
    })
}

const findOne = (req,res) => {
    console.log(req.params)
    return res.status(200).json({
        message: 'method get - findOne',
        id: req.params.id
    })
}


const update = (req,res) => {
    const { id } = req.params;

    return res.status(200).json({
        message: 'method patch - update',
        id: id
    })
}


const methDelete = (req,res) => {
    const { id } = req.params;

    return res.status(200).json({
        message: 'method delete - delete',
        id: id
    })
}




// 3. Definir el endpoint
// endpoint para todas las enfermedades geneticas
app.get('/api/v1/genetic-diseases', findAll)


// enpoint para crear una enfermedad genetica
app.post('/api/v1/genetic-diseases', create)



// endpint para buscar UNA enfermedad genetica
app.get('/api/v1/genetic-diseases/:id', findOne)




// endpoint para actualizar UNA enfermedad generica
app.patch('/api/v1/genetic-diseases/:id',update)




// endpoint para delete UNA enfermedad generica
app.delete('/api/v1/genetic-diseases/:id',methDelete)













// 4. Poner a escuchar el servidor por un puerto

app.listen(3000, ()  => {
    console.log("Server Running on port: " + 3000) 
})