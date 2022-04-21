var redis = require('redis');
var express = require('express');
var cors = require('cors');
var app = express();
var client = redis.createClient();
const taskRoutes = require('../server/task.routes');


app.use(express.json());
app.use(cors());
app.use(taskRoutes);

app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    });
});


/* client.on('connect',function() {
    console.log('Conectado');
})

client.on('error', function(err) {
    console.log(err)
}) */

/* client.set('key1', 'hola mundo1');

client.get('key1', function(err, value){
    console.log(value);
});

client.lpush('SW', 'luke', 'yoda', 'han solo', 'chewbacca');
client.lrange('SW', 0, -1, function(err, value){
    console.log(value)
    for(var i in value){
        console.log(value[i]);
    }
}); */


app.listen(3000);
console.log('Servidor conectado en puerto 3000');
