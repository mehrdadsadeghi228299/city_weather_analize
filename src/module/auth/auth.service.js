const autoBind = require("auto-bind");
const createHttpError = require("http-errors");
const {AuthMessage} = require("./auth.messages");
const {randomInt} = require("crypto");
require("dotenv").config();
const jwt = require("jsonwebtoken");
class AuthService {
    #model;
    constructor () {
        autoBind(this);
       
    }
  
    async sendOTP (mobile) {
     
    }
    async checkOTP (mobile, code) {
     
    }
    async checkExistByMobile (mobile) {
     
    }
    signToken (payload) {
       // return jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn: "1y"});
    }
}
module.exports = new AuthService();