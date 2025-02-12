const { response } = require('express');




const usuariosGet = (req, res = response) => {

    const query = req.query;

    res.json({
        msg: 'Get API - Controller',
        query
    })
}


const usuariosPost = (req, res = response) => {
    const body = req.body;
    res.json({
        msg: 'Get post - Controller',
        body
    })
}


const usuariosPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
        msg: 'Get API - Controller',
        id
    })
}


const usuariosDelete = (req, res = response) => {

    res.json({
        msg: 'Get API - Controller'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}
    