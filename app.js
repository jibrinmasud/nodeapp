const express = require('express');

// express app
const app = express();

// const ej s = require('ejs');

//register view engin
app.set('view engin', 'ejs');

// listen for request

app.listen(3000);

app.get('/', (req, res) =>{
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index.ejs', {title: 'Home', blogs});
});

app.get('/about', (req, res) =>{
    res.render('about.ejs', {title: 'About'});
});

app.get('/blogs/create', (req, res) =>{
    res.render('create.ejs' , {title: 'New Blog'});
});
//404 page
app.use((req, res) =>{
    res.status(404).render('404.ejs', {title: '404'})
});
