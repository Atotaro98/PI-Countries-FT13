const router = require('express').Router();
const { Sequelize } = require("sequelize");
const { Countries, Activities} = require('../db');

router.get("/", async (req, res) => {
    let { name, page, sort } = req.query
    try {
        if(page==="all"){
            let country = await Countries.findAll({
                include: { model: Activities },
                limit: 10,
                offset: 10 * (page - 1)
            })
            return country ? res.json(country) : res.sendStatus(404)
        }
        if (page) {     
                    switch (sort) {
                        case "AtoZ":
                            return res.json(await Countries.findAll({
                                order: [['name', 'ASC']],
                                include: {model: Activities,},
                                limit: 10,
                                offset: 10 * (page - 1)
                            }))
                        case "ZtoA":
                            return res.json(await Countries.findAll({
                                order: [['name', 'DESC']],
                                include: { model: Activities},
                                limit: 10,
                                offset: 10 * (page - 1)
                            }))
                        case "pobAsc":
                            return res.json(await Countries.findAll({
                                order: [['population', 'ASC']],
                                include: {model: Activities},
                                limit: 10,
                                offset: 10 * (page - 1)
                            }))
                        case "pobDes":
                            return res.json(await Countries.findAll({
                                order: [['population', 'DESC']],
                                include: {model: Activities},
                                limit: 10,
                                offset: 10 * (page - 1)
                            }))
                        case "Europe":
                            return res.json(await Countries.findAll({                      
                            where: {region: { [Sequelize.Op.iLike]: `%Europe%` }},
                            include: {model: Activities},
                            limit: 10,
                            offset: 10 * (page - 1)
                    }))

                    case  "Americas":
                        return res.json(await Countries.findAll({                           
                                where: {region: { [Sequelize.Op.iLike]: `%Americas%` }},
                                include: {model: Activities},
                                limit: 10,
                                offset: 10 * (page - 1)
                        }))

                    case  "Asia":
                            return res.json(await Countries.findAll({                              
                                where: {region: { [Sequelize.Op.iLike]: `%Asia%` }},
                                include: {model: Activities},
                                limit: 10,
                                offset: 10 * (page - 1)
                            }))


                    case  "Africa":
                                return res.json(await Countries.findAll({                                 
                                    where: {region: { [Sequelize.Op.iLike]: `%Africa%` }},
                                    include: {model: Activities},
                                    limit: 10,
                                    offset: 10 * (page - 1)
                                }))

                    case  "Oceania":
                                return res.json(await Countries.findAll({
                                   
                                    where: {region: { [Sequelize.Op.iLike]: `%Oceania%` }},
                                    include: {model: Activities},
                                    limit: 10,
                                    offset: 10 * (page - 1)
                                }))


                    case  "Polar":
                                return res.json(await Countries.findAll({
                                   
                                    where: {region: { [Sequelize.Op.iLike]: `%Polar%` }},
                                    include: {model: Activities},
                                    limit: 10,
                                    offset: 10 * (page - 1)
                                }))
                        default:
                                    return res.json(await Countries.findAll({
                                        include: { model: Activities },
                                        limit: 10,
                                        offset: 10 * (page - 1)
                                    }))
                }

               
            }

        if (name) {
            let country = await Countries.findAll({
                include: { model: Activities },
                where: { name: { [Sequelize.Op.iLike]: `%${name}%` } }
            })  
            return country ? res.json(country) : res.sendStatus(404)
        }

    } catch (e) {
        res.status(505).send(e)
    }
})

router.get('/:idPais', async function (req, res) {
    try {
        let { idPais } = req.params
        let country = await Countries.findByPk(
            idPais.toUpperCase(),
            { include: { model: Activities } }
        )
        country ? res.json(country) : res.sendStatus(404)
    } catch (error) {
        res.status(505).send(error)
    }
})


module.exports = router;