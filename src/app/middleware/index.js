import express from 'express';
import morgan from 'morgan';
import methodOverride from 'method-override';

function middleWare(app) {
    //HTTP logger
    app.use(morgan('combined'));
    
    //Config static assets file
    app.use(express.static('./src/public'));
    
    //Middleware parse coming request with urlencoded 
    app.use(express.urlencoded({
         extended: true
    }))
    //Middleware parse coming request with json 
    app.use(express.json())
    
    //method-override
    app.use(methodOverride('_method'))
}

export default middleWare;
