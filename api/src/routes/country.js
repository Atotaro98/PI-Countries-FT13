const router = require('express').Router();
const { Sequelize } = require("sequelize");
const { Country, Activity} = require('../db');

router.get('/', async (req, res) =>{
    
    let {page, name} = req.query
    try{
        if(page  === "all"){
            let countries = await Country.findAll({
                include:{model: Activity},
            })
            return countries ? res.json(countries) : res.sendStatus(404)
        }

        if(page  === "AtoZ"){
            return res.json(await Country.findAll({
                order: [['name', 'ASC']],
                include: {model: Activity,},
                // limit: 10,
                // offset: 10 * (page - 1)
            }))
        }
        if(page  === "ZtoA"){
            return res.json(await Country.findAll({
                order: [['name', 'DESC']],
                include: {model: Activity,},
                // limit: 10,
                // offset: 10 * (page - 1)
            }))
        }
        if(page  === "pobAsc"){
            return res.json(await Country.findAll({
                order: [['population', 'ASC']],
                include: {model: Activity,},
                // limit: 10,
                // offset: 10 * (page - 1)
            }))
        }
        if(page  === "pobDes"){
            return res.json(await Country.findAll({
                order: [['population', 'DESC']],
                include: {model: Activity,},
                // limit: 10,
                // offset: 10 * (page - 1)
            }))
        }
        if(page){
            return res.json(await Country.findAll({
                include: { model: Activity },
                // limit: 10,
                // offset: 10 * (page - 1)
            }))
        }
        
        if (name) {
            let country = await Country.findAll({
                include: { model: Activity },
                where: { name: { [Sequelize.Op.iLike]: `%${name}%` } }
            })
            return country ? res.json(country) : res.sendStatus(404)
        }
        
    }catch (e){res.status(404).send(e)}
})


router.get('/:id', async function (req, res) {
    try {
        let { id } = req.params
        let country = await Country.findByPk( id.toUpperCase(), { include: { model: Activity } })
        res.json(country);
    } catch (e) {res.status(404).send(e)}
})








module.exports = router;




// if (page) {

        //     switch (sort) {
        //         case "AtoZ":
        //             return res.json(await Country.findAll({
        //                 order: [['name', 'ASC']],
        //                 include: {model: Activity,},
        //                 limit: 10,
        //                 offset: 10 * (page - 1)
        //             }))
        //         case "ZtoA":
        //             return res.json(await Country.findAll({
        //                 order: [['name', 'DESC']],
        //                 include: { model: Activity},
        //                 limit: 10,
        //                 offset: 10 * (page - 1)
        //             }))
        //         case "pobAsc":
        //             return res.json(await Country.findAll({
        //                 order: [['population', 'ASC']],
        //                 include: {model: Activity},
        //                 limit: 10,
        //                 offset: 10 * (page - 1)
        //             }))
        //         case "pobDes":
        //             return res.json(await Country.findAll({
        //                 order: [['population', 'DESC']],
        //                 include: {model: Activity},
        //                 limit: 10,
        //                 offset: 10 * (page - 1)
        //             }))

        //         default:
        //             return res.json(await Country.findAll({
        //                 include: { model: Activity },
        //                 limit: 10,
        //                 offset: 10 * (page - 1)
        //             }))
        //     }
        // }