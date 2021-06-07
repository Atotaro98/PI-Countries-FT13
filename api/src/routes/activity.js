const router = require('express').Router();
const { sequelize } = require("sequelize");
const { Country, Activity, Season } = require('../db');

router.get('/', async (req, res, next) =>{
    return  res.send.console.log('hola')
})








module.exports = router;