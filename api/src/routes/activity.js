const router = require('express').Router();
const { Sequelize } = require("sequelize");
const { Country, Activity } = require('../db');

router.post('/', async (req, res, next) =>{
    let { name, difficulty, duration, season, country, } = req.body
    console.log(req.body)
    try {
        let createActivity = await Activity.findOrCreate({
            where: {
                name,
                difficulty,
                duration,
                season
            }
        })
        let aux_country = await Country.findAll({
            include: { model: Activity },
            where: { name: { [Sequelize.Op.iLike]: `%${country}%` } }

        })
        console.log(createActivity, aux_country)
        await createActivity[0].setCountries(aux_country[0])
        res.json(createActivity)
    } catch (e) {
        res.status(404).send(e)
    }
})


module.exports = router;