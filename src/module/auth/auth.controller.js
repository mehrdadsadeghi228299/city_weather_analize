const CookieNames = require("../../common/constant/cookie.enum");
const NodeEnv = require("../../common/constant/env.enum");
const autoBind = require("auto-bind");
const authService = require("./auth.service");
const { AuthMessage } = require("./auth.messages");
class AuthController {
    #service;
    constructor(){
        autoBind(this);
        this.#service = authService;
    }
    async login(req, res, next) {
       res.render('login.ejs',{
        test:"login"
       });
    }
    async sendOTP(req, res, next) {
 
    }
    async checkOTP(req, res, next) {
    
    }
    async logout(req, res, next) {
     
    }
}

module.exports = {
    AuthController:new AuthController()
}