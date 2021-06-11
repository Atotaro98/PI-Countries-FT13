//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios = require('axios')
const { Countries } = require('./src/db');

// Syncing all the models at once.

let CreateDataBase = async () => {

let countries = await axios.get(`https://restcountries.eu/rest/v2/all`)
await Promise.all(countries.data.map((c) =>{
    let data = {
        name: c.name,
        alpha3Code: c.alpha3Code,
        flag: c.flag,
        capital: c.capital ? c.capital : 'no tiene capital',
        region: c.region,
        subregion: c.subregion,
        area: parseInt(c.area) ? parseInt(c.area) : 0,
        population: parseInt(c.population)  
    }
        Countries.findOrCreate({where: data})
        
    }))
    
  }

    CreateDataBase();
    console.log('DataBaseCreated')

  

conn.sync({ force: true }).then(() => {
   
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
