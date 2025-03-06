const express = require('express');
const cors = require('cors');   


class Server {

    constructor(name, ip, port) {
        this.app = express();
        this.port = process.env.Port;

        //midedlewares
        this.middlewares();


        this.routes();
    }

    middlewares() {

        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
        
    }

    routes() {

        this.app.use('/api/user', require('../routes/user'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server corre en ${this.port}`)
        })
    }
}


module.exports = Server;