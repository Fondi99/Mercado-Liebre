const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname,'./public')));

//Abro servidor
app.listen(3030,()=>
    console.log("Servidor abierto en el puerto 3030.")
);

//Pagina principal
app.get('/', (req, res) => {
    res.send("Pagina principal")
});

app.get('/home',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});