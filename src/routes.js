const { AuthRouter } = require('./module/auth/auth.routes')
const { CityRouter} = require('./module/city/city.router')

const router = require('express').Router()

router.use(AuthRouter)
router.use(CityRouter)


module.exports ={
    AllRoutes:router
}