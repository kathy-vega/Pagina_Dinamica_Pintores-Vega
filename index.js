const express =  requiere('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.render('index',{
        autor : 'Katherine Vega Vega',
        year : new Date().getFullYear(),
        title : 'Inicio'
    })
})

app.get('/vinVan', (req, res)=>{
    res.render('index',{
        autor : 'Katherine Vega Vega',
        year : new Date().getFullYear(),
        title : 'Inicio'
    })
})

app.get('/friKal', (req, res)=>{
    res.render('index',{
        autor : 'Katherine Vega Vega',
        year : new Date().getFullYear(),
        title : 'Inicio'
    })
})

app.get('/dieRiv', (req, res)=>{
    res.render('index',{
        autor : 'Katherine Vega Vega',
        year : new Date().getFullYear(),
        title : 'Inicio'
    })
})

app.get('/leoDav', (req, res)=>{
    res.render('index',{
        autor : 'Katherine Vega Vega',
        year : new Date().getFullYear(),
        title : 'Inicio'
    })
})

app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000');
});
