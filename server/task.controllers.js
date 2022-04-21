const redis = require('redis');
const client = redis.createClient();



client.on('connect',function() {
    console.log('Conectado');
})

client.on('error', function(err) {
    console.log(err)
})



// Funciones de prueba

/* const getDatoIndividual = async (req, res, next) =>{
    try {
        const { id } = req.params;
        
        client.get(id, (err, reply) =>{
            if(reply){
                console.log(reply);
                const result = reply;
                res.json(result);
            }
        });
        
    } catch (error) {
        next(error);
    }
}

const setDatoIndividual = async (req, res, next) =>{
    try {
        const { id } = req.params;

        client.set(`a${id}`, id, (err, reply) =>{
            if(reply){
                console.log(reply);
                const result = reply;
                res.json(result);
            }
        });
    } catch (error) {
        next(error);
    }
} */

const setPersonaje = async (req, res, next) =>{
    try {
        const { ep, nombre } = req.params;
        
        client.lpush(`EP${ep}`, nombre, (err, reply) =>{
            if(reply){
                console.log(reply);
                const result = reply;
                res.json(result);
            }
        });
    } catch (error) {
        next(error);
    }
}

const deletePersonaje = async (req, res, next) =>{
    try {
        const { ep, nombre } = req.params;
        
        client.lrem(`EP${ep}`, 1, nombre, (err, reply) =>{
            if(reply){
                console.log(reply);
                const result = reply;
                res.json(result);
            }
        });
    } catch (error) {
        next(error);
    }
}

const getPersonajes = async (req, res, next) =>{
    try {
        const { ep } = req.params;
        
        client.lrange(`EP${ep}`, 0, -1, (err, reply) =>{
            if(reply){
                console.log(reply);
                const result = reply;
                res.json(result);
            }
        });
        
    } catch (error) {
        next(error);
    }
}

module.exports = {
    setPersonaje,
    deletePersonaje,
    getPersonajes
}