const { Router } = require('express');
const router = Router();

const { getDatoIndividual,
        setDatoIndividual,
        setPersonaje,
        deletePersonaje,
        getPersonajes
    } = require('./task.controllers')


// Rutas para peticiones a redis

// Rutas de prueba
/* router.get('/dato-individual/:id', getDatoIndividual);
router.post('/crear-dato/:id', setDatoIndividual); */


// Rutas para personajes

router.post('/agregarpersonaje/:ep/:nombre', setPersonaje);
router.delete('/eliminarpersonaje/:ep/:nombre', deletePersonaje);
router.get('/listarpersonajes/:ep', getPersonajes);

module.exports = router;