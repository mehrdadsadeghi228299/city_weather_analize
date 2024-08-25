const cityController = require('./city.controller');

const router = require('express').Router();

router.get("/home",cityController.createCity);
router.get("/import",cityController.Addparamters);
router.get("/menu",cityController.menu);
router.get("/map",cityController.map);
router.get("/plot",cityController.plot);
router.get("/earts",cityController.earts);

/*router.get("/find-city/:city",Authorization,CheckRole('admin','updater'),cityController.findMyCityANDShow);
router.put("/add-paramter",Authorization,CheckRole('admin','updater','creator'),cityController.Addparamters);
router.get("/show-paramter",Authorization,CheckRole('admin','updater'),cityController.showParameters);
**/

module.exports = {
    
    CityRouter:router
};