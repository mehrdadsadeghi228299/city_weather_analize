const express = require('express');
const dotenv  =require('dotenv');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const ejs=require('ejs');
const expressEjsLayouts = require('express-ejs-layouts');
const { NotFoundHandler } = require('./src/common/exception/not-found.handler');
const { AllExceptionHandler } = require('./src/common/exception/all-exception.handler');
const { AllRoutes } = require('./src/routes');
const SwaggerConfig = require('./src/config/swagger.config');
const bodyParser = require('body-parser');
const path=require('path');
dotenv.config();
require('dotenv').config();
const port=process.env.PORT; 
const url=process.env.URL; 
const cookiesecretekey=process.env.cookiesecretekey;
async function main(){
    const app = express();
   // require('./src/config/mongoose.config');
    SwaggerConfig(app);
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser(cookiesecretekey));
    //app.set(express.static("public"));
    app.set("view engine", "ejs");
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(AllRoutes);
    app.use(morgan("dev"));
    NotFoundHandler(app);
    AllExceptionHandler(app);
    app.listen(port,url,()=>{
        console.log(`server is running on: ${url}:${port}`);
    });
}

main();