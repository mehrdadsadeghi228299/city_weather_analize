const {Router} = require("express");
const { AuthController } = require("./auth.controller");
const router = Router();
//router.post("/send-otp", AuthController.sendOTP);
router.get("/login", AuthController.login);
//router.post("/check-otp", AuthController.checkOTP);
//router.get("/logout", Authorization, AuthController.logout);
module.exports = {
    AuthRouter: router
}