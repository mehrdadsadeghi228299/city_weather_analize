const cityController = require('./city.controller');

const router = require('express').Router();

router.get("/city",cityController.createCity);
router.get("/add-paramter",cityController.Addparamters);

/*router.get("/find-city/:city",Authorization,CheckRole('admin','updater'),cityController.findMyCityANDShow);
router.put("/add-paramter",Authorization,CheckRole('admin','updater','creator'),cityController.Addparamters);
router.get("/show-paramter",Authorization,CheckRole('admin','updater'),cityController.showParameters);
**/

module.exports = {
    
    CityRouter:router
};