const express = require('express');
const app= express();
const menus= require('./menus')

app.use(express.static('public'));

app.listen(3000,()=>{
    console.log('serve: on')
});

//index
app.get('/',(req, res)=>{
    res.render('index',{menus: menus})
})
//detalleMenu
app.get('/detalleMenu',(req, res)=>{
    res.render('detalleMenu',{menus: menus})
})

app.get('/detalleMenu/1',(req, res)=>{
    res.render('detalleMenu',{menus: menus[0]})
})

app.get('/detalleMenu/2',(req, res)=>{
    res.render('detalleMenu',{menus: menus[1]})
})

app.get('/detalleMenu/3',(req, res)=>{
    res.render('detalleMenu',{menus: menus[2]})
})

app.get('/detalleMenu/4',(req, res)=>{
    res.render('detalleMenu',{menus: menus[3]})
})

app.set('view engine', 'ejs');
app.set('views', './views/pages')