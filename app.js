const express = require('express');
const app= express();

app.use(express.static('public'));

app.listen(3000,()=>{
    console.log('serve: on')
});

//index
app.get('/',(req, res)=>{
    res.render('index')
})
//detalleMenu
app.get('/detalleMenu',(req, res)=>{
    res.render('detalleMenu')
})

app.set('view engine', 'ejs');
app.set('views', './views/pages')