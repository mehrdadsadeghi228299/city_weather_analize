const autoBind = require("auto-bind");
const HttpCodes = require("http-codes");
const createHttpError = require("http-errors");
const cityService = require("./city.service");
const { validationResult } = require("express-validator");
const { HttpStatusCode } = require("axios");
const { CityMessage } = require("./city.message");
class CityController {
    #service;
    constructor () {
        autoBind(this);
        this.#service = cityService;
    }
    async createCity(req, res, next) {
        const city = req.query.city;
    
        // Mock weather data, replace this with actual API call
        const weather = {
            city: city,
            temperature: 25,
            description: 'Sunny'
        };
    
        res.render('paramter.ejs', { weather });
    }
    

    async findMyCityANDShow(req, res, next) {
       try {
        const city=req.params.city;
        const result = await this.#service.findMyCityANDShow(city);
        return res.json({
            message : CityMessage.Created,
            result : result

           });
       } catch (error) {
        next(error);
       }
    }
    async Addparamters(req, res, next) {
        const city = req.query.city;
    
        // Mock weather data, replace this with actual API call
        const weather = {
            city: city,
        
        };
    
        res.render('input.ejs', { weather });
    }
    async menu(req,res,next){
        res.render('menu.ejs');
    }
    async map(req,res,next){
        res.render('map.ejs');
    }
    async plot(req,res,next){
        res.render('plot.ejs');
    }
    async earts(req,res,next){
        res.render('earts.ejs');
    }
    async showParameters(req, res, next) {
        try {
            const city=req.body.city;
            const result = await this.#service.showParameters(city);
            return res.json({
                message : CityMessage.RequestOK,
                result : result
    
               });
        } catch (error) {
            next(error)
        }
    }
    async postCity(req, res, next) {
        try {
            
        } catch(error) {
            next(error)
        }
    }
}

module.exports = new CityController();