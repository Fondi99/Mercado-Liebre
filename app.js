const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname,'./public')));

//Abro servidor
app.listen(3030,()=>
    console.log("Servidor abierto en el puerto 3030.")
);

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});

app.route('/register')
    .get((req, res) => {
        res.sendFile(path.resolve(__dirname, './views/register.html'));
    })
    .post((req, res) => {
        res.sendFile(path.resolve(__dirname, './views/register.html'));
    })

app.route('/login')
    .get((req, res) => {
        res.sendFile(path.resolve(__dirname, './views/login.html'));
    })
    .post((req, res) => {
        res.sendFile(path.resolve(__dirname, './views/login.html'));
    })